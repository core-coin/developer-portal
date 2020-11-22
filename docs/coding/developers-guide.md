---
id: developers-guide
title: Go implementation of Core Blockchain
---

### Go Environment

We assume that you have `go` v1.14 installed, and `GOPATH` is set.

**Note**: You must have your working copy under `$GOPATH/src/github.com/core-coin/go-core`.

Since `go` does not use relative path for import, working in any other directory will have no effect, since the import paths will be appended to `$GOPATH/src`, and if the lib does not exist, the version at master HEAD will be downloaded.

Most likely you will be working from your fork of `go-core`, let's say from `github.com/nullname/go-core`. Clone or move your fork into the right place:

```text
git clone git@github.com:nullname/go-core.git $GOPATH/src/github.com/core-coin/go-core
```

### Managing Vendored Dependencies

All other dependencies are tracked in the vendor/ directory. We use [govendor](https://github.com/kardianos/govendor) to manage them.

If you want to add a new dependency, run `govendor fetch <import-path>`, then commit the result.

If you want to update all dependencies to their latest upstream version, run `govendor fetch +v`.

You can also use govendor to run certain commands on all go-core packages, excluding vendored code. Example: to recreate all generated code, run `govendor generate +l`.

### Building Executables

Switch to the go-core repository root directory.

You can build all code using the go tool, placing the resulting binary in `$GOPATH/bin`.

```text
go install -v ./...
```

go-core exectuables can be built individually. To build just geth, use:

```text
go install -v ./cmd/gocore
```

### Git flow

To make life easier try [git flow](http://nvie.com/posts/a-successful-git-branching-model/) it sets this all up and streamlines your work flow.

### Testing

Testing one library:

```text
go test -v -cpu 4 ./eth
```

Using options `-cpu` \(number of cores allowed\) and `-v` \(logging even if no error\) is recommended.

Testing only some methods:

```text
go test -v -cpu 4 ./eth -run TestMethod
```

**Note**: here all tests with prefix _TestMethod_ will be run, so if you got TestMethod, TestMethod1, then both!

Running benchmarks, eg.:

```text
go test -v -cpu 4 -bench . -run BenchmarkJoin
```

for more see [go test flags](http://golang.org/cmd/go/#hdr-Description_of_testing_flags)

### Metrics and monitoring

`gocore` can do node behavior monitoring, aggregation and show performance metric charts.

### Getting Stack Traces

If `gocore` is started with the `--pprof` option, a debugging HTTP server is made available on port 6060. You can bring up [http://localhost:6060/debug/pprof](http://localhost:6060/debug/pprof) to see the heap, running routines etc. By clicking full goroutine stack dump \(clicking [http://localhost:6060/debug/pprof/goroutine?debug=2](http://localhost:6060/debug/pprof/goroutine?debug=2)\) you can generate trace that is useful for debugging.

Note that if you run multiple instances of `gocore`, this port will only work for the first instance that was launched. If you want to generate stacktraces for these other instances, you need to start them up choosing an alternative pprof port. Make sure you are redirecting stderr to a logfile.

```text
gocore -port=30300 -verbosity 5 --pprof --pprofport 6060 2>> /tmp/00.glog
gocore -port=30330 -verbosity 5 --pprof --pprofport 6061 2>> /tmp/01.glog
```

Alternatively if you want to kill the clients \(in case they hang or stalled syncing, etc\) but have the stacktrace too, you can use the `-QUIT` signal with `kill`:

```text
killall -QUIT gocore
```

This will dump stack traces for each instance to their respective log file.

## Contributing

Thank you for considering to help out with the source code! We welcome contributions from anyone on the internet, and are grateful for even the smallest of fixes!

GitHub is used to track issues and contribute code, suggestions, feature requests or documentation.

If you'd like to contribute to go-core, please fork, fix, commit and send a pull request \(PR\) for the maintainers to review and merge into the main code base. If you wish to submit more complex changes though, please check up with the core devs first on [our Core Talk](https://coretalk.info) to ensure those changes are in line with the general philosophy of the project and/or get some early feedback which can make both your efforts much lighter as well as our review and merge procedures quick and simple.

PRs need to be based on and opened against the `master` branch \(unless by explicit agreement, you contribute to a complex feature branch\).

Your PR will be reviewed according to the [Code Review Guidelines](/coding/code-review-guidelines).

We encourage a PR early approach, meaning you create the PR the earliest even without the fix/feature. This will let core devs and other volunteers know you picked up an issue. These early PRs should indicate 'in progress' status.

