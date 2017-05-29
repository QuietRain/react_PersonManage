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
var StaffDetail = (function (_super) {
    __extends(StaffDetail, _super);
    function StaffDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 编辑
     */
    StaffDetail.prototype.handlerEdit = function () {
        var item = {};
        var editTabel = ReactDom.findDOMNode(this.refs["editTabel"]);
        var sex = editTabel.querySelector('#staffEditSex');
        var id = editTabel.querySelector('#staffEditId');
        item.name = editTabel.querySelector('#staffEditName').value.trim();
        item.age = editTabel.querySelector('#staffEditAge').value.trim();
        item.descrip = editTabel.querySelector('#staffEditDescrip').value.trim();
        item.sex = sex.options[sex.selectedIndex].value;
        item.id = id.options[id.selectedIndex].value;
        item.key = this.props.staffDetail.key;
        /*
         *表单验证
         */
        if (item.name == '' || item.age == '' || item.descrip == '') {
            var tips_1 = ReactDom.findDOMNode(this.refs["DtipsUnDone"]);
            tips_1.style.display = 'block';
            setTimeout(function () {
                tips_1.style.display = 'none';
            }, 1000);
            return;
        }
        //非负整数
        var numReg = /^\d+$/;
        if (!numReg.test(item.age) || parseInt(item.age) > 150) {
            var tips_2 = ReactDom.findDOMNode(this.refs["DtipsUnAge"]);
            tips_2.style.display = 'block';
            setTimeout(function () {
                tips_2.style.display = 'none';
            }, 1000);
            return;
        }
        this.props.editDetail(item);
        //此处应在返回修改成功信息后确认
        var tips = ReactDom.findDOMNode(this.refs["Dtips"]);
        tips.style.display = 'block';
        setTimeout(function () {
            tips.style.display = 'none';
        }, 1000);
    };
    /**
     * 关闭
     */
    StaffDetail.prototype.handlerClose = function () {
        this.props.closeDetail();
    };
    StaffDetail.prototype.render = function () {
        var staffDetail = this.props.staffDetail;
        if (!staffDetail)
            return null;
        return (React.createElement("div", null,
            React.createElement("h4", { style: { 'text-align': 'center' } }, "\u70B9\u51FB\"\u5B8C\u6210\"\u4FDD\u5B58\u4FEE\u6539\uFF0C\u70B9\u51FB\"\u5173\u95ED\"\u653E\u5F03\u672A\u4FDD\u5B58\u4FEE\u6539\u5E76\u9000\u51FA."),
            React.createElement("hr", null),
            React.createElement("table", { ref: 'editTabel' },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "\u59D3\u540D"),
                        React.createElement("td", null,
                            React.createElement("input", { id: 'staffEditName', type: 'text', defaultValue: staffDetail.info.name }),
                            " ")),
                    React.createElement("tr", null,
                        React.createElement("th", null, "\u5E74\u9F84"),
                        React.createElement("td", null,
                            React.createElement("input", { id: 'staffEditAge', type: 'text', defaultValue: staffDetail.info.name }),
                            " ")),
                    React.createElement("tr", null,
                        React.createElement("th", null, "\u6027\u522B"),
                        React.createElement("td", null,
                            React.createElement("select", { ref: 'selSex', id: 'staffEditSex' },
                                React.createElement("option", { value: '男' }, "\u7537"),
                                React.createElement("option", { value: '女' }, "\u5973")))),
                    React.createElement("tr", null,
                        React.createElement("th", null, "\u8EAB\u4EFD"),
                        React.createElement("td", null,
                            React.createElement("select", { ref: 'selId', id: 'staffEditId' },
                                React.createElement("option", { value: '主任' }, "\u4E3B\u4EFB"),
                                React.createElement("option", { value: '老师' }, "\u8001\u5E08"),
                                React.createElement("option", { value: '学生' }, "\u5B66\u751F"),
                                React.createElement("option", { value: '实习' }, "\u5B9E\u4E60")))),
                    React.createElement("tr", null,
                        React.createElement("th", null, "\u4E2A\u4EBA\u63CF\u8FF0"),
                        React.createElement("td", null,
                            React.createElement("textarea", { id: 'staffEditDesript', type: 'text', defaultValue: staffDetail.info.desrip }))))),
            React.createElement("p", { ref: 'Dtips', className: 'tips' }, "\u4FEE\u6539\u6210\u529F"),
            React.createElement("p", { ref: 'DtipsUnDone', className: 'tips' }, "\u8BF7\u5F55\u5165\u5B8C\u6574\u7684\u4EBA\u5458\u4FE1\u606F"),
            React.createElement("p", { ref: 'DtipsUnAge', className: 'tips' }, "\u8BF7\u5F55\u5165\u6B63\u786E\u7684\u5E74\u9F84"),
            React.createElement("button", { onClick: this.handlerEdit.bind(this) }, "\u5B8C\u6210"),
            React.createElement("button", { onClick: this.handlerClose.bind(this) }, "\u5173\u95ED")));
    };
    return StaffDetail;
}(React.Component));
exports.StaffDetail = StaffDetail;
