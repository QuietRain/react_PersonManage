"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DataTime = (function (_super) {
    __extends(DataTime, _super);
    function DataTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataTime.prototype.render = function () {
        return (React.createElement("p", null,
            React.createElement("div", null,
                "Hello ",
                this.props.name,
                React.createElement("br", null),
                React.createElement("br", null),
                "\u73B0\u5728\u7684\u65F6\u95F4\u662F",
                this.props.time.toTimeString()),
            ";"));
    };
    return DataTime;
}(React.Component));
exports.DataTime = DataTime;
