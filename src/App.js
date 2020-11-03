import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SweetAlert from 'sweetalert-react';
import { BrowserRouter as Router, Link } from "react-router-dom";
// import React, { useState } from "react";
import ReactPaginate from 'react-paginate';
import Search from './components/Search';
import Sort from './components/Sort';
import Form from './components/Form';
import Mockdata from './mockdata/Mockdata';
import Item from './components/Item';
import ItemEdit from './components/ItemEdit';
import 'sweetalert/dist/sweetalert.css';
import RouterURL from './components/Router/RouterURL';
import './css/app.scss';



let arrayLevel = [];
for (let i = 0; i < Mockdata.length; i++) {
  if (arrayLevel.indexOf(Mockdata[i].level) === -1) {
    arrayLevel.push(Mockdata[i].level);
  }
}
arrayLevel.sort(function (a, b) { return a - b });
const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Mockdata,
      showAlert: false,
      titleAlert: '',
      idAlert: '',
      indexEdit: 0,
      idEdit: '',
      nameEdit: '',
      deadLine: '',
      imgEdit: '',
      levelEdit: 0,
      arrayLevel: arrayLevel,
      showForm: false,
      valueItem: '',
      valueDeadline: '',
      valueFile: '',
      levelItem: 0,
      sortType: '',
      sortOrder: '',
      valueSearch: '',
      isSearch: false,
      itemsSearch: [],
      orgtableData: [],
      tableData: [],
      perPage: 3,
      curentPage: 0,
      offset: 0
    };

  }

  handleShowAlert = (item) => {
    this.setState({
      showAlert: true,
      titleAlert: item.name,
      idAlert: item.id
    });
  }
  handleDeleteItem = () => {
    let { idAlert, items } = this.state;
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === idAlert) {
          items.splice(i, 1);
          break;
        }
      }
      this.setState({ items });
    }
    this.setState({
      showAlert: false,
      isSearch: false,
      valueSearch: ''
    });
  }
  handleEditItem = (index, item) => {
    this.setState({
      indexEdit: index,
      idEdit: item.id,
      nameEdit: item.name,
      deadLine: item.deadline,
      imgEdit: item.srcss,
      levelEdit: item.level
    });
  }
  handleEditClickCancel = () => {
    this.setState({
      idEdit: ''
    });
  }
  handleEditInputChange = (value) => {
    this.setState({
      nameEdit: value
    });
  }
  handleEditInputDeadline = (value) => {
    this.setState({
      deadLine: value
    });
  }
  handleEditInputimgEdit = async (value) => {
    this.setState({
      imgEdit: await convertBase64(value.target.files[0])
    });
  }
  handleEditSelectChange = (value) => {
    this.setState({
      levelEdit: value
    });
  }
  handleEditClickSubmit = () => {
    let { items, idEdit, nameEdit, deadLine, imgEdit, levelEdit } = this.state;
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === idEdit) {
          items[i].name = nameEdit;
          items[i].deadline = deadLine;
          items[i].srcss = imgEdit;
          items[i].level = +levelEdit;
          break;
        }
      }
    }
    this.setState({
      idEdit: ''
    });
  }
  handleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  }
  handleFormInputChange = (value) => {
    this.setState({
      valueItem: value
    });
  }
  handleFormInputDeadline = (value) => {
    this.setState({
      valueDeadline: value
    });
  }

  handleFormInputImage = async (value) => {
    this.setState({
      valueFile: await convertBase64(value.target.files[0])
    });
  }
  handleFormSelectChange = (value) => {
    this.setState({
      levelItem: value
    });
  }
  handleFormClickCancel = () => {
    this.setState({
      valueItem: '',
      valueDeadline: '',
      valueFile: '',
      levelItem: 0
    });
  }

  handleFormClickSubmit = (event) => {

    let { valueItem, valueDeadline, valueFile, levelItem, items } = this.state;
    if (valueItem.trim() === 0 || valueDeadline.trim() === 0) return false;
    let newItem = {
      id: uuidv4(),
      name: valueItem,
      deadline: valueDeadline,
      srcss: valueFile,
      level: +levelItem
    };
    items.push(newItem);
    this.setState({
      items,
      valueItem: '',
      valueDeadline: '',
      valueFile: '',
      levelItem: 0,
      showForm: false,
      isSearch: false,
      valueSearch: ''
    });
  }
  handleSort = (sortType, sortOrder) => {
    let { items } = this.state;
    if (sortOrder !== '' && sortType !== '') {
      let value = `${sortType}-${sortOrder}`;
      switch (value) {
        default:
          break;
        case "name-asc":
          items.sort(this.compareValues('name', 'asc'));
          break;
        case "name-desc":
          items.sort(this.compareValues('name', 'desc'));
          break;
        case "level-desc":
          items.sort(this.compareValues('level', 'asc'));
          break;
        case "level-asc":
          items.sort(this.compareValues('level', 'desc'));
          break;
      }
      this.setState({
        items: items,
        sortType: sortType,
        sortOrder: sortOrder
      });
    }
  }
  // hàm cho sắp xếp động
  compareValues = (key, order = 'asc') => {
    return function (a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
  handleSearch = (search) => {
    let { items } = this.state;
    let itemsSearch = [...items];
    let newArray = [];
    if (search.length <= 0) {
      this.setState({ isSearch: false })
    } else {
      for (let item of itemsSearch) {
        if (item.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
          newArray.push(item);
        }
      }
      this.setState({ isSearch: true })
    }
    this.setState({
      itemsSearch: newArray,
      valueSearch: search
    });
  }
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({
      curentPage: selectedPage,
      offset: offset
    }, () => {
      this.loadMoreData()
    });
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    var data = this.state.items;
    var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      orgtableData: this.state.items,
      items: slice
    })
  }

  loadMoreData() {
    const data = this.state.orgtableData;
    const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      items: slice
    })
  }


  renderItem = () => {
    let { items, idEdit, indexEdit, nameEdit, levelEdit, arrayLevel, isSearch, itemsSearch } = this.state;
    if (isSearch) {
      items = itemsSearch
    }
    if (items.length === 0) {
      return <Item item={0} />

    }
    return items.map((item, index) => {
      if (item.id === idEdit) {
        return (
          <ItemEdit
            key={index}
            indexEdit={indexEdit}
            nameEdit={nameEdit}
            levelEdit={levelEdit}
            arrayLevel={arrayLevel}
            handleEditClickCancel={this.handleEditClickCancel}
            handleEditInputChange={this.handleEditInputChange}
            handleEditInputDeadline={this.handleEditInputDeadline}
            handleEditInputimgEdit={this.handleEditInputimgEdit}
            handleEditSelectChange={this.handleEditSelectChange}
            handleEditClickSubmit={this.handleEditClickSubmit}
          />
        )
      }
      return (
        <Item
          index={index + 1}
          item={item}
          key={item.id}
          handleShowAlert={this.handleShowAlert}
          handleEditItem={this.handleEditItem}
        />
      )
    });
  }



  render() {

    return (
      <Router>
        <div className="App">
          <header className="App1">
            <ul className="hb-dropdown">
              {/* <Home></Home> */}
              <RouterURL></RouterURL>
            </ul>
          </header>
          <div className="container">
            <SweetAlert
              show={this.state.showAlert}
              title="Delete Item?"
              text={this.state.titleAlert}
              showCancelButton
              onOutsideClick={() => this.setState({ showAlert: false })}
              onEscapeKey={() => this.setState({ showAlert: false })}
              onCancel={() => this.setState({ showAlert: false })}
              onConfirm={() => this.handleDeleteItem()}
            />
            <div className="page-header">
              <h1><Link to="/">Demo - Project Công Việc</Link> <small>ReactJS</small> <Link className="example" to="/example">Example</Link></h1>
              
            </div>
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 pd-0">
                <Search
                  valueSearch={this.state.valueSearch}
                  handleSearch={this.handleSearch}
                />
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                
              </div>
              <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 pd-0">
                <button
                  type="button"
                  className="btn btn-info btn-block marginB10"
                  onClick={this.handleShowForm}
                >
                  {this.state.showForm ? 'Close Item' : 'Add Item'}
                </button>
              </div>
            </div>
            <div className="row marginB10">
              <div className="col-md-offset-7 col-md-5 pd-0">
                <Form
                  showForm={this.state.showForm}
                  arrayLevel={this.state.arrayLevel}
                  valueItem={this.state.valueItem}
                  handleFormInputChange={this.handleFormInputChange}
                  handleFormInputDeadline={this.handleFormInputDeadline}
                  handleFormInputImage={this.handleFormInputImage}
                  levelItem={this.state.levelItem}
                  handleFormSelectChange={this.handleFormSelectChange}
                  handleFormClickCancel={this.handleFormClickCancel}
                  handleFormClickSubmit={this.handleFormClickSubmit}
                />
              </div>
            </div>
            <div className="panel panel-success">
              <div className="panel-heading">
                <Sort
                    sortType={this.state.sortType}
                    sortOrder={this.state.sortOrder}
                    handleSort={this.handleSort}
                  />
                <h2>List item</h2>
              </div>
              <table className="table table-hover ">
                <thead>
                  <tr>
                    <th style={{ width: '10%' }} className="text-center">#</th>
                    <th>Name</th>
                    <th style={{ width: '15%' }} className="text-center">Deadline</th>
                    <th style={{ width: '15%' }} className="text-center">Icon</th>
                    <th style={{ width: '15%' }} className="text-center">Level</th>
                    <th style={{ width: '11%' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderItem()}

                </tbody>

              </table>
            </div>
          </div>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName="active"
          />
        </div>
        {/* <h4>Lưu ý các demo liên quan:http://localhost:3000/bai + n</h4>
        <h4>n=1~9</h4> */}
      </Router>

    );
  }
}

export default App;
