import React from 'react';
import {
    Link
} from "react-router-dom";


class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDeleteTask = () => {
        this.props.onDeleteTask(this.props.task.id);

    }
    //cập nhật dựa vào id nên truyền id vào
    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
    }
    Home() {
        return (
            <div>
                <h2>Chi tiet home</h2>
            </div>
        );
    }
    
    render() {
        let { task, index } = this.props;

        return (
                <tr>
                    <td>{index + 1}</td>
                    <td>
                        <Link to={`/${task.id}`}>{task.name}</Link>
                    </td>
                    <td className="text-center">
                        <span className={task.status === true ? "badge badge-success" : "badge badge-danger"}
                            onClick={this.onUpdateStatus}>
                            {task.status === true ? 'Kích hoạt' : 'Ẩn'}
                        </span>
                    </td>
                    <td className="text-center">
                        <button type="button"
                            className="btn btn-warning text-white"
                            onClick={this.onUpdate}>
                            <i className="fa fa-edit mr-2"></i>Sửa
                </button>&nbsp;
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modalConfirmDelete" >
                            <i className="fa fa-trash mr-2"></i>Xóa
                </button>
                <div className="modal fade" id="modalConfirmDelete" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm modal-notify modal-danger" role="document">
                        <div className="modal-content text-center">
                            <div className="modal-header d-flex justify-content-center">
                                <p className="heading">Bạn có chắc chắn muốn xoá không?</p>
                            </div>
                            <div className="modal-footer flex-center">
                                <a className="btn btn-outline-primary " data-dismiss="modal" onClick={this.onDeleteTask}>Có</a>
                                <a type="button" className="btn btn-danger waves-effect" data-dismiss="modal">Không</a>
                            </div>
                        </div>
                    </div>
                </div>
                    </td>
                </tr>
        );
    }
}

export default TaskItem;