---
id: publish
title: Write your first package
---

This is a guide to creating your first c3pm package. If you are familiar with basic programming concepts such as variables and functions, you can complete this tutorial.

## What you'll build

You'll implement a simple library with a function that adds two numbers.
We will then show you how to publish your package.

## Step 1: Create the starter c3pm project

Use the `ctpm init` command to create a new project and make sure you select `library` as project type:

```bash
ctpm init test-add
? Project name test-add
? Project type [Use arrrows to move, type to filter]
  executable
> library
```

The command creates a C++ project directory called `test-add` that contains a simple program that prints a string.

:::tip
The code for your project is in src/test-add.cpp and the header file is in include/test-add.hpp.
:::

## Step 2: Write your package

It's time to write your package, copy and paste the following code in your `src/test-add.cpp`:

```cpp
#include "test-add.hpp"

int add(int a, int b) {
	return a + b;
}
```

## Step 3: Build your package

At the root of the project, build with the following command:

```bash
ctpm build
```

The command builds your library and you should now have a file named `libtest-add.a` at the root.

## Step 4: Publish your package

You need to be logged in to publish a package.
You can create your account on our [website](https://c3pm.io/register).

Once you've registered, you can now login via the command line interface with the `ctpm login` command:
```bash
ctpm login
```

Use the `ctpm publish` command to publish your package:

```bash
ctpm publish
```

## Next Step

Congratulations !

You've written your first C++ package with c3pm.

You can view all your published packages on our [website](https://c3pm.io/) in the profil section.
You can also check out other people packages and search for packages.