import * as React from 'react';
import { StaffItem } from './StaffItem'
export class StaffItemPanel extends React.Component<any, any>{


    //查看项目详情
    showItemDetails(item) {
        console.log("Panel查看项目详情")
        this.props.showItemDetails(item);

    }

    //删除项目
    deleteItem(item) {
        console.log("Panel删除项目")
        this.props.deleteItem(item);
    }

    render() {
        let items = [];
        if (this.props.items.length == 0) {
            items.push(<tr><th colSpan={5} className='tempEmpty'>暂无用户</th></tr>);
        } else {
            this.props.items.forEach(item => {
                items.push(<StaffItem key={item.key} item={item} deleteItem={this.deleteItem.bind(this)}
                    showItemDetails={this.showItemDetails.bind(this)} />)
            });
        }
        return (
            <table className='itemPanel'>
                <thead>
                    <th className='itemTd'>姓名</th>
                    <th className='itemTd'>年龄</th>
                    <th className='itemTd'>身份</th>
                    <th className='itemTd'>性别</th>
                    <th className='itemTd'>操作</th>
                </thead>
                <tbody> {items}</tbody>
            </table>
        );
    }
}