import React from 'react';


class PostItem extends React.Component {
  render() {
    return (
      <div className={this.props.isPostLeft ? 'right col-md-6' : 'col-md-6'}>
        <div className="row">
            <div className="col-md-4 topnewstime">
                <span className="topnewsdate">{this.props.data.date_post.day}</span><br/>
                <span className="topnewsmonth">Tháng {this.props.data.date_post.month}</span><br/>
            </div>
            <div className="col-md-8 bottom post-item">
                <div className="img text-center"> 
                    <a href="#">
                        <div className="topnewsthumb">
                            <img className="img-fluid" src={this.props.data.image} alt={this.props.data.image}/>
                        </div>
                    </a>
                </div>
                <h4>
                    <a href="#">{this.props.data.title}</a>                            
                </h4>
                <div className="topnewsdesc">{this.props.data.description}                            
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default PostItem;
