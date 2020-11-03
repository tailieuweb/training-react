import React, { Component } from 'react'
import './Header.scss'
import { Container } from 'react-bootstrap';
export default class Header extends Component {
    render() {
        return (
            <Container>
                <div className="header">
                    <h1 className="header_title">Danh sách nhiệm vụ cần phải hoàn thành</h1>
                    <div className="header_image">
                        <img src="/image/headerbanner.jpg" alt="" className="img img-fluid img-header" />
                    </div>
                </div>
            </Container>
        )
    }
}
