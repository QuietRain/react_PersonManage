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
var StaffFooter = (function (_super) {
    __extends(StaffFooter, _super);
    function StaffFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StaffFooter.prototype.handlerAddClick = function (evt) {
        evt.preventDefault();
        var item = {};
        var addForm = ReactDom.findDOMNode(this.refs["addForm"]); //获取添加的信息表格（findDOMNode为获取组件对应的DOM元素）
        var sex = addForm.querySelector('#staffAddSex'); //找到对应信息
        var id = addForm.querySelector('#staffAddId');
        item.name = addForm.querySelector('#staffAddName').value.trim(); //(trim为去掉字符序列左边和右边的空格)
        item.age = addForm.querySelector('#staffAddAge').value.trim();
        item.descrip = addForm.querySelector('#staffAddDescrip').value.trim();
        item.sex = sex.options[sex.selectedIndex].value;
        item.id = id.options[id.selectedIndex].value;
        /*
         *表单验证
         */
        if (item.name == '' || item.age == '' || item.descrip == '') {
            var tips_1 = ReactDom.findDOMNode(this.refs["tipsUnDone"]);
            tips_1.style.display = 'block';
            setTimeout(function () {
                tips_1.style.display = 'none';
            }, 1000);
            return;
        }
        //非负整数
        var numReg = /^\d+$/;
        if (!numReg.test(item.age) || parseInt(item.age) > 150) {
            var tips_2 = ReactDom.findDOMNode(this.refs["tipsUnAge"]);
            tips_2.style.display = 'block';
            setTimeout(function () {
                tips_2.style.display = 'none';
            }, 1000);
            return;
        }
        this.props.addStaffItem(item);
        addForm.reset();
        //此处应在返回添加成功信息后确认
        var tips = ReactDom.findDOMNode(this.refs["tips"]);
        tips.style.display = 'block';
        setTimeout(function () {
            tips.style.display = 'none';
        }, 1000);
        return;
    };
    StaffFooter.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h4", { style: { 'text-align': 'center' } }, "\u4EBA\u5458\u65B0\u589E"),
            React.createElement("hr", null),
            React.createElement("form", { ref: 'addForm', className: 'addForm' },
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: 'staffAddName', style: { 'display': 'block' } }, "\u59D3\u540D"),
                    React.createElement("input", { ref: 'addName', id: 'staffAddName', type: 'text', placeholder: 'Your Name' })),
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: 'staffAddAge', style: { 'display': 'block' } }, "\u5E74\u9F84"),
                    React.createElement("input", { ref: 'addAge', id: 'staffAddAge', type: 'text', placeholder: 'Your Age(0-150)' })),
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: 'staffAddSex', style: { 'display': 'blcok' } }, "\u6027\u522B"),
                    React.createElement("select", { ref: 'addSex', id: 'staffAddSex' },
                        React.createElement("option", { value: '男' }, "\u7537"),
                        React.createElement("option", { value: '女' }, "\u5973"))),
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: 'staffAddId', style: { 'display': 'block' } }, "\u8EAB\u4EFD"),
                    React.createElement("select", { ref: 'addId', id: 'staffAddId' },
                        React.createElement("option", { value: '主任' }, "\u4E3B\u4EFB"),
                        React.createElement("option", { value: '老师' }, "\u8001\u5E08"),
                        React.createElement("option", { value: '学生' }, "\u5B66\u751F"),
                        React.createElement("option", { value: '实习' }, "\u5B9E\u4E60"))),
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: 'staffAddDescrip', style: { 'display': 'block' } }, "\u4E2A\u4EBA\u63CF\u8FF0"),
                    React.createElement("textarea", { ref: 'addDescrip', id: 'staffAddDescrip', type: 'text' })),
                React.createElement("p", { ref: 'tips', className: 'tips' }, " \u63D0\u4EA4\u6210\u529F"),
                React.createElement("p", { ref: 'tipsUnDone', className: 'tips' }, " \u8BF7\u5F55\u5165\u5B8C\u6574\u7684\u4EBA\u5458\u4FE1\u606F"),
                React.createElement("p", { ref: 'tipsUnAge', className: 'tips' }, " \u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5E74\u9F84\u4FE1\u606F"),
                React.createElement("div", null,
                    React.createElement("button", { onClick: this.handlerAddClick.bind(this) }, "\u63D0\u4EA4")))));
    };
    return StaffFooter;
}(React.Component));
exports.StaffFooter = StaffFooter;
