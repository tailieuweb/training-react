import React, { Component } from 'react'
import './Content.scss'
import ContentMain from './ContentMain/ContentMain'
import ModalAdd from './ModalAdd'
import Axios from 'axios';
import Panigination from './Panigination/Panigination';
export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkShowModal: true,
            todo: [],
            DataShow: [],
            totalPages: [],
            searchState: 1,
            showType: false,
            confirmDelete: false,
        }
        this.BASE_URL = 'http://localhost/todolistfinal/API/';
        this.PerPage = 4;
        this.idPage = 1;
        this.idTask = null;
    }
    caculaterData = (idPage) => {
        let Begin = (idPage - 1) * this.PerPage;
        let End = Begin + this.PerPage;
        this.setState({ DataShow: this.state.todo.slice(Begin, End) });
    }
    handelChangePage = (idPage) => {
        this.caculaterData(idPage + 1);
        this.idPage = idPage + 1;
    }
    setTotalPage = (total) => {
        let lengthTotal = Math.ceil(total / this.PerPage);
        let arr = [];
        for (let i = 0; i < lengthTotal; i++) {
            arr.push(i);
        }
        this.setState({ totalPages: arr });
    }
    changeState = (arrData, idPage) => {
        this.setState({ todo: arrData });
        this.caculaterData(idPage);
        this.setTotalPage(arrData.length);
    }
    componentDidMount() {
        Axios.get(`${this.BASE_URL}get/getTask.php`)
            .then(res => {
                this.changeState(res.data, this.idPage);
            })
            .catch(err => {
                console.warn(new Error(err));
            })
    }
    handleAddTask = (data) => {
        Axios.post(`${this.BASE_URL}post/addTask.php`, { data })
            .then(res => {
                this.changeState(res.data, this.idPage);
            }).catch(err => {
                console.warn(new Error(err));
            })
    }
    showModalDelete = (idTask) => {
        this.idTask = idTask;
        this.setState({ confirmDelete: !this.state.confirmDelete });
    }
    hiddenModalDelete = () => {
        this.setState({ confirmDelete: !this.state.confirmDelete });
    }
    handleDeleteTask = (id) => {
        Axios.post(`${this.BASE_URL}post/deleteTask.php`, { idTask: id })
            .then(res => {
                this.changeState(res.data, this.idPage);
            }).catch(err => {
                console.warn(new Error(err));
            })
    }
    showModalAdd = () => {
        this.setState({ checkShowModal: !this.state.checkShowModal });
    }
    confirmOk = () => {
        this.handleDeleteTask(this.idTask);
        this.setState({ confirmDelete: false });
    }
    confirmCancle = () => {
        this.setState({ confirmDelete: false });
    }
    hideModal = () => {
        this.setState({ checkShowModal: !this.state.checkShowModal });
    }
    handelSortDown = () => {
        Axios.get(`${this.BASE_URL}get/sortDown.php`)
            .then(res => {
                this.changeState(res.data, this.idPage);
            }).catch(err => {
                console.warn(new Error(err));
            })
    }
    handelSortUp = () => {
        Axios.get(`${this.BASE_URL}get/sortUp.php`)
            .then(res => {
                this.changeState(res.data, this.idPage);
            }).catch(err => {
                console.warn(new Error(err));
            })
    }
    searchByName = () => {
        this.setState({ searchState: 1 });
        this.setState({ showType: false });
    }
    searchByType = () => {
        this.setState({ searchState: 2 });
        this.setState({ showType: !this.state.showType });
    }
    searchTypeDone = (e) => {
        console.log(e.target);
        Axios.post(`${this.BASE_URL}post/searchByType.php`, { stateType: 1 })
            .then(res => {
                this.changeState(res.data, this.idPage);
            }).catch(err => {
                console.warn(new Error(err));
            })
    }
    searchTypeDont = () => {
        Axios.post(`${this.BASE_URL}post/searchByType.php`, { stateType: 2 })
            .then(res => {
                this.changeState(res.data, this.idPage);
            }).catch(err => {
                console.warn(new Error(err));
            })
    }
    handleSearch = (e) => {
        let { searchState } = this.state;
        if (e.keyCode === 13) {
            if (searchState === 1) {
                Axios.post(`${this.BASE_URL}post/searchByName.php`, { name: e.target.value })
                    .then(res => {
                        this.changeState(res.data, 1);
                    }).catch(err => {
                        console.warn(new Error(err));
                    })
            }
        }
    }
    closeSearchType = () => {
        this.handelSortUp();
        this.setState({ showType: !this.state.showType });
    }
    handelEditDone = () => {
        Axios.get(`${this.BASE_URL}get/getTask.php`)
            .then(res => {
                this.changeState(res.data, this.idPage);
            })
            .catch(err => {
                console.warn(new Error(err));
            })
    }
    render() {
        let { checkShowModal, showType, confirmDelete } = this.state;
        let element = null;
        if (showType) {
            element = <>
                <select name="search" id="search" className="custom-select mr-sm-2">
                    <option defaultValue={1} onClick={this.searchTypeDone}>Hoàn thành</option>
                    <option defaultValue={2} onClick={this.searchTypeDont}>Chưa hoàn thành</option>
                </select>
                <span id="closeSearchType" onClick={this.closeSearchType}>x</span>
            </>
        } else {
            element = null;
        }
        let modalDelete = null;
        if (confirmDelete) {
            modalDelete = <>
                <div className="modalConfirmDelete">
                    <div className="overlayConfirm" onClick={this.hiddenModalDelete}></div>
                    <div className="modalConfirmMain">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-title">
                                    <h4>Bạn có muốn xóa ?</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="boxButtonConfirm">
                                    <button className="btn btn-danger btnConfirm" onClick={this.confirmOk}>OK</button>
                                    <button className="btn btn-success btnConfirm" onClick={this.confirmCancle}>Cancle</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        } else {
            modalDelete = null;
        }
        if (checkShowModal) {
            return (
                <div className="content">
                    <div className="container">
                        <div className="content_header">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="content_search">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <input type="text" name="search" id="" className="form-control" placeholder="Bạn muốn tìm cái gì hả ?" onKeyDown={this.handleSearch} />
                                            </div>
                                            <label className="col-sm-4">
                                                <select name="search" id="search" className="custom-select mr-sm-2">
                                                    <option defaultValue="1" onClick={this.searchByName}>tìm kiếm theo tên</option>
                                                    <option defaultValue="2" onClick={this.searchByType}>tìm kiếm theo loại</option>
                                                </select>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="content_sort">
                                        {element}
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="content_add">
                                        <button className="btn btn-primary" onClick={() => this.showModalAdd()}>thêm nhiệm vụ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ContentMain
                            task={this.state.DataShow}
                            showModalDelete={this.showModalDelete}
                            sortDown={this.handelSortDown}
                            sortUp={this.handelSortUp}
                            handelEditDone={this.handelEditDone}
                            path={this.BASE_URL}
                        >
                        </ContentMain>
                        {modalDelete}
                        <ul className="boxPanigination">
                            {
                                this.state.totalPages.map((value, index) => {
                                    return <Panigination page={value + 1} key={index} changePage={() => this.handelChangePage(value)}></Panigination>
                                })
                            }
                        </ul>
                    </div>
                </div>
            )
        } else {
            return <ModalAdd hideModal={this.hideModal} addTask={this.handleAddTask} pathUrl={this.BASE_URL}></ModalAdd>
        }
    }
}
