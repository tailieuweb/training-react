import React from 'react';
import TaskItem from './TaskItem'

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //dùng làm chức năng lọc  
      filterName: '',
      filterStatus: -1, // -1 all, 1 active, 0 de_active
      currentPage: 1, // Trang hiện tại
      taskPerPage: 3  // số task được hiển thị
    }
  }

  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus
    )
    this.setState({
      [name]: value
    })
  }
  chosePage = (event) => {
    this.setState({
      //thay đổi trang hiện tại bằng biến target để bắt id được click
      currentPage: Number(event.target.id)
    });
  }
  render() {

    let { tasks } = this.props; // let tasks = this.props.tasks
    // Pagination
    let currentPage = this.state.currentPage; //trang hiện tại
    let taskPerPage = this.state.taskPerPage; //số task được hiển thị
    //vị trí task cuối cùng của trang hiện tại trong mảng dữ liệu
    let indexOfLastTasks = currentPage * taskPerPage;
    //vị trí task đầu tiên của trang hiện tại trong mảng dữ liệu
    let indexOfFirstTasks = indexOfLastTasks - taskPerPage;
    //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang hiện tại
    let task = tasks.slice(indexOfFirstTasks, indexOfLastTasks);

    let { filterName, filterStatus } = this.state
    let elements = task.map((task, index) => {
      return <TaskItem key={task.id}
        index={index  + (currentPage - 1)*taskPerPage}
        task={task}
        onUpdateStatus={this.props.onUpdateStatus}
        onDeleteTask={this.props.onDeleteTask}
        onUpdate={this.props.onUpdate}
      />
    })

    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(tasks.length / taskPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Trạng Thái</th>
              <th className="text-center">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>
                <input
                  type="text"
                  className="form-control"
                  // Phải đặt trùng với state
                  name="filterName"
                  value={filterName}
                  onChange={this.onChange}
                />
              </td>
              <td>
                <select
                  className="form-control"
                  name="filterStatus"
                  value={filterStatus}
                  onChange={this.onChange}
                >
                  <option value={-1}>Tất Cả</option>
                  <option value={0}>Ẩn</option>
                  <option value={1}>Kích Hoạt</option>
                </select>
              </td>
              <td />
            </tr>
            {elements}
          </tbody>
        </table>
        <div className="pagination-custom">
          <ul id="page-numbers">
            {
              //Tác dụng của hàm .map() là dùng để duyệt các phần tử của mảng.
              pageNumbers.map(number => {
                //niếu trang hiện tại bằng với phần tử(number) trong mảng(pageNumbers)
                if (this.state.currentPage === number) {
                  // key xác dinh mục nào đã thay đổi
                  return (
                    <li key={number} id={number} className="active">
                      {number}
                    </li>
                  )
                }
                //Ngược lại là bắt sự kiện khi click vào số trang khác 
                else {
                  return (
                    <li key={number} id={number} onClick={this.chosePage} >
                      {number}
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskList;