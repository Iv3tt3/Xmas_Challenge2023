Santa 🎅 is testing his new electric sled, the CyberReindeer, on a North Pole road. 

The road is represented by a string of characters, where:

<pre>
. = Road

S = Santa's Sled

* = Open barrier

| = Closed barrier
</pre>
Example of a road: S...|....|.....

Each unit of time, the sled moves one position to the right. If it encounters a closed barrier, it stops until the barrier opens. If it is open, it goes through directly.

All barriers start closed, but after 5 units of time, they all open forever.

Create a function that simulates the sled's movement for a given time and returns an array of strings representing the state of the road at each unit of time:

<pre>

Test: cyberReindeer('S..|...|..', 10)

Expected:
[
  'S..|...|..', // initial state
  '.S.|...|..', // sled advances on the road
  '..S|...|..', // sled advances on the road
  '..S|...|..', // sled stops at the barrier
  '..S|...|..', // sled stops at the barrier
  '...S...*..', // barrier opens, sled advances
  '...*S..*..', // sled advances on the road
  '...*.S.*..', // sled advances on the road
  '...*..S*..', // sled advances on the road
  '...*...S..', // passes through the open barrier
]

Test: cyberReindeer('S.|.', 4)

Expected:
[
  "S.|.",
  ".S|.",
  ".S|.",
  ".S|."
]

Test: cyberReindeer('S.|.|.', 7)

Expected:
[
  "S.|.|.",
  ".S|.|.",
  ".S|.|.",
  ".S|.|.",
  ".S|.|.",
  "..S.*.",
  "..*S*."
]

Test: cyberReindeer('S.|..', 6)

Expected:
[
  "S.|..",
  ".S|..",
  ".S|..",
  ".S|..",
  ".S|..",
  "..S.."
]

Test: cyberReindeer('S.|.|.|......|.||.........', 8)

Expected:
[
  "S.|.|.|......|.||.........",
  ".S|.|.|......|.||.........",
  ".S|.|.|......|.||.........",
  ".S|.|.|......|.||.........",
  ".S|.|.|......|.||.........",
  "..S.*.*......*.**.........",
  "..*S*.*......*.**.........",
  "..*.S.*......*.**........."
]

</pre>