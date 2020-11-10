import React from 'react';

class TaskForm extends React.Component {
  render() { 
    return (  
        <div className="card">
            <h4 className="card-header">
                Thêm công việc
                <span className="fa fa-times-circle pl-84 "aria-hidden="true"></span>
            </h4>
            <div className="card-body">
              <form>
                <div className="form-group">
                <label>Tên :</label>
                <input type="text" 
                       className="form-control"
                       name = "name"/>  
                </div>
                <label>Trạng Thái :</label>
                <select className="form-control" 
                        required="required"
                        name="status">
                    <option>Kích Hoạt</option>
                    <option>Ẩn</option>
                </select>
                <br />
                <div className="text-center">
                    <button type="submit" className="btn btn-warning text-white">
                    <span className="fa fa-plus mr-2 "></span>Lưu lại</button>&nbsp;
                    <button type="submit" 
                            className="btn btn-danger">
                    <span className="fa fa-times mr-2"></span>Hủy Bỏ</button>
                </div>
              </form>
            </div>
        </div>
    );
  }
}
 
export default TaskForm;