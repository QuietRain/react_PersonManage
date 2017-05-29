import * as React from 'react'
export class StaffItem extends React.Component<any, any>{
    //查看项目详情
    handlerShowItem(evt) {
        evt.preventDefault();
        console.log("Item查看项目详情")
        this.props.showItemDetails(this.props.item);
    }

    //删除项目
    handlerDelete(evt) {
        evt.preventDefault();
        console.log("Item删除项目")
        this.props.deleteItem(this.props.item);
    }

    render() {
        return (
            <tr
                style={{ 'cursor': 'pointer' }}//鼠标放在这个表格属性上会变成点击状态（小手）
                >
                <td className='itemTd'>{this.props.item.info.name}</td>
                <td className='itemTd'>{this.props.item.info.age}</td>
                <td className='itemTd'>{this.props.item.info.id}</td>
                <td className='itemTd'>{this.props.item.info.sex}</td>
                <td className='itemTd'>
                    <a className='itemBtn' onClick={this.handlerDelete.bind(this)}>删除</a>
                    <a className='itemBtn' onClick={this.handlerShowItem.bind(this)}>详情</a>
                </td>
            </tr>
        );
    }
}