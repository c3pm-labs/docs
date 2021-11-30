---
id: commands
title: C3PM commands
---
### How to use c3pm commands?

### `add`

This command adds a new dependency to the current project. It downloads, unpacks, builds and installs the dependency following the dependency handling spec.

###### Command format

```bash
ctpm add [packages ...] [options]
```

`packages` is a list of terms, each indicating a package to add as a dependency. Each entry should follow the format:

```bash
name[@version]
```

Where `name` is the name of the package to install, and `version` describes the version to install, defaulting to `latest`.

###### Options

* `--force` - Will redo the whole installation process even if the package is already installed.

### `remove`

This command removes a dependency from the `c3pm.yaml`.

###### Command format

```bash
ctpm remove [packages ...]
```

`packages` is a list of package name to remove.

### `init`

This command initializes a project so that the user can start programming right away.

###### Command format

```bash
ctpm init [?path]
```

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

### `login`

This command allows the user to login.

###### Command format

```bash
ctpm login
```

###### User interaction

This command will ask the following information to the user:

* Its **username**.
* Its **password**.

### `logout`

This command logs the user out of the application

###### Command format

```bash
ctpm logout
```

### `build`

This command compiles the current project. It generates the cmake scripts following the configuration in `c3pm.yml` then executes the `cmake` and `make` commands.

It stores the generated files following the .c3pm directory specs.

The command then copies the build output in the project's root.

###### Command format

```bash
ctpm build
```

###### Options

* `--output, -o <dest>` - change the output file name

### `publish`

The publish command handles the package publication process.

###### Command format

```bash
ctpm publish
```

It must first check if an authentication file exists under the user-level .c3pm directory, and aborts if none exists. Otherwise, it must follow the publication process specs.

### `list`

The command will list all the dependencies need for your project recursively.

###### Command format

```bash
ctpm list
```

###### Options

* `--tree` - display the result in a tree format

### `test`
The command will run the test specified in the `test_sources` and `test_headers` fields of your c3pm.yaml.
Those are optional values, to know the default values check the c3pm.yaml documentation.

###### Command format

```bash
ctpm test
```
