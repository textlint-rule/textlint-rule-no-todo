const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
import rule from "../src/no-todo";
// ruleName, rule, { valid, invalid }
tester.run("no-todo", rule, {
    valid: [
        // no match
        "text",
        // partial match
        "TODOS:",
        // ignore node's type
        "[TODO: this is todo](http://example.com)",
        "![TODO: this is todo](http://example.com/img)",
        "> TODO: this is todo"
    ],
    invalid: [
        // single match
        {
            text: "TODO: this is TODO",
            errors: [
                {
                    message: "Found TODO: 'TODO: this is TODO'",
                    line: 1,
                    column: 1
                }
            ]
        },
        // multiple match in multiple lines
        {
            text: `TODO: this is TODO
            
- [ ] TODO`,
            errors: [
                {
                    message: "Found TODO: 'TODO: this is TODO'",
                    line: 1,
                    column: 1
                },
                {
                    message: "Found TODO: '- [ ] TODO'",
                    line: 3,
                    column: 3
                }
            ]
        },
        // multiple hit items in a line
        {
            text: "TODO: A TODO: B",
            errors: [
                {
                    message: "Found TODO: 'TODO: A TODO: B'",
                    line: 1,
                    column: 1
                }
            ]
        },
        // exact match or empty
        {
            text: "THIS IS TODO:",
            errors: [
                {
                    message: "Found TODO: 'TODO:'",
                    line: 1,
                    column: 9
                }
            ]
        }
    ]
});