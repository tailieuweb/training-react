import React from 'react';

class Search extends React.Component {
    render() { 
        return (  
            <div className="col-md-6">
                <div className="input-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nhập từ khóa..." 
                        name="keyWord"
                        />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">
                        <span className="fa fa-search mr-2"></span>Tìm
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}
 
export default Search;