import React, { useEffect, useState } from 'react'
import './TaskDetail.scss'
import TaskDetailItem from './TaskDetailItem'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Axios from 'axios';
export default function TaskDetail() {
    let { id } = useParams();
    const base_url = "http://localhost/todolistfinal/API/post/";
    const [listItem, setListItem] = useState([]);
    useEffect(() => {
        Axios.post(`${base_url}getTaskListById.php`, { idTask: id })
            .then(res => {
                setListItem(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, [])
    const handleAddItem = (e) => {
        if (e.keyCode === 13) {
            let value = e.target.value;
            Axios.post(`${base_url}addTaskItem.php`, {
                isTask: id,
                valueItem: value,
            })
                .then(res => {
                    setListItem(res.data);
                }).catch(err => {
                    console.log(err);
                })
        }
    }
    const deleteItem = (idItem) => {
        Axios.post(`http://localhost/todolistfinal/API/delete/deleteTaskItem.php`, {
            isTaskItem: idItem,
            idTask: id
        }).then(res => {
            setListItem(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="taskdetail">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">
                            <h3>CHI TIẾT CÔNG VIỆC</h3>
                        </div>
                    </div>
                    <div className="card-body card-bodyDetail">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="detailNameTask">
                                    <h4>Làm giao diện todoList</h4>
                                    <Link to="/">
                                        <button className="btn btn-success btnback"> Quay lại </button>
                                    </Link>
                                    <input type="text" className="form-control Adddetailinput" placeholder="Thêm các bước thực hiện" onKeyDown={handleAddItem} />
                                </div>
                            </div>
                            <div className="col-md-8 detailStep">
                                <h4>Các bước thực hiện</h4>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Nội dung</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            listItem.map((value, index) => {
                                                return <TaskDetailItem key={index} step={index + 1} stepname={value['step_taskDetail']} deleteItem={() => deleteItem(value['id_taskDetail'])}></TaskDetailItem>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
