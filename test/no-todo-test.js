// LICENSE : MIT
"use strict";
import assert from "power-assert";
import fs from "fs";
import path from "path";
import {textlint} from "textlint";
import noTodoRule from "../src/no-todo"
// ✘ HTML Import
// ✔ HTML Imports
describe("spellcheck-tech-word.js", function () {
    beforeEach(function () {
        textlint.setupRules({
            // rule-key : rule
            "no-todo": noTodoRule
        });
    });
    afterEach(function () {
        textlint.resetRules();
    });
    context("when found TODO", function () {
        it("should have error messages", function () {
            var filePath = path.join(__dirname, "/fixtures/fail.md");
            var result = textlint.lintFile(filePath);
            assert(result.filePath === filePath);
            assert(result.messages.length > 0);
            var message = result.messages[0].message;
            assert(message.indexOf("found TODO:") !== -1);
        });
    });
    context("when not found TODO", function () {
        it("should have not error messages", function () {
            var filePath = path.join(__dirname, "/fixtures/pass.md");
            var result = textlint.lintFile(filePath);
            assert(result.filePath === filePath);
            assert(result.messages.length == 0);
        });
    });
});