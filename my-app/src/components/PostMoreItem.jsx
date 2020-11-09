import React from 'react';

class PostMoreItem extends React.Component {
  render() {
    return (
      <li>
          <div className="headlinesdate">
              <div className="headlinesdm">
                  <div className="headlinesday">{this.props.data.date_post.day}</div>
                  <div className="headlinesmonth">{this.props.data.date_post.month}</div>
              </div>
              <div className="headlinesyear">{(this.props.data.date_post.year + '').substr(0,2)}</div>
          </div>
          <div className="headlinestitle">
              <a href="#">{this.props.data.title}</a>                    
          </div>
      </li>
    )
  }
}

export default PostMoreItem;
