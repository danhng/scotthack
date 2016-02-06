package trading_game;

import game.DailyInput;

import java.util.Comparator;

/**
 * Created by dtn on 06/02/16.
 */

/**
 * Comparator of Daily Inputs based on the average of the price
 */
public class DailyInputComparator implements Comparator<DailyInput> {

public static DailyInputComparator instance;

    public static DailyInputComparator getInstance() {
        if (instance != null)
            return instance;
        instance = new DailyInputComparator();
        return instance;
    }

    @Override
    public int compare(DailyInput o1, DailyInput o2) {
        return (int) (Util.getavg(o1) - Util.getavg(o2));
    }
}
