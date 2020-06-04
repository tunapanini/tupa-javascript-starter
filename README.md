# tupa-javascript-starter
 A javascript starter with eslint, prettier, jest and vscode launch settings.

## Lint

```
yarn lint
```

## Test  

Run test with:

```
yarn test
```

## Git hooks

This project is using git hooks with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).

If hooks aren't running:
- First verify that husky git hooks were installed. See `Hooks aren't running` below quoted from Uusky README.
- Check out more on [Husky](https://github.com/typicode/husky) for help.

> Hooks aren't running
> Check if hooks were installed. Verify that .git/hooks/pre-commit exists and have husky code. It should start with:
> ```
> #!/bin/sh
> # husky...
> ```

Just remove `node_modules` and reinstall dependencies to reinstall git hooks.

## Writing tests

This project is using [Jest](https://jestjs.io/) fot testing.

Your test file should be in the following formats:
    - `*.spec.js`
    - `*.test.js`

> Specify your own formats in `jest.config.js` with `testMatch` option.
> and don't forget to change husky git hooks config in `package.json` with `lint-staged` option.