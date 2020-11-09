import React from 'react';


import PostMoreItem from './PostMoreItem';

class PostMorePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrPostMoreItems: [] 
    };
    
    props.dataPostNew.forEach(item => {
      this.state.arrPostMoreItems.push(<PostMoreItem data={item} key={item.id}/>);
    })
  }
  render() {
    return (
      <ul>
        {this.state.arrPostMoreItems}
      </ul>
    );
  }
}

export default PostMorePanel;
