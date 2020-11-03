import React, { Component } from 'react'
import ContentMainItem from './ContentMainItem'

export default class ContentMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stataArrow: true,
        }
    }
    handleSort = (e)=>{
        if(this.state.stataArrow){
            e.target.style.transform = 'rotate(180deg)';
            this.setState({stataArrow : !this.state.stataArrow});
            this.props.sortUp();
        }else{
            e.target.style.transform = 'rotate(360deg)';
            this.setState({stataArrow : !this.state.stataArrow});
            this.props.sortDown();
        }
    }
    render() {
        let dataShow = this.props.task;
        return (
            <div className="content_main">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col" id="nameTaskItem">
                                Tên công việc
                                <span id="iconNameTask">
                                    <img src="/image/downarrow.png" alt="" onClick={this.handleSort}/>
                                </span>
                            </th>
                            <th scope="col">Ảnh</th>
                            <th scope="col">Ngày bắt đầu</th>
                            <th scope="col">Ngày kết thúc</th>
                            <th scope="col">Trạng thái công việc</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataShow.map((value,index) => {
                            return <ContentMainItem
                                key = {value['id_task']}
                                stt={index+1}
                                tieude={value['name_task']}
                                hinhanh={value['image']}
                                dayStart={value['dayS']}
                                dayEnd={value['dayE']}
                                trangthai={value['state']}
                                showModal = {()=>this.props.showModalDelete(value['id_task'])}
                                showLink = {value['id_task']}
                                handelEditDone = {()=>this.props.handelEditDone(value['id_task'])}
                                pathUrl={this.props.path}
                            ></ContentMainItem>
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}
