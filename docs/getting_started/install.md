---
id: install
title: Downloading and installing C3PM
---

To publish and install package to and from the C3PM registry, you need the C3PM command line interface.

## Installing a prebuilt release

:::info
C3PM currently does not support prebuilt release, please refer to the [Building from source](#building-from-source) section.
:::

## Building from source

To build from source you will need the following:

* [Go 1.11](https://golang.org) or later.
* [Git](https://git-scm.com)

Start by cloning the C3PM repository:

```bash
git clone https://github.com/c3pm-labs/c3pm
cd c3pm
```

Then build and install the project:

```bash
go build -o c3pm
sudo install c3pm /usr/bin
```

You should now have the `c3pm` tool globally available.

```bash
c3pm
```