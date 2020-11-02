import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //tại vì taskEditing có thuộc tính id nên tạo id
      id: '',
      name: '',
      description: '',
      imageTodo: '',
      //cho mặc định là ẩn
      status: false
    }
    this.inputRef = React.createRef();
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === 'status') {
      value = target.value === 'true' ? true : false
    }
    this.setState({
      [name]: value
    })
  }

  onHandleImageChange = event => {
    const file = event.target.files[0];
    this.setState({
      imageTodo: URL.createObjectURL(file),
    });
  }

  onClear = (event) => {
    this.setState({
      name: '',
      status: false,
      description: '',
      imageTodo: ''
    })
    this.inputRef.current.value = '';

  }

  onSubmit = event => {
    //ngăn reload lại trang
    event.preventDefault();
    //truyền qua thằng cha
    if (this.state.name !== "") {
      this.props.onSubmit(this.state)
    }
    //submit xong sẽ hủy bỏ và lưu form
    this.onClear();
  }
  //được gọi khi component được gọi khi refesh lại
  componentDidMount() {
    let { task } = this.props;
    if (task) {
      this.setState({
        id: task.id,
        name: task.name,
        status: task.status 
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log(nextProps.task);
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status,
        description: nextProps.task.description
      });
    } else if (!nextProps.task) {
      this.setState({
        id: "",
        name: "",
        status: false,
        description: '',
      });
    }
  }

  render() {
    let { id, imageTodo } = this.state;
    let $imagePreview = null
    if (imageTodo) {
      $imagePreview = (<img className="imgPreview" src={imageTodo} />);
    } else {
      $imagePreview = (<div className="previewText">Chọn hình để xem trước</div>);
    }
    return (
      <div className="card">
        <h4 className="card-header">
          {id !== '' ? 'Sửa công việc' : 'Thêm công việc'}
          <span className="fa fa-times-circle pl-84 "
            aria-hidden="true"
            onClick={this.onCloseForm}></span>
        </h4>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên :</label>
              <input type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
                <label>Mô tả :</label>
                <textarea className="form-control"
                       name = "description" 
                       value= { this.state.description }
                       onChange = { this.onChange }
                       />
            </div>

            <div className="form-group">
                <label>Ảnh công việc :</label>
                <input className="form-control"
                       type= "file"
                       name = "imageTodo"
                       ref={this.inputRef} 
                       onChange = { this.onHandleImageChange }
                       />
            </div>

            <div className="preview">
                {$imagePreview}
            </div>
            <label>Trạng Thái :</label>
            <select className="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.onChange}>
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning text-white">
                <span className="fa fa-plus mr-2 "></span>Lưu lại</button>&nbsp;
                    <button type="submit"
                className="btn btn-danger"
                onClick={this.onClear}>
                <span className="fa fa-times mr-2"></span>Hủy Bỏ</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;