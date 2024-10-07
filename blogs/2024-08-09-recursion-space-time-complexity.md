---
title: Space time complexities for recursive algorithms
slug: 2024/recusive-space-time-complexities
tags:
- '2024-08'
- '2024'
- recursion
- time complexity
- daily
hide_table_of_contents: false
draft: true
---
- walk through simple algos (fibo, fac, tower of hanoi, biary search)<!-- truncate -->
- talk about depth and leaves
- talk about T(n) notation. ex: fibo is t(n) = t(n-1) + t(n-2) =~ 2*t(n-1) = 2*(2*t(n-2)) = 2^2*t(n-2) ....
- talk about complex graph algo (comnplexity would be in terms of vertices and edges)
- note about masters theorem

Sometimes, I have difficulties visualizing the time complexities of recursive algorithms. For iterative ones, not considering the tricky notorious ones, most of the time I can just count the number of instructions and make some sense of it, but doing so for recursive algorithms overflows my brain's stack.<!-- truncate --> I'll use this blog to jot down some ideas and approaches for doing complexity analysis on recursive algorithms.

I'll use some simple algorithms and deduce their analysis. This blog, by no means, is exhaustive and is mostly a primer and will, of course, not cover "clever" and intentionally notorious algorithms. So, let's get started with some algorithms.


## Factorial
A recusive implementation of factorial is
```python
def factorial(n):
    if n < 2:
        return 1
    return n*factorial(n-1)
```
This basically call itself `n` times before returning the result and each call takes a constant time, so complexity would be `O(n)`. Now, this was easy for my monkey brain and I could do the pattern reconnization and calculations in my head. But let's see if we can write it down systematicallky.
Let's take some examples
1. t(1): We immediately return, complexity is `O(1)` or let's denote it with `c` for constant time.
2. t(2): We do `2*t(2-1)` = Which is some constant time for multiplication + time for `t(2-1)` = `c + t(1)` = `2c`.
3. t(3): We do `3*t(3-1)` = Some constant time for multiplication + time for `t(3-1)` = `c+t(2)` = `c + 2c` = `3c`.

Do you see a pattern? No? Let's try again. Do you see the pattern? Still, not? Okay, the pattern is:
For n, time complexity would be = `nc` or `O(n)`.

## Fibonicci
Let's level up. Another simple recusive algorithm but complexity analysis of this one makes me spin
```python
def fib(n):
    if n <= 2:
        return 1
    return fib(n-1) + fib(n-2)
```
At first, it looks similar to previous example and my monkey brain tries to short ciruict it and think of it as `~2*fib(n-1)`, giving a complexity of `O(n)` - whicg is wrong.

Let's see if we can deduce it how we did the factorial.
1. t(1) or t(2) = `c`
2. t(3) = t(2) + t(1) + `c` (some constant time for addition) = `c+c+c` = `3c`
3. t(4) = t(3) + t(2) + `c` = `3c + c + c` = `5c`
4. t(5) = t(4) + t(3) + `c` = `5c + 3c + c` = `9c`

Do you see a pattern? Not yet? Let's do another one
t(6) = t(5) + t(4) = `9c + 5c + c` = `15c`

Do you see it yet? Maybe not? And that's fine as the pattern is not very explity in this case because the problem is not equally divided but the complexity is rising exponentially with some base between `1` and `2` and we can say it's `O(2^n)`.

It's interting to see how two seeminlgy similar algoritms have vastly different runtimes. BTW, if you were to write both of these algortihms iteratively, which is pretty starigjforward as well, time complecity for both would be `O(n)`.

## Notation
We already used the `t(n)` notation above but we went from `t(1)` to `t(n)` and tried to find a pattern while doing so. We could have gone backwards as well and it turns out that the oattern becomes more apprent while doinf so, as we mostly keep talking in terms of `n`.

Let's take the previus two examples for another spin.
### Factorial
t(n) = c + t(n-1) = c + (c + t(n-2)) = 2c + t(n-2) = 2c + (c + t(n-3)) = 3c + t(n-3)
Do you see the pattern? It is very evident in this case. The pattern is = `k*c + t(n-k)` where `k is 0 -> n`. If we do `k=n`, then `t(n) = n*c + t(0) = n*c +c = O(n)`

### Fibonacci
t(n) = t(n-1) + t(n-2) + c
t(n-1) and t(n-2) would be similar or at least when we talk about `big-O` notation, we can say t(n-1) = t(n-2) in this case, which gives us
t(n) = 2*t(n-1) + c = 2*(2*t(n-2)+c) + c = 2^2*t(n-2) + 2c + c
= 2^2*(2*t(n-3) + c) + 3c = 2^3*t(n-3) + 2^2c +  2c + c

Here, while the constant part is pretty significant, it's less than the first varibale part and thus can be ignored when using `big-O`. So, let's re-write it without the constant part

t(n) = 2*t(n-1) = 2*(2*t(n-2)) = 2^2*t(n-2) = 2^2*(2*t(n-3)) = 2^3*t(n-3)
Do you see the pattern? Again, it's very explicit. The pattern is = `2^k + t(n-k)` where `k is 0 -> n`. If we do `k=n`, then `t(n) = 2^n + t(0) = (2^n)*c = O(2^n)`

Let's try this approach on couple of more algorithms
## Tower of hanoi

## Binary search


Hopefully, this will help me kickstart the complexity analysis of some simple algorithms which follow simple patterns or have a fixed number of recursive calls at each recursion. Of course, it might not work or would be hard to generalize this for some "complex" graph algorithms. There's also [master's theorem](https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)) which helps with these complexity analyses, but for the life of me, I can't seem to remember that and don't find it intuitive enough. But check that out if it can work for you.

