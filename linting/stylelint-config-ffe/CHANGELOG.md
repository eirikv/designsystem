# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.0.0"></a>
# 1.0.0 (2018-02-25)


### Bug Fixes

* **stylelint-config-ffe:** Ignore flex-flow shorthand ([0622fb7](https://github.com/SpareBank1/designsystem/commit/0622fb7))


### Chores

* add [@sb1](https://github.com/sb1)/ scope to all packages ([37efbb4](https://github.com/SpareBank1/designsystem/commit/37efbb4))


### Features

* **stylelint-config-ffe:** Add contribute.md link to readme ([bbeafb4](https://github.com/SpareBank1/designsystem/commit/bbeafb4))


### BREAKING CHANGES

* All packages have been renamed to add the @sb1 scope.

See links [1] and [2] to read more about package scopes.

Unfortunately this requires you update both your dependencies in
`package.json` and all `import` or `require` statements in your code.
Also, you unfortunately have to upgrade all FFE packages at once due to
dependency between packages. If you are on the latest version prior to
this breaking change the upgrade should be a matter of updating
`package.json` with new package names and versions, and updating your
imports.

To help find the proper package versions you can either browse to the
packages you need or check out the list of Git tags either on
Github [3] or by cloning the repository and running the `git tag`
command. All package versions get a tag in the format
_package@version_.

Update your `package.json` with the latest package version and add the
@sb1 scope to the package name:

```diff
- "ffe-core": "11.0.2",
+ "@sb1/ffe-core": "11.0.2",
```

Scoped packages all get put in a subdirectory in `node_modules/`. In our
case packages will be put in the `node_modules/@sb1/` directory. If your
build depends on file paths (for instance for copying fonts) you need to
update that path to include the scope.

The directory structure also means you have to update your imports, both
in Less and in JavaScript.

Using `less-plugin-npm-import`:

```diff
- @import 'npm://ffe-core/less/ffe';
+ @import 'npm://@sb1/ffe-core/less/ffe';
```

Using Webpack:

```diff
- @import '~ffe-core/less/ffe';
+ @import '~@sb1/ffe-core/less/ffe';
```

Using plain old paths:

```diff
- @import '../path/to/node_modules/ffe-core/less/ffe';
+ @import '../path/to/node_modules/@sb1/ffe-core/less/ffe';
```

JavaScript `import`:

```diff
- import { ActionButton } from 'ffe-buttons-react';
+ import { ActionButton } from '@sb1/ffe-buttons-react';
```

JavaScript `require`:

```diff
- const { ActionButton } = require('ffe-buttons-react').default;
+ const { ActionButton } = require('@sb1/ffe-buttons-react').default;
```

[1]: https://docs.npmjs.com/misc/scope
[2]: https://docs.npmjs.com/getting-started/scoped-packages
[3]: https://github.com/sparebank1/designsystem/tags




<a name="0.4.4"></a>
## [0.4.4](https://github.com/SpareBank1/designsystem/compare/stylelint-config-ffe@0.4.3...stylelint-config-ffe@0.4.4) (2018-02-22)




**Note:** Version bump only for package stylelint-config-ffe

<a name="0.4.3"></a>

## [0.4.3](https://github.com/SpareBank1/designsystem/compare/stylelint-config-ffe@0.4.2...stylelint-config-ffe@0.4.3) (2018-01-10)

**Note:** Version bump only for package stylelint-config-ffe

<a name="0.4.2"></a>

## [0.4.2](https://github.com/SpareBank1/designsystem/compare/stylelint-config-ffe@0.4.1...stylelint-config-ffe@0.4.2) (2018-01-04)

**Note:** Version bump only for package stylelint-config-ffe

<a name="0.4.1"></a>

## [0.4.1](https://github.com/SpareBank1/designsystem/compare/stylelint-config-ffe@0.4.0...stylelint-config-ffe@0.4.1) (2018-01-04)

### Bug Fixes

* **stylelint-config-ffe:** Ignore flex-flow shorthand

<a name="0.4.0"></a>

# 0.4.0 (2017-12-22)

### Features

* **stylelint-config-ffe:** Add contribute.md link to readme

## 0.3.0

Upgrade to latest version of `stylelint-config-standard`, which removes some deprecation warnings.

## 0.2.0

Adjusted rules to actual coding style used in FFE.

## 0.1.0

Initial release: slightly modified version of `stylelint-config-standard`.
