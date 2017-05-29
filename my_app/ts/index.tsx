import * as React from 'react';
import * as ReactDom from 'react-dom'
import { StaffHeader } from './StaffHeader';
import { StaffItemPanel } from './StaffItemPanel';
import { StaffFooter } from './StaffFooter';
import { StaffDetail } from './StaffDetail';

import { STAFF } from './Staff'

class App extends React.Component<any, any>{

  constructor() {
    super();
    this.state = {
      staff: new STAFF(),
      staffDetail: null
    };
  }
  //增
  addStaffItem(item) {
    this.setState({
      staff: this.state.staff.addStaffItem(item)
    });
  }

  //查
  searchStaff(name) {
    this.setState({
      staff: this.state.staff.searchStaff(name)
    })
  }

  //排序
  sortStaff(sortType) {
    this.setState({
      staff: this.state.staff.sortStaff(sortType)
    });
  }

  //筛选
  filtStaff(filtType) {
    this.setState({
      staff: this.state.staff.filtStaff(filtType)
    });
  }

  //删除项目
  deleteItem(item) {
    this.setState({
      staff: this.state.staff.deleteItem(item)
    })
  }

  //查看项目详情
  showItemDetails(currentItem) {
    console.log("查看项目详情")
    console.log("当前item的Key为： " + currentItem.key);
    this.setState({
      staffDetail: this.state.staff.staff.filter(item => {
        return item.key == currentItem.key;
      })[0]
    })

  }


  //关闭Detail
  closeDetail() {
    this.setState({
      staffDetail: null
    });
  }
  //编辑Detail
  editDetail(item) {
    this.setState({
      staff: this.state.staff.editStaffItem(item)
    });
  }

  render() {
    return (
      <div>
        <StaffHeader sortStaff={this.sortStaff.bind(this)} filtStaff={this.filtStaff.bind(this)}
          searchStaff={this.searchStaff.bind(this)} />
        <StaffItemPanel items={this.state.staff.staff} deleteItem={this.deleteItem.bind(this)}
          showItemDetails={this.showItemDetails.bind(this)} />

        <StaffFooter addStaffItem={this.addStaffItem.bind(this)} />
        <StaffDetail staffDetail={this.state.staffDetail} closeDetail={this.closeDetail.bind(this)}
          editDetail={this.editDetail.bind(this)} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));