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
var ReactDom = require("react-dom");
var StaffHeader = (function (_super) {
    __extends(StaffHeader, _super);
    function StaffHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Search
    StaffHeader.prototype.handlerSearch = function () {
        var bar = ReactDom.findDOMNode(this.refs["searchBar"]);
        var value = bar.value;
        this.props.searchStaff(value);
    };
    StaffHeader.prototype.handlerIdChange = function () {
        var Id = ReactDom.findDOMNode(this.refs['selId']);
        var IdValue = Id.options[Id.selectedIndex].value;
        this.props.filtStaff(IdValue);
    };
    StaffHeader.prototype.handlerOrderChange = function () {
        var sel = ReactDom.findDOMNode(this.refs['selOrder']);
        var selValue = sel.options[sel.selectedIndex].value;
        this.props.sortStaff(selValue);
    };
    StaffHeader.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h3", { style: { 'text-align': 'center' } }, "\u4EBA\u5458\u7BA1\u7406\u7CFB\u7EDF"),
            React.createElement("table", { className: 'optHeader' },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", { className: 'headerTd' },
                            React.createElement("input", { ref: 'searchBar', type: 'text', onChange: this.handlerSearch.bind(this), placeholder: 'Search...' })),
                        React.createElement("td", { className: 'headerTd' },
                            React.createElement("label", { htmlFor: 'idSelect' }, "\u4EBA\u5458\u7B5B\u9009"),
                            React.createElement("select", { id: 'idSelect', ref: 'selId', onChange: this.handlerIdChange.bind(this) },
                                React.createElement("option", { value: '0' }, "\u5168\u90E8"),
                                React.createElement("option", { value: '1' }, "\u4E3B\u4EFB"),
                                React.createElement("option", { value: '2' }, "\u8001\u5E08"),
                                React.createElement("option", { value: '3' }, "\u5B66\u751F"),
                                React.createElement("option", { value: '4' }, "\u5B9E\u4E60"))),
                        React.createElement("td", null,
                            React.createElement("label", { htmlFor: 'orderSelect' }, "\u6392\u5217\u65B9\u5F0F"),
                            React.createElement("select", { id: 'orderSelect', ref: 'selOrder', onChange: this.handlerOrderChange.bind(this) },
                                React.createElement("option", { value: '0' }, "\u8EAB\u4EFD"),
                                React.createElement("option", { value: '1' }, "\u5E74\u9F84\u5347"),
                                React.createElement("option", { value: '2' }, "\u5E74\u9F84\u964D"))))))));
    };
    return StaffHeader;
}(React.Component));
exports.StaffHeader = StaffHeader;
