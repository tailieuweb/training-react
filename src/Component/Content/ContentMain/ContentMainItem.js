import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import changeToSlug from '../../ChangeSlug';
import ModalAdd from '../ModalAdd';
import Axios from 'axios';
export default class ContentMainItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalEdit: false,
            objValue: {
                name_task: "",
                image: "",
                dayS: "",
                dayE: "",
                state: 0,
            },
        }
    }
    editTask = () => {
        let id = this.props.showLink;
        Axios.post(`${this.props.pathUrl}post/getTaskById.php`, { idTask: id })
            .then(res => {
                let [a, , ,] = res.data;
                let { id_task, ...rest } = a;
                this.setState({ objValue: rest });
                this.setState({ showModalEdit: !this.state.showModalEdit });
            })
            .catch(err => {
                console.log(err);
            })

    }
    hideModalEdit = () => {
        this.setState({ showModalEdit: !this.state.showModalEdit });
    }
    handleEdit = (valueEdit) => {
        let data = {
            dataEdit: valueEdit,
            id: this.props.showLink,
        }
        Axios.post(`${this.props.pathUrl}post/updateTask.php`, { dataEdit: data })
            .then(res => {
                this.props.handelEditDone()
            })
            .catch(err => {
                console.log(err);
            })

    }
    render() {
        let check = this.props.trangthai;
        let trangthai = null;
        let classTranghai = null;
        let element = null;
        let title = new changeToSlug(this.props.tieude).ChangeToSlug();
        if (check === 1) {
            trangthai = 'Hoàn thành';
            classTranghai = 'hoanthanh';

            element = <span className={classTranghai}> {trangthai}</span>
        } else {
            trangthai = 'Chưa hoàn thành';
            classTranghai = 'chuahoanthanh';
            element = <span className={classTranghai}> {trangthai}</span>
        }
        let modal = <></>;
        let { showModalEdit } = this.state;
        if (showModalEdit) {
            modal = <ModalAdd
                hideModal={this.hideModalEdit}
                click={this.handleEdit}
                objValue={this.state.objValue}
                pathUrl={this.props.pathUrl}
            ></ModalAdd>
        } else {
            modal = <></>;
        }
        return (
            <tr>
                <th scope="row">{this.props.stt}</th>
                <td>{this.props.tieude}</td>
                <td className="imageTask">
                    <img src={"/image/" + this.props.hinhanh} alt="" className="img img-fluid" />
                </td>
                <td>{this.props.dayStart}</td>
                <td>{this.props.dayEnd}</td>
                <td>
                    {element}
                </td>
                <td>
                    <button className="btn btn-danger btnAction" onClick={this.props.showModal}>Xóa</button>
                    <button className="btn btn-success btnAction" onClick={this.editTask}>Sửa</button>
                    <Link to={"/detail/" + title + "/" + this.props.showLink}>
                        <button className="btn btn-warning btnAction">...</button>
                    </Link>
                </td>
                {
                    modal
                }
            </tr>
        )
    }
}
