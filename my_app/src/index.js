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
var StaffHeader_1 = require("./StaffHeader");
var StaffItemPanel_1 = require("./StaffItemPanel");
var StaffFooter_1 = require("./StaffFooter");
var StaffDetail_1 = require("./StaffDetail");
var Staff_1 = require("./Staff");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this) || this;
        _this.state = {
            staff: new Staff_1.STAFF(),
            staffDetail: null
        };
        return _this;
    }
    //增
    App.prototype.addStaffItem = function (item) {
        this.setState({
            staff: this.state.staff.addStaffItem(item)
        });
    };
    //查
    App.prototype.searchStaff = function (name) {
        this.setState({
            staff: this.state.staff.searchStaff(name)
        });
    };
    //排序
    App.prototype.sortStaff = function (sortType) {
        this.setState({
            staff: this.state.staff.sortStaff(sortType)
        });
    };
    //筛选
    App.prototype.filtStaff = function (filtType) {
        this.setState({
            staff: this.state.staff.filtStaff(filtType)
        });
    };
    //删除项目
    App.prototype.deleteItem = function (item) {
        this.setState({
            staff: this.state.staff.deleteItem(item)
        });
    };
    //查看项目详情
    App.prototype.showItemDetails = function (currentItem) {
        console.log("查看项目详情");
        console.log("当前item的Key为： " + currentItem.key);
        this.setState({
            staffDetail: this.state.staff.staff.filter(function (item) {
                return item.key == currentItem.key;
            })[0]
        });
    };
    //关闭Detail
    App.prototype.closeDetail = function () {
        this.setState({
            staffDetail: null
        });
    };
    //编辑Detail
    App.prototype.editDetail = function (item) {
        this.setState({
            staff: this.state.staff.editStaffItem(item)
        });
    };
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(StaffHeader_1.StaffHeader, { sortStaff: this.sortStaff.bind(this), filtStaff: this.filtStaff.bind(this), searchStaff: this.searchStaff.bind(this) }),
            React.createElement(StaffItemPanel_1.StaffItemPanel, { items: this.state.staff.staff, deleteItem: this.deleteItem.bind(this), showItemDetails: this.showItemDetails.bind(this) }),
            React.createElement(StaffFooter_1.StaffFooter, { addStaffItem: this.addStaffItem.bind(this) }),
            React.createElement(StaffDetail_1.StaffDetail, { staffDetail: this.state.staffDetail, closeDetail: this.closeDetail.bind(this), editDetail: this.editDetail.bind(this) })));
    };
    return App;
}(React.Component));
ReactDom.render(React.createElement(App, null), document.getElementById('app'));
