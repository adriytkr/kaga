---
title: Kadane
description: Kadane Description
---
# {{$frontmatter.title}}

Given an array of integers, the **maximum subarray problem** asks: what is the contiguous subarray with the largest sum? The array can contain negative numbers, which means the answer isn't always the whole array — and that's what makes it interesting.

---

## Naive Approach

The brute force solution checks every possible subarray and tracks the maximum sum found.

```python
def max_subarray_brute(arr):
  best = float('-inf')
  for i in range(len(arr)):
    total = 0
    for j in range(i, len(arr)):
      total += arr[j]
      best = max(best, total)
  return best
```

The time complexity for this approach is **O(n²)**. It works well for small arrays, but it doesn't scale.

---

## Kadane's Algorithm

We can efficiently solve the problem in **O(n)** by applying **Dynamic Programming**. We apply Kadane's Algorithm.

<!-- VIDEO: Insert YouTube animation here -->

### Intuition

We traverse the array only once and keep track of two values:
- The **best sum** found so far across the entire traversal.
- The **current sum** — the best possible sum for the subarray ending at the current index.

At each index, we decide: is it better to extend the current subarray, or start fresh? If the current sum is negative, it's dead weight — we restart. Otherwise, we extend.

```
current = max(arr[i], current + arr[i])
```

### Implementation

```python
def kadane(arr):
  best = float('-inf')
  current = 0

  for n in arr:
    if current + n < n:
      current = n        # restart
    else:
      current += n       # extend

    if current > best:
      best = current

  return best
```

<!-- CHECKPOINT: Multiple choice (single correct)
  Question: "When does Kadane's algorithm restart the current subarray?"
  Options:
    A) When the current element is negative
    B) When the running sum becomes negative
    C) When adding the current element to the running sum yields less than the element alone
    D) When the current sum is less than the global best
  Correct: C
-->

### Recovering the Indices

The implementation above returns only the sum. To also recover the subarray itself, we track indices whenever `current` or `best` gets updated:

```python
def kadane_with_indices(arr):
  best = float('-inf')
  current = 0
  start = end = 0
  temp_start = 0

  for i, n in enumerate(arr):
    if current + n < n:
      current = n
      temp_start = i
    else:
      current += n

    if current > best:
      best = current
      start = temp_start
      end = i

  return best, start, end
```

`temp_start` marks where the current candidate subarray begins. It only gets promoted to `start` once it beats the global best.

<!-- CHECKPOINT: Discursive — fill in the blank (number input)
  Prompt: "Given [-3, -1, -4, -2], the pointer is pointing at index 2, how Kadane's Algorithm will behave? It will [extend/reset] because is [].
-->

---

## Complexity

| | Complexity |
|---|---|
| Time | O(n) |
| Space | O(1) |

One pass, two variables. Since every element must be read at least once, O(n) is a lower bound — Kadane is optimal.

---

## Variations

**All-negative arrays** — works without modification. Restarting at each step is always better than extending a negative sum, so the result is the least negative element.

**Circular arrays** — the maximum subarray either sits within the array (standard Kadane) or wraps around both ends. The wrap case equals `total_sum - minimum_subarray_sum`, solvable by running Kadane with inverted signs. Take the max of both.

**Maximum product subarray** — same extend-or-restart logic, but now two negatives can multiply into a positive. Track both the current max and current min at each step, since either could produce the new best.

**2D maximum subarray** — fix left and right column boundaries, collapse each row slice into a single value, then run 1D Kadane. Doing this for all boundary pairs gives O(n³) overall.

<!-- CHECKPOINT: Multiple choice (multiple correct)
  Question: "Which of the following correctly describe Kadane's algorithm?"
  Options:
    A) It is an example of dynamic programming
    B) It requires the array to be sorted
    C) It runs in O(n) time and O(1) space
    D) It fails when all elements are negative
    E) The decision at each step depends only on the current element and the running sum
  Correct: A, C, E
-->

---

## History

For those who like history ...
It was developed by ...

---

## Summary

Kadane reduces the maximum subarray problem to a single pass with one decision per element: extend or restart. The global best updates whenever the current window beats it.

The extend-or-restart pattern shows up in many sequence problems — the product variant, the circular variant, and others. Once you see it here, you'll recognize it elsewhere.
