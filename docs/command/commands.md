---
id: commands
title: C3PM commands
---
### How to use c3pm commands?

`ctpm add`

This commands adds a new dependency to the current project. It downloads, unpacks, builds and installs the dependency following the dependency handling spec.

`packages` is a list of terms, each indicating a package to add as a dependency. Each entry should follow the format:

```bash
name[@version]
```

Where `name` is the name of the package to install, and `version` describes the version to install, defaulting to `latest`.

###### Options

* `--force` - Will redo the whole installation process even if the package is already installed.

### `ctpm init`

This command initializes a project so that the user can start programming right away.

By default, running this command will create a few files:

* A c3pm.yml file.
* Depending on the user's choice, a project template of either a library or an executable.
* A CMakeLists.txt file.
* A .c3pm directory.
* Depending on the user's choice, a LICENSE file.

The command accepts one positional argument, indicating the directory in which to init the project. If the user doesn't provide any arguments, the project will be initialized in the current directory.

###### User interaction

In order to init the project correctly, the CLI will ask some information about it.

* The **type** of the project, which can be either `executable` or `library`.
* The **name** of the project.
* A short **description** of the project.
* The **version** of the project, using SemVer format.
* The **licence** to use.

###### Options

In addition, this command has some options to alter its behavior.

* `--no-template` - will not create a code template.

### `ctpm login`

This command allows the user to login.

###### User interaction

This command will ask the following information to the user:

* Its **username**.
* Its **password**.

### `ctpm logout`

This command logs the user out of the application.

### `ctpm build`

This command compiles the current project. It generates the cmake scripts following the configuration in `c3pm.yml` then executes the `cmake` and `make` commands.

It stores the generated files following the .c3pm directory specs.

The command then copies the build output in the project's root.

###### Options

* `--output, -o <dest>` - change the output file name

### `ctpm publish`

The publish command handles the package publication process.

It must first check if an authentication file exists under the user-level .c3pm directory, and aborts if none exists. Otherwise, it must follow the publication process specs.