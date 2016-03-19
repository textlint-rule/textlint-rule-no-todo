// LICENSE : MIT
"use strict";
import {RuleHelper} from "textlint-rule-helper";
/**
 * @param {RuleContext} context
 */
export default function (context) {
    const helper = new RuleHelper(context);
    const {Syntax, getSource, RuleError, report} = context;
    return {
        /*
        Match pattern

            # Header
            TODO: quick fix this.
            ^^^^^
            Hit!
        */
        [Syntax.Str](node) {
            if (helper.isChildNode(node, [Syntax.Link, Syntax.Image, Syntax.BlockQuote])) {
                return;
            }
            // get text from node
            const text = getSource(node);
            // does text contain "todo:"?
            const match = text.match(/todo:/i);
            if (match) {
                const todoText = text.substring(match.index);
                report(node, new RuleError(`Found TODO: '${todoText}'`, {
                    index: match.index
                }));
            }
        },
        /*
        Match Pattern

            # Header
            - [ ] Todo
              ^^^
              Hit!
        */
        [Syntax.ListItem](node) {
            const text = context.getSource(node);
            const match = text.match(/\[\s+\]\s/i);
            if (match) {
                report(node, new context.RuleError(`Found TODO: '${text}'`, {
                    index: match.index
                }));
            }
        }
    };
}
