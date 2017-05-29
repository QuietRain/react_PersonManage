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
var StaffItem = (function (_super) {
    __extends(StaffItem, _super);
    function StaffItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //查看项目详情
    StaffItem.prototype.handlerShowItem = function (evt) {
        evt.preventDefault();
        console.log("Item查看项目详情");
        this.props.showItemDetails(this.props.item);
    };
    //删除项目
    StaffItem.prototype.handlerDelete = function (evt) {
        evt.preventDefault();
        console.log("Item删除项目");
        this.props.deleteItem(this.props.item);
    };
    StaffItem.prototype.render = function () {
        return (React.createElement("tr", { style: { 'cursor': 'pointer' } },
            React.createElement("td", { className: 'itemTd' }, this.props.item.info.name),
            React.createElement("td", { className: 'itemTd' }, this.props.item.info.age),
            React.createElement("td", { className: 'itemTd' }, this.props.item.info.id),
            React.createElement("td", { className: 'itemTd' }, this.props.item.info.sex),
            React.createElement("td", { className: 'itemTd' },
                React.createElement("a", { className: 'itemBtn', onClick: this.handlerDelete.bind(this) }, "\u5220\u9664"),
                React.createElement("a", { className: 'itemBtn', onClick: this.handlerShowItem.bind(this) }, "\u8BE6\u60C5"))));
    };
    return StaffItem;
}(React.Component));
exports.StaffItem = StaffItem;
