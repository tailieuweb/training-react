import React from 'react';

// import url_image1 from '../../public/images/hinh1.jpg'
// import url_image2 from '../../public/images/hinh2.jpg'

import PostItem from './PostItem';

class PostNewPanel extends React.Component {
  constructor(props) {
    super(props);

    this.postLeft = props.dataPostNew[0];
    this.postRight = props.dataPostNew[1];
  }

  render() {
    return (
      <div className ="row" >
        <PostItem isPostLeft={true} data={this.postLeft} />
        <PostItem isPostLeft={false} data={this.postRight}/>
      </div>
    );
  }
}

export default PostNewPanel;
