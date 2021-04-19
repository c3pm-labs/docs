---
id: yaml
title: Fields
---
### c3pm.yaml

##### `c3pm_version`

This field is the version of c3pm that you are using.

Mandatory: Yes

##### `type`

This field is either a library or an executable.

When you initialize your project, you have to choose between a library or an executable.

Mandatory: Yes

##### `name`

This field is the name of your project

When you initialize your project, you have to put a name on your project.

Mandatory: Yes

##### `description`

This field is the description of your project

When you initialize your project, you can put a description on your project.

Mandatory: No

##### `version`

This field is the version of your project.

When you initialize your project, you can changethe version of your project.

Mandatory: Yes

##### `documentation`

This field is the url for your project's documentation.

Mandatory: No

##### `website`

This field is the url for the project's website.

Mandatory: No

##### `readme`

This field is the path for the project's README.

Default value: `./README.md`

Mandatory: No

##### `repository`

This field is the url for the project's repository.

Mandatory: No

##### `authors`

This field is listing all contributors of the project.

Mandatory: No

##### `standard`

This field is the version of CPP that you are using.

Default value: `20`

Mandatory: Yes

##### `license`

This field is the license of your project.

Default value: `UNLICENSED`

Mandatory: Yes

##### `files`

This field groups together all your source and include files in order to compile.

Default value:

```bash
sources:
  - '**/*.cpp'
  includes:
  - '**/*.hpp'
  include_dirs: []
  exported_dir: ""
  exported_include_dirs: []
```

Mandatory: Yes

##### `dependencies`

This field list all dependencies of your project.

Mandatory: Yes



Example:

```bash
c3pm_version: v1
type: library
name: project
description: this is an exemple of a c3pm.yml file
version: 1.0.0
documentation: "url/to/documentation"
url: "url/to/website"
readme: "path/to/readme"
repository: "url/to/repository"
authors: ['Author A.', 'Author B.']
standard: "20"
license: MIT
files:
  sources:
  - '**/*.cpp'
  includes:
  - '**/*.hpp'
  include_dirs: []
  exported_dir: ""
  exported_include_dirs: []
dependencies: {}
```
