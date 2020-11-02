import React from 'react';
import Sort from './Sort'
import Search from './Search'
class Control extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="row mt-15"> 
                <Search onSearch = {this.props.onSearch}/>
                <Sort onSort = { this.props.onSort } />
            </div>
        );
    }
}
 
export default Control;