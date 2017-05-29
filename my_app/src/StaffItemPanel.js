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
var StaffItem_1 = require("./StaffItem");
var StaffItemPanel = (function (_super) {
    __extends(StaffItemPanel, _super);
    function StaffItemPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //查看项目详情
    StaffItemPanel.prototype.showItemDetails = function (item) {
        console.log("Panel查看项目详情");
        this.props.showItemDetails(item);
    };
    //删除项目
    StaffItemPanel.prototype.deleteItem = function (item) {
        console.log("Panel删除项目");
        this.props.deleteItem(item);
    };
    StaffItemPanel.prototype.render = function () {
        var _this = this;
        var items = [];
        if (this.props.items.length == 0) {
            items.push(React.createElement("tr", null,
                React.createElement("th", { colSpan: 5, className: 'tempEmpty' }, "\u6682\u65E0\u7528\u6237")));
        }
        else {
            this.props.items.forEach(function (item) {
                items.push(React.createElement(StaffItem_1.StaffItem, { key: item.key, item: item, deleteItem: _this.deleteItem.bind(_this), showItemDetails: _this.showItemDetails.bind(_this) }));
            });
        }
        return (React.createElement("table", { className: 'itemPanel' },
            React.createElement("thead", null,
                React.createElement("th", { className: 'itemTd' }, "\u59D3\u540D"),
                React.createElement("th", { className: 'itemTd' }, "\u5E74\u9F84"),
                React.createElement("th", { className: 'itemTd' }, "\u8EAB\u4EFD"),
                React.createElement("th", { className: 'itemTd' }, "\u6027\u522B"),
                React.createElement("th", { className: 'itemTd' }, "\u64CD\u4F5C")),
            React.createElement("tbody", null,
                " ",
                items)));
    };
    return StaffItemPanel;
}(React.Component));
exports.StaffItemPanel = StaffItemPanel;
