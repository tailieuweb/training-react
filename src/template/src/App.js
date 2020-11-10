import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="text-center mt-4">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-4">
            <TaskForm/>
          </div>
          <div className="col-md-8">
            <button
              type="button"
              className="btn btn-primary"
            >
              <span className="fa fa-plus mr-2"></span>Thêm Công Việc
            </button>
            <Control/>
            <div className="row mt-15">
              <div className="col-md-12">
                <TaskList/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
