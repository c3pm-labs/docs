---
id: test_drive
title: Test drive
---

This page describes how to create a new C++ project with c3pm, add a library, build it and
run it.

## Create the project

Use the `ctpm init` command to create a new project:

```bash
ctpm init myproject
cd myproject
```
The command creates a C++ project directory called `myproject` that contains a simple program that prints a string.

:::tip
The code for your project is in src/main.cpp.
:::

## Add a library

Use the `c3pm add` command to add a library to your project.

```bash
ctpm add test-add
```
The command adds a library with a function that adds two numbers.

Once you've added the library, copy and paste the following code in your `src/main.cpp`.

```cpp
#include <iostream>
#include "test-add.hpp"

int main() {
	std::cout << add(3, 4) << std::endl;
	return 0;
}
```

This code imports the newly added library and prints the result of the `add` function call.

## Build the project
At the root of the project, build with the following command:

```bash
ctpm build
```

## Run the project

When your project is done building, you should have an executable at the root.

```bash
./myproject
```