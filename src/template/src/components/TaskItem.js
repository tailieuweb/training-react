import React from 'react';

class TaskItem extends React.Component {

    render() { 
        return (  
            <tr>
                <td>1</td>
                <td>Học lập trình</td>
                <td className="text-center">
                <span className="badge badge-success">
                    Kích hoạt
                </span>
                </td>
                <td className="text-center">
                <button type="button" 
                    className="btn btn-warning text-white">
                    <i className="fa fa-edit mr-2"></i>Sửa
                </button>&nbsp;
                <button type="button" className="btn btn-danger">
                    <i className="fa fa-trash mr-2"></i>Xóa
                </button>
                </td>
            </tr>
        );
    }
}
 
export default TaskItem;