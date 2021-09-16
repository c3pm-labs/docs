---
id: import_cmake
title: Import a cmake script using cmake adapter
---

## CMake Adapter

C3PM bundle a cmake adapter that will build using a CMakeLists.txt at project root
You can also specify targets name so they are copied after build

### c3pm.yml

```yaml
c3pm_version: v1
type: executable
name: my_project
description: ""
version: 1.0.0
publish:
  include:
  - '**/**'
build:
  adapter:
    name: cmake
    version: 0.0.1
  config:
    targets:
    - Binary1
    - Binary2
documentation: ""
website: ""
repository: ""
contributors: ""
standard: "20"
license: UNLICENSED
dependencies: {}
```

In this manifest we can spot the cmake adapter config with two binaries that will be copied to project's root after build

### Build

To build you can simply use `ctpm build`, build will be done in `.c3pm/build` and binaries will be copied