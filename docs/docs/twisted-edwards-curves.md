---
id: twisted-edwards-curves
title: Twisted Edwards Curves
---

Twisted Edwards curves are parameterized by $a, d$ and are of the form

$$
\mathcal E_{a,d}​:ax^2+y^2=1+dx^2y^2.
$$

These are usually represented by the [Extended Twisted Edwards Coordinates](https://eprint.iacr.org/2008/522.pdf) of Hisil, Wong, Carter, and Dawson: points are represented in projective coordinates as $(X : Y : Z : T)$ with

$$
XY=ZT,\ \ aX^2+Y^2=Z^2+dT^2.
$$

\(More details on Edwards curve models can be found in the [`curve25519_dalek` `curve_models`](https://doc-internal.dalek.rs/curve25519_dalek/curve_models/index.html) documentation\). The case $a = 1$ is the _untwisted_ case; the case $a = -1$ provides the fastest formulas. Unless specified otherwise, we $\mathcal E$ for $\mathcal E_{a,d}$​.

When both $d$ and $ad$ are nonsquare \(which forces $a$ to be square\), the curve is _complete_. In this case the four-torsion subgroup is cyclic, and we can write it explicitly as

$$
\mathcal E_{a,d}​[4] = \{(0,1), (1/\sqrt a, 0), (0, -1), (-1/\sqrt a, 0)\}
$$

These are the only points with $xy = 0$; the points with $y \neq 0$ are 2-torsion.
