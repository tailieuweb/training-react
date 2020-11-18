import React, { Component } from 'react';

class Form extends Component {
  renderLevel = () => {
    let { arrayLevel } = this.props;
    return arrayLevel.map((level, index) => {
      switch (level) {
        case 0:
          return <option key={index} value={level}>Small</option>
        case 1:
          return <option key={index} value={level}>Medium</option>
        default:
          return <option key={index} value={level}>High</option>
      }
    });
  }

  render() {

    if (this.props.showForm === false) return null;
    return (
      <form className="form-add" enctype='multipart/form-data' onSubmit={(event) => this.props.handleFormClickSubmit(event)}>
        <div className="form-group marginR5">
          <input
            type="text"
            className="form-control"
            placeholder="Item Name"
            value={this.props.valueItem}
            onChange={(event) => this.props.handleFormInputChange(event.target.value)}
          />
        </div>

        <div className="form-group marginR5">
          <input
            type="text"
            className="form-control"
            placeholder="Item Deadline"
            value={this.props.valueDeadline}
            onChange={(event) => this.props.handleFormInputDeadline(event.target.value)}
          />
        </div>
        <div className="form-group marginR5">
          <input
            type="file"
            className="form-control"
            placeholder="Item img"
            value={this.valueFile}
            onChange={(event) => this.props.handleFormInputImage(event)}
          />
        </div>
        <div className="form-group marginR5">
          <select
            className="form-control"
            value={this.props.levelItem}
            onChange={(event) => this.props.handleFormSelectChange(event.target.value)}
          >
            {this.renderLevel()}
          </select>
        </div>
        <button
          type="button"
          className="btn btn-cancel btn-default marginR5 mr-4"
          onClick={() => this.props.handleFormClickCancel()}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-primary marginR5"
          onClick={(event) => this.props.handleFormClickSubmit(event)}
        >
          Submit
        </button>
      </form>

    )
  }
}

export default Form;