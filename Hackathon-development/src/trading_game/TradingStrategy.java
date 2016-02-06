package trading_game;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import exceptions.InsufficientFundsException;
import exceptions.InsufficientSharesException;
import game.BaseTradingStrategy;
import game.DailyInput;
import game.DailyOutput;

/**
 * DESIGN
 *
 * 2 levels of analysis
 *
 * Exponential Moving Average - Level 1 Confidence
 *  Compare the EMA with the recent value
 *  If it's less than the recent value it means going up.
 *  Else going down or stalling
 *
 * Significant Peaks Analysis (SPA) - Level 2 Confidence
 *
 * The main point is that EMA might not give the true trend of the market which is why we need another level of analysis.
 * The SPA will attempt to see if all the Significant peaks are recent.
 *  If that's the case, then it means the trend derived from EMA should be correct. We could attempt to do a big trade.
 *
 * Else (i.e. trend is still upwards but all the significant peaks are in the past - POSSIBLE!) then it means the trend
 * is probably coming down recently which means we don't do trading too much. (Confidence scrore not guaranteed)
 *
 */
public class TradingStrategy extends BaseTradingStrategy {

    public TradingStrategy (){
        // Initialise any variables needed.

    }
    // Analysis level 1: Exponential Moving Average
    // calculate the Exponential Moving Average of the daily input stocks which is useful for analysis
    public double EMA(List<DailyInput> l){
        double ema = 0;
        Double[] alphas = new Double[l.size()];
        double a = 2 / (1 + l.size());
        double divider = 0;
        for (int i = 0; i < l.size(); i++) {
            alphas[i] = Math.pow(1 - a, i);
            divider += alphas[i];
        }
        assert divider != 0; // make sure no division by 0 thrown.
        // calculate the ema
        double sum = 0;
        for (int i = 0; i < l.size(); i++) {
            // get the avg
            DailyInput in = l.get(i);
            double avg = (in.getClose() + in.getOpen() + in.getHigh() + in.getLow() ) / 4;
            sum += alphas[i] * avg;
        }
        return sum / divider;
    }


    // Analysis level 2: Highest peaks Analysis

    /**
     * Level 2 analysis
     *
     * see if the highest peak is
     *
     * @param crossover the EMA price cross over
     * @param input
     * @param daysToConsider
     * @return int the number of tests passed.
     */
    public int HighestPeaksAnalysis(double crossover, List<DailyInput> input, int daysToConsider) {
        if (input.size() < daysToConsider) {
            return 1;
        }

        DailyInput today = input.get(0);
        // sub list to analyse against the today Daily Input
        List<DailyInput> past = input.subList(1, daysToConsider);

        List<DailyInput> past_sorted = new ArrayList<>(past);

        Collections.sort(past_sorted, DailyInputComparator.getInstance());

        // either highest inputs or lowest input based on the crossover
        List<DailyInput> significant_inputs ;

        // only consider more recent half from the stocks
        int totalDaysToConsider = daysToConsider / 2;
        int number_of_tests_needed_toPass = 3;

        boolean up = crossover > 0;

        // take the significant half to analyse against today input
        if (up) {
            significant_inputs = past_sorted.subList(totalDaysToConsider / 2, totalDaysToConsider);
        }
        else {
            significant_inputs = past_sorted.subList(0, totalDaysToConsider / 2);
        }

        // number of test case passed
        int significant_matches_count = 0;

        if (up) {
            for (DailyInput significant_input : significant_inputs) {
                // today matches
                if (Util.getavg(significant_input) < Util.getavg(today)) {
                    significant_matches_count++;
                }
            }
        }
        else {
            for (DailyInput significant_input : significant_inputs) {
                // today matches
                if (Util.getavg(significant_input) > Util.getavg(today)) {
                    significant_matches_count++;
                }
            }
        }

        System.out.printf("%d: Number of tests passed for daily input number %d: %d\n", today.getDay(), today.getDay(), significant_matches_count);

        // a credible prediction
        if (significant_matches_count >= number_of_tests_needed_toPass) {
            System.out.printf("%d: BUY OR SELL PLEASE, \ntest passed for going (true is up, false is down): %B\n", today.getDay(), up);
        }
        else  {
            System.out.printf("%d: significant matches not enough: %d\n", today.getDay(), significant_matches_count);
        }

        return significant_matches_count * (up ? 1 : -1);
    }

    public DailyOutput doTrade(int count, DailyInput today, int countNeededToPass) throws InsufficientFundsException, InsufficientSharesException {

        DailyOutput output;

        if (count > 0 )
        {
            if (count == countNeededToPass)
                // buy all out
                return tradingManager.buySharesOfValue(today, tradingManager.getAvailableFunds() );
            else
                // buy 1/2
                if((int)(countNeededToPass / count) == 0){
                    return tradingManager.doNothing(today);
                }
            return tradingManager.buySharesOfValue(today, tradingManager.getAvailableFunds() / 2  );
        }
        else if ( count < 0)  {
            if (count == Math.abs(countNeededToPass))
                // sell all out
                return tradingManager.sellNumberOfShares(today, tradingManager.getSharesOwned());

            else{
                if((int)(countNeededToPass / count) == 0){
                    return tradingManager.doNothing(today);

                }
                return tradingManager.sellNumberOfShares(today, tradingManager.getSharesOwned() / (countNeededToPass / Math.abs(count)));
            }
        }
        return null;
    }
    List<DailyInput> pastStock  = new ArrayList<DailyInput>();
    @Override
    public DailyOutput makeDailyTrade(DailyInput input) throws InsufficientFundsException, InsufficientSharesException {
        // add the most recent day from
        if(input.getRemainingDays() == 0){
            pastStock  = new ArrayList<DailyInput>();
            pastStock.add(0, input);
        }
        else
            pastStock.add(0, input);

        //get the Exponential Moving Average for the stock chart
        double crossover = EMA(pastStock);


        // compare with closing price
        double crossprice = input.getClose() - crossover;

        return doTrade(HighestPeaksAnalysis(crossprice, pastStock, 250), input, 3 );

//    System.out.println(crossprice);

//    DailyOutput output;
//    if (input.getDay() % 2 == 0) {
//       output = tradingManager.buyMaxNumberOfShares(input);
//
//    } else {
//       output = tradingManager.sellAllShares(input);
//    }
    }
}