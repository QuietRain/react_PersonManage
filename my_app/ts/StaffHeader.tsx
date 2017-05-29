import * as React from 'react'
import * as ReactDom from 'react-dom'
export class StaffHeader extends React.Component<any, any>{
    //Search
    handlerSearch() {
        let bar: any = ReactDom.findDOMNode(this.refs["searchBar"]);
        let value = bar.value;
        this.props.searchStaff(value);
    }

    handlerIdChange() {
        let Id: any = ReactDom.findDOMNode(this.refs['selId']);
        let IdValue = Id.options[Id.selectedIndex].value;
        this.props.filtStaff(IdValue);
    }


    handlerOrderChange() {
        let sel: any = ReactDom.findDOMNode(this.refs['selOrder']);
        let selValue = sel.options[sel.selectedIndex].value;
        this.props.sortStaff(selValue);

    }
    render() {
        return (
            <div>
                <h3 style={{ 'text-align': 'center' }}>人员管理系统</h3>
                <table className='optHeader'>
                    <tbody>
                        <tr>
                            <td className='headerTd'><input ref='searchBar' type='text' onChange={this.handlerSearch.bind(this)} placeholder='Search...' /></td>
                            <td className='headerTd'>
                                <label htmlFor='idSelect'>人员筛选</label>
                                <select id='idSelect' ref='selId' onChange={this.handlerIdChange.bind(this)}>
                                    <option value='0'>全部</option>
                                    <option value='1'>主任</option>
                                    <option value='2'>老师</option>
                                    <option value='3'>学生</option>
                                    <option value='4'>实习</option>
                                </select>
                            </td>
                            <td>
                                <label htmlFor='orderSelect'>排列方式</label>
                                <select id='orderSelect' ref='selOrder' onChange={this.handlerOrderChange.bind(this)}>
                                    <option value='0'>身份</option>
                                    <option value='1'>年龄升</option>
                                    <option value='2'>年龄降</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }
}