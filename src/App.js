import React from "react";
import "./App.scss";
import { v4 as uuidv4 } from "uuid";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";
import {Switch, Route } from 'react-router-dom';
import TaskDetail from './components/TaskDetail';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //id : unique, name, status
      tasks: [],
      //mặc định ẩn đi
      isDisplayForm: true,
      //dùng cho việc sửa
      taskEditing: null,
      //lọc
      filters: {
        name: "",
        status: -1,
      },
      keyWord: "",
      sort: {
        //cho mặc định sắp xếp theo tên và tăng dần
        sortBy: 'name',
        sortValue: 1
      },
      currentTask: null
    };
  }
  //được gọi khi component được gọi khi refesh lại
  //nằm trong lifecycle
  componentDidMount() {
    //nếu tồn tại và lấy được item task
    if (localStorage && localStorage.getItem("tasks")) {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }

  onToggleForm = () => {
    // thêm  task
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        //lấy ngược lại của thằng kia, nếu nó true thì lấy false
        isDisplayForm: true,
        //vì khi bấm vào sửa mà bấm lại vào thêm nó không đổi thành thêm mới
        taskEditing: null,
      });
    } else {
      this.setState({
        //lấy ngược lại của thằng kia, nếu nó true thì lấy false
        isDisplayForm: !this.state.isDisplayForm,
        //vì khi bấm vào sửa mà bấm lại vào thêm nó không đổi thành thêm mới
        taskEditing: null,
      });
    }
  };

  onCloseForm = () => {
    this.setState({
      //lấy ngược lại của thằng kia, nếu nó true thì lấy false
      isDisplayForm: false,
    });
  };

  onShowForm = () => {
    this.setState({
      //lấy ngược lại của thằng kia, nếu nó true thì lấy false
      isDisplayForm: true,
    });
  };
  //nhận từ thằng con trả ra
  onSubmit = (value) => {
    let { tasks } = this.state;
    //nếu chưa có id thì thêm mới
    if (value.id === "") {
      value.id = uuidv4();
      tasks.push(value);
      //nếu có rồi thì cập nhật
    } else {
      let index = this.findIndex(value.id);
      tasks[index] = value;
    }

    this.setState({
      tasks: tasks,
      taskEditing: null,
    });
    //lưu vào localStorage
    //nên chuyển thành String hay vì lưu Object
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // this.onCloseForm()
  };
  getItem = (id) => {
    const task = this.state.tasks.find(item => item.id === id);
    this.setState({
      currentTask: task
    })
  }
  //thằng con trả về dữ liệu thì thằng cha nhận nó sẽ nhận bằng function
  onUpdateStatus = (id) => {
    let { tasks } = this.state;
    //duyệt qua từng thằng tasks
    let newTask = tasks.map((task) => {
      //nếu id của task = id của nút mình bấm thì trả ra thằng task đó
      if (task.id === id) {
        task.status = !task.status;
      }
      return task;
    });
    this.setState({
      tasks: newTask,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  onDeleteTask = (id) => {
    let { tasks } = this.state;
    let result = tasks.filter((task) => {
      return task.id !== id;
    });
    this.setState({
      tasks: result,
    });
    localStorage.setItem("tasks", JSON.stringify(result));
  };

  onUpdate = id => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    let taskEditing = tasks[index];
    // let taskEditing = tasks.map(task => {
    //   return task.id === id
    // })
    this.setState({
      taskEditing: taskEditing,
    });
    this.onShowForm();
  };

  findIndex = (id) => {
    let { tasks } = this.state;
    let result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };
  //nhận từ thằng con lên
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus);
    this.setState({
      filters: {
        //chuyển về viết thường để tìm
        name: filterName.toLowerCase(),
        status: filterStatus,
      },
    });
  };

  onSearch = (keyWord) => {
    this.setState({
      keyWord: keyWord.toLowerCase(),
    });
  };

  onSort = (sort) => {
    this.setState({
      sort: {
        sortBy: sort.sortBy,
        sortValue: sort.sortValue
      }
    })
    console.log(this.state.sort)
  }

  render() {
    let { tasks, isDisplayForm, taskEditing, filters, keyWord, sort} = this.state; // same same let task =  this.state.task
    //nếu isDisplayForm === true thì hiện form, không thì k hiện gì hết
    if (filters) {
      if (filters.name) {
        tasks = tasks.filter((task) => {
          //nếu bằng -1 thì không tim thấy
          //chuyển về viết thường và tìm có tồn tại không
          return task.name.toLowerCase().indexOf(filters.name) !== -1;
        });
      }
      //lọc theo trạng thái
      tasks = tasks.filter((task) => {
        //-1 là lấy tất cả nên return về all task
        if (filters.status === -1) return task;
        //chuyển thành true false
        else return task.status === (filters.status === 1 ? true : false);
      });
    }

    if (keyWord) {
      tasks = tasks.filter((task) => {
        //nếu bằng -1 thì không tim thấy
        //chuyển về viết thường và kiểm tra có chưa keyword đó k
        return task.name.toLowerCase().indexOf(keyWord) !== -1;
      });
    }
    if(sort.sortBy === 'name') {
      tasks.sort((a, b) => {
        if(a.name > b.name) return sort.sortValue;
        else if(a.name < b.name) return -sort.sortValue;
        else return 0
      })
    } else {
      tasks.sort((a, b) => {
        if(a.status > b.status) return -sort.sortValue;
        else if(a.status < b.status) return sort.sortValue;
        else return 0
      })
    }
    let elementTaskForm = isDisplayForm ? (
      <TaskForm
        onCloseForm={this.onCloseForm}
        onSubmit={this.onSubmit}
        task={taskEditing}
      />
    ) : (
      ""
    );
    return (
        <div>
          <Header/>
      <div className="container">
        <div className="text-center mt-4">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          {/* Trái */}
          <div className={isDisplayForm ? "col-md-4" : ""}>
            {elementTaskForm}
          </div>
          {/* end trái */}

          {/* phải */}
          <div className={isDisplayForm ? "col-md-8" : "col-md-12"}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-2"></span>Thêm Công Việc
            </button>
            {/* Search - Sort*/}
            <Control 
                  onSearch={this.onSearch} 
                  onSort = { this.onSort }
                  />
            {/* ENd */}
            <div className="row mt-15">
              <div className="col-md-12">
                <Switch>
                  <Route path="/" exact render={(props) => {
                    return <TaskList
                            {...props}
                            tasks={tasks}
                            onUpdateStatus={this.onUpdateStatus}
                            onDeleteTask={this.onDeleteTask}
                            onUpdate={this.onUpdate}
                            onFilter={this.onFilter}
                      />
                    }} />
                  <Route path="/:id" render={(props) => {
                    return <TaskDetail {...props} getItem={this.getItem} task={this.state.currentTask} />
                  }} />
                </Switch>
              </div>
            </div>
            {/* end phải */}
          </div>
        </div>
      </div>
          <Footer/>
        </div>
    );
  }
}

export default App;
