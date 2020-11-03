import React, { Component } from 'react'

export default class TaskDetailItem extends Component {
    render() {
        return (
            <tr>
                <th scope="row">Bước {this.props.step}</th>
                <td className="nameStep">{this.props.stepname}</td>
                <td>
                    <button className="btn btn-danger" onClick = {this.props.deleteItem}> Xóa</button>
                </td>
            </tr>
        )
    }
}
