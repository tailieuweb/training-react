import React, { Component } from 'react';
import T_Shirt_0101 from '../assets/img/product/t-shirts/0101.jpg';

class Item extends Component {

  render() {
    let { item, index } = this.props;
    if (!item) {
      return (
        <tr>
          <td colSpan="4" className="text-center">
            <h4>No Item</h4>
          </td>
        </tr>
      )
    }
    let classNameLabel = '';
    let nameLabel = '';
    let srcimg;

    if (item.srcss != "") {
      srcimg = item.srcss;
    }
    else {
      srcimg = T_Shirt_0101;

    }

    switch (item.level) {
      case 1:
        classNameLabel = 'label label-warning';
        nameLabel = 'Medium';
        break;
      case 2:
        classNameLabel = 'label label-danger';
        nameLabel = 'High';
        break;
      default:
        classNameLabel = 'label label-info';
        nameLabel = 'Low';
        break;
    }
    return (

      <tr>
        <td className="text-center">{index}</td>
        <td>{item.name}</td>
        <td>{item.deadline}</td>

        <td> <img style={{ width: '15%' }} src={srcimg}/> </td>
        <td className="text-center"><span className={classNameLabel}>{nameLabel}</span></td>
        <td style={{ width: '15%' }}>
          <button
            type="button"
            className="btn btn-edit btn-warning btn-sm marginR5"
            onClick={() => this.props.handleEditItem(index, item)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-delete btn-danger btn-sm"
            onClick={() => this.props.handleShowAlert(item)}
          >
            Delete
          </button>
        </td>
      </tr>
    )
  }
}

export default Item;