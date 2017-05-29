import * as React from 'react'
import * as ReactDom from 'react-dom'
export class StaffFooter extends React.Component<any, any>{

    handlerAddClick(evt) { //点击提交后触发
        evt.preventDefault();
        let item: any = {};
        let addForm = ReactDom.findDOMNode(this.refs["addForm"]) as any;  //获取添加的信息表格（findDOMNode为获取组件对应的DOM元素）
        let sex = addForm.querySelector('#staffAddSex');//找到对应信息
        let id = addForm.querySelector('#staffAddId');


        item.name = addForm.querySelector('#staffAddName').value.trim();//(trim为去掉字符序列左边和右边的空格)
        item.age = addForm.querySelector('#staffAddAge').value.trim();
        item.descrip = addForm.querySelector('#staffAddDescrip').value.trim();
        item.sex = sex.options[sex.selectedIndex].value;
        item.id = id.options[id.selectedIndex].value;

        /*
         *表单验证
         */
        if (item.name == '' || item.age == '' || item.descrip == '') {
            let tips: any = ReactDom.findDOMNode(this.refs["tipsUnDone"]);
            tips.style.display = 'block';
            setTimeout(function () {
                tips.style.display = 'none';
            }, 1000);
            return;
        }
        //非负整数
        let numReg = /^\d+$/;
        if (!numReg.test(item.age) || parseInt(item.age) > 150) {
            let tips: any = ReactDom.findDOMNode(this.refs["tipsUnAge"]);
            tips.style.display = 'block';
            setTimeout(function () {
                tips.style.display = 'none';
            }, 1000);
            return;
        }

        this.props.addStaffItem(item);
        addForm.reset();

        //此处应在返回添加成功信息后确认
        let tips: any = ReactDom.findDOMNode(this.refs["tips"]);
        tips.style.display = 'block';
        setTimeout(function () {
            tips.style.display = 'none';
        }, 1000);
        return;
    }


    render() {
        return (
            <div>
                <h4 style={{ 'text-align': 'center' }}>人员新增</h4>
                <hr />
                <form ref='addForm' className='addForm'>
                    <div>
                        <label htmlFor='staffAddName' style={{ 'display': 'block' }}>姓名</label>
                        <input ref='addName' id='staffAddName' type='text' placeholder='Your Name' />
                    </div>
                    <div>
                        <label htmlFor='staffAddAge' style={{ 'display': 'block' }}>年龄</label>
                        <input ref='addAge' id='staffAddAge' type='text' placeholder='Your Age(0-150)' />
                    </div>
                    <div>
                        <label htmlFor='staffAddSex' style={{ 'display': 'blcok' }}>性别</label>
                        <select ref='addSex' id='staffAddSex'>
                            <option value='男'>男</option>
                            <option value='女'>女</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='staffAddId' style={{ 'display': 'block' }}>身份</label>
                        <select ref='addId' id='staffAddId'>
                            <option value='主任'>主任</option>
                            <option value='老师'>老师</option>
                            <option value='学生'>学生</option>
                            <option value='实习'>实习</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='staffAddDescrip' style={{ 'display': 'block' }}>个人描述</label>
                        <textarea ref='addDescrip' id='staffAddDescrip' type='text'></textarea>
                    </div>

                    <p ref='tips' className='tips'> 提交成功</p>
                    <p ref='tipsUnDone' className='tips'> 请录入完整的人员信息</p>
                    <p ref='tipsUnAge' className='tips'> 请输入正确的年龄信息</p>

                    <div>
                        <button onClick={this.handlerAddClick.bind(this)}>提交</button>
                    </div>
                </form>
            </div>
        );
    }
}