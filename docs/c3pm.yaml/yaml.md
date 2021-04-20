---
id: yaml
title: Fields
---
## c3pm.yaml

### `c3pm_version`

The version of c3pm you are using, in semantic versioning format.

Mandatory: Yes

### `type`

This is either library or executable.

When you initialize your project, you have to choose between a library or an executable.

Mandatory: Yes

### `name`

The name of your project

When you initialize your project, you have to put a name on your project.

Mandatory: Yes

### `description`

A description of your project

When you initialize your project, you can put a description on your project.

Mandatory: No

### `version`

The version of your project in semantic versioning format.

When you initialize your project, you can choose the version of your project.
You cannot publish the same version twice, you will need to update this field when you want to publish your package again.

Mandatory: Yes

### `publish`
This section is related to the publication of your package.
This category contains three fields:
#### `include_dirs`
Path to your header directory

#### `include`
Files you want to publish

#### `exclude`
Files you don't want to publish

Mandatory: No

### `build`

This category contains two fields:

#### `adapter`
This category contains two fields:
##### `name`
Name of the adapter you want to use
##### `version`
Version of the adapter you want to use in semantic versioning

#### `config`
The configuration of the adapter. It may vary a lot depending on the adapter you are using

Mandatory: No

### `documentation`

The url for your project's documentation.

Mandatory: No

### `website`

The url for the project's website.

Mandatory: No

### `repository`

The url for the project's repository.

Mandatory: No

### `contributors`

A listing of name/pseudo of the contributors of the project.

Mandatory: No

### `standard`

The version of C++ you are using.

Default value: `20`

Mandatory: Yes

### `license`

The license of your project.

Default value: `UNLICENSED`

Mandatory: Yes

### `dependencies`

A ist of all the dependencies of your project.

Mandatory: Yes

### `tags`

A list of tags to help the user find your package on the platform

Mandatory: No

### Example:

```bash
c3pm_version: v1
type: library
name: project
description: this is an exemple of a c3pm.yml file
version: 1.0.0
publish:
  include_dirs: "path/to/headers/dir"
  include:
    - "tutorial.txt"
  exlude:
    - "my-environment"
build:
  adapter:
    name: "exampleAdapter"
    verion: 0.2.8
    config: {}
documentation: "url-to-documentation.io"
website: "url-to-website.io"
repository: "url-to-repository.io"
contributors: ['Author A.', 'Author B.']
standard: "20"
license: MIT
dependencies: {
  "superlib": 1.0.3
  "examplelib": 0.0.7
}
tags:
  - 'example'
  - 'utils'
  - 'c3pm'
```
