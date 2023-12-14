[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13163806&assignment_repo_type=AssignmentRepo)
# Traveling Salesperson Problem -- Empirical Analysis

For this exercise, you'll need to take the code from the TSP Held-Karp and TSP
Local Search exercises. This can be your own implementation or somebody else's.
You will now do an empirical analysis of the implementations, comparing their
performance. Both the Held-Karp and the Local Search algorithms solve the same
problem, but they do so in completely different ways. This results in different
solutions, and in different times required to get to the solution.

Investigate the implementations' empirical time complexity, i.e. how the runtime
increases as the input size increases. *Measure* this time by running the code
instead of reasoning from the asymptotic complexity (this is the empirical
part). Create inputs of different sizes and plot how the runtime scales (input
size on the $x$ axis, time on the $y$ axis). Your largest input should have a
runtime of *at least* an hour. The input size that gets you to an hour will
probably not be the same for the Held-Karp and Local Search implementations.

In addition to the measured runtime, plot the tour lengths obtained by both
implementations on the same input distance matrices. The length of the tour that
Held-Karp found should always be less than or equal to the tour length that
Local Search found. Why is this?

Add the code to run your experiments, graphs, and an explanation of what you did
to this markdown file.

# Response
This was quite an interesting exercise. The data entry part of it was rather tedious, but I really like how my chart turned out below. It made it much easier to enter data into the plot program I used.

I went about this using the code from my wildcard exercise to generate connected graphs of each size. I used the code I used for my TSP - Local Search Exercise to process these graphs into completely connected graphs with edge weights between 2 and 8. Then, I set up some simple timing commands for graphs up to input size 24, expecting to only use 18 or 19 of them at most. It took all the way up to input size 23 to run for over an hour, which actually ran out of memory and crashed as I was putting together the table below. You can see the exponential growth of my Held-Karp implementation vs the polynomial growth of my implementation of Local-Search in the TSP Comparison Graph image. You can also see the accuracy of tour length in the TSP Comparison - Length image. For the runtime, it is about as expected, with the runtimes diverging at an input size of 17. For the 
tour length, the Local-Search algorithm got a result that was around 2x the length of the Held-Karp algorithm's result. The Held-Karp's tour was always less than or equal to the Local Search's tour length, which makes sense as the Held-Karp algorithm will find the optimal tour length, while Local Search is simply testing a bunch of different ones at random, and keeping the smallest it finds.

The code for the implementations themselves is in code.js, and the code for the time comparison tests are in code.test.js. You can just manually run code.test.js to get another set of data points.

## TSP Comparison Chart
| Input Size | Held-Karp Time | Local-Search Time | Held-Karp Result | Local-Search Result |
| ---------- | --------- | ------------ | ------------ | ------------ |
| 1  | 2.699ms | 0.671ms | 0 | 0 |
| 2  | 0.546ms | 0.516ms | 3 | 3 |
| 3  | 0.409ms | 1.431ms | 10 | 11 |
| 4  | 2.108ms | 1.936ms | 6 | 17 |
| 5  | 0.872ms | 1.53ms | 9 | 17 |
| 6  | 3.238ms | 2.953ms | 16 | 27 |
| 7  | 6.479ms | 5.476ms | 14 | 29 |
| 8  | 12.495ms | 5.393ms | 15 | 39 |
| 9  | 30.156ms | 43.309ms | 19 | 38 |
| 10 | 78.725ms | 10.568ms | 18 | 33 |
| 11 | 155.601ms | 19.116ms | 22 | 41 |
| 12 | 352.731ms | 17.396ms | 23 | 52 |
| 13 | 880.112ms | 27.05ms | 25 | 39 |
| 14 | 2.122s | 38.967ms | 27 | 50 |
| 15 | 4.847s | 52.447ms | 28 | 63 |
| 16 | 11.847s | 61.529ms | 30 | 66 |
| 17 | 27.578s | 73.024ms | 32 | 70 |
| 18 | 1:03.633 (m:ss.mmm) | 91.657ms | 34 | 69 |
| 19 | 2:27.047 (m:ss.mmm) | 113.061ms | 36 | 77 |
| 20 | 5:43.948 (m:ss.mmm) | 130.738ms | 38 | 102 |
| 21 | 13:05.243 (m:ss.mmm) | 159.107ms | 40 | 76 |
| 22 | 34:29.766 (m:ss.mmm) | 183.764ms | 42 | 102 |
| 23 | Over an hour | 233.721ms | NA | 97 |
## References
I looked around at other people's graphs, to see if there was a built-in plot for Markdown. I didn't find one, but I saw Cade's fancy looking table and decided I wanted to use that format because it was really easy to follow.