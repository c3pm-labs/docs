---
id: cli
title: Contributing to C3PM's CLI
---


How to get started developing on C3PM's CLI ?

## Installation

To get started with C3PM you will need:

* Go version 1.13 or later
* CMake version 2.11 or later

Start by downloading the repository:

```bash
git clone https://github.com/c3pm-labs/c3pm
```

And download the dependencies needed to work with the project

```bash
go get
```

## Project architecture

The project is split into the following directories:

* `api`: This package hosts the code needed to communicate with a C3PM-compliant API, mainly for authentification purposes.
* `cmake` and `cmakegen`: Both packages work with CMake as the name suggest. The former is focused on interacting with CMake's Command Line Interface, while the
latter hosts the code used to generate CMake build scripts depending on the user's configuration.
* `cmd`: This package hosts the structure of the CLI itself. See [below](#cmd) for more details.
* `config`: This package handles the various configuration files used by C3PM (see [the specs](https://github.com/c3pm-labs/specs) for more details about the use and structure of config files). 
The package both handles reading and parsing as well as writing the changes automatically made to the configuration.
	* `manifest`: This subdirectory specifically holds the various types and methods used to work with the C3PM `manifest`, often located at `c3pm.yml`.
* `ctpm`: This package holds the core logic of the commands. There is a file per command, handling most of the work needed by the command, if not better fitting for another package.
* `registry`: This package is pretty similar to the `api` package, but instead handling the communication with C3PM's [registry](https://github.com/c3pm-labs/registry).

### cmd

C3PM's cli is build with [kong](https://github.com/alecthomas/kong) as it's primary CLI framework. Kong works by defining the CLI with a multitude of structures
each describing a part of the CLI, whether it is a simple flag or a subcommand. The logic called by the command is defined in a `Run()` method defined on the command type, making it
easy to pass arguments to the command.

## Creating a new command

To create a new command is pretty straightforward:

* For starters you need to create a new file under `cmd`, with a structure type named following the following format: `<Name>Cmd`. This structure must contain fields for each of the command line flags
of the command, with documentation for each.
* You then need to create a `Run() error` method on your type, in which you'll add the code handling your command. Try to keep the functions as small as possible, only doing a simple Load/Execute/Cleanup flow,
the core logic of your command should go to another file under the `ctpm` package.
* Once you've created the logic of your command, simply add a new field to the `CLI` structure in `cmd/root.go` to register your command, and it is done, your command has now been added to C3PM.