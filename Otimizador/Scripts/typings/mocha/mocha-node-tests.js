/// <reference path="mocha-node.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MochaDef = require('mocha');
var CustomSpecReporter = (function (_super) {
    __extends(CustomSpecReporter, _super);
    function CustomSpecReporter(runner) {
        _super.call(this, runner);
        runner.on('test', function (test) {
            console.log(test.parent.title + '/' + test.title);
        });
    }
    return CustomSpecReporter;
})(MochaDef.reporters.Spec);
var MyReporter = (function (_super) {
    __extends(MyReporter, _super);
    function MyReporter(runner) {
        var _this = this;
        _super.call(this, runner);
        this.passes = 0;
        this.failures = 0;
        runner.on('pass', function (test) {
            _this.passes++;
            console.log('pass: %s', test.fullTitle());
        });
        runner.on('fail', function (test, err) {
            _this.failures++;
            console.log('fail: %s -- error: %s', test.fullTitle(), err.message);
        });
        runner.on('end', function () {
            console.log('end: %d/%d', _this.passes, _this.passes + _this.failures);
            process.exit(_this.failures);
        });
    }
    return MyReporter;
})(MochaDef.reporters.Base);
//# sourceMappingURL=mocha-node-tests.js.map