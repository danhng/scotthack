package trading_game;

import game.DailyInput;

/**
 * Created by dtn on 06/02/16.
 */
public class Util {

    public static double getavg(DailyInput i) {
        return (i.getHigh() + i.getClose() + i.getOpen() + i.getLow()) / 4;

    }
}
