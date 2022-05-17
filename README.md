# textlint-rule-no-todo [![Actions Status: test](https://github.com/textlint-rule/textlint-rule-no-todo/workflows/test/badge.svg)](https://github.com/textlint-rule/textlint-rule-no-todo/actions?query=workflow%3A"test")

This [textlint](https://github.com/textlint-rule/textlint "textlint") rule check `todo` mark.

**OK**:

```
This is text.
```

**NG**:

```
TODO: this is TODO

- [ ] TODO
```


## Installation

    npm install textlint-rule-no-todo

## Usage

    $ npm install textlint-rule-no-todo
    $ textlint --rule no-todo README.md

## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
