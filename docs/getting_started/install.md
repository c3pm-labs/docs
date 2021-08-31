---
id: install
title: Downloading and installing C3PM
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To publish and install package to and from the C3PM registry, you need the C3PM command line interface.


## Installing a prebuilt release


We provide prebuilt binaries directly in [github release](https://github.com/c3pm-labs/c3pm/releases/latest)

You can download packages there or use our repos when available


### Linux

:::caution
No c++ compiler is being installed alongside c3pm, this is left to the user
:::

<Tabs
	defaultValue="deb"
	values={[
		{label: 'deb', value: 'deb'},
		{label: 'rpm', value: 'rpm'},
		{label: 'Manually', value: 'manually'},
	]}
>
<TabItem value="deb">

**Debian 11, Ubuntu 20, Mint 20, PopOs 20+**

```bash
apt update
apt install ./c3pm_0.0.1_linux_amd64.deb
```
</TabItem>
<TabItem value="rpm">

**OpenSuse/RHEL Based**

```bash
yum install ./c3pm_0.0.1_linux_amd64.rpm    # CentOS
dnf install ./c3pm_0.0.1_linux_amd64.rpm    # Fedora/RHEL
zypper install ./c3pm_0.0.1_linux_amd64.rpm # OpenSUSE
```

</TabItem>
<TabItem value="manually">

Before installing c3pm, you should install CMake and a c++ compiler

```bash
tar xvf ./c3pm_0.0.1_Linux_x86_64.tar.gz
ls
#> LICENSE.txt  README.md  c3pm_0.0.1_Linux_x86_64.tar.gz  ctpm
```
</TabItem>
</Tabs>


### MacOS

C3PM provides a tap to install and update it easily

```
brew tap c3pm-labs/c3pm
brew install c3pm
ctpm -v
```

### Windows

We do not yet have repositories to easily install c3pm on windows.

You should download windows archive in [github release](https://github.com/c3pm-labs/c3pm/releases/latest).
Installation of cmake and a c++ compiler is left to user.

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
mkdir build
go build -o build/ctpm
sudo install build/ctpm /usr/bin
```

You should now have the `c3pm` tool globally available.

```bash
c3pm
```
