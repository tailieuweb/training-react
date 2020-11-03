import React, { Component } from 'react'

export default class Panigination extends Component {
    render() {
        return (
            <li className="paniginationItem" onClick={this.props.changePage}>
                {this.props.page}
            </li>
        )
    }
}
