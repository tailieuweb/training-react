import React from 'react';
import TaskItem from './TaskItem'

class TaskList extends React.Component {
    render() { 
        return (  
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
                              name="filterName"/>
                      </td>
                      <td>
                        <select 
                              className="form-control"
                              name="filterStatus">
                          <option>Tất Cả</option>
                          <option>Ẩn</option>
                          <option>Kích Hoạt</option>
                        </select>
                      </td>
                      <td />
                    </tr>
                    <TaskItem/>
                </tbody>
            </table>
        );
    }
}
 
export default TaskList;