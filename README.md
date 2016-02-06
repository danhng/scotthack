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
