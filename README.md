# Perfect-Timing
Two web-based stopwatches (one counting up and the other counting down)
A small set of stop watches in a single web page to play around with, contains the below requirement:

1.  1 input field: in which the user can specify how many seconds to count up to / down from. (calling this as countTarget.)
2.  2 read-only stopwatch displays: one counting up from 0 to countTarget, and the other counting down from countTarget to 0.
3.  2 sets of stopwatch controls: one set of controls (start/pause button and reset button) for each stopwatch.

User's functionality:

1. When the user enters a number into the input field, it resets one stopwatch to 0 and the other to countTarget.
2. The stopwatches always display in days, hours, minutes, and seconds (i.e. "3 days 1 hour 2 minutes 12 seconds").
3. Each stopwatch obeys its own start/pause button and reset button.
4. When a stopwatch reaches its target (either 0 or countTarget depending on which direction they are counting), the stopwatch stops counting and the start/pause button becomes disabled
