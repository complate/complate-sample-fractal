---
title: Pattern Library
---

This pattern library is based on [Fractal](https://fractal.build) and
[complate](https://complate.org).

NB: When using components' markup abstractions (i.e. complate macros), the host
    environment must augment the `context` object defined by `components/env.js`
    as described below.


URI Resolution
--------------

In order to ensure components can be developed in isolation, independent from
any particular application context, macros rely on a `context.uri` function to
resolve globally defined URIs:

* `common-assets` references static assets; the respective file name (e.g.
  `img/logo.png`) is passed as second argument
