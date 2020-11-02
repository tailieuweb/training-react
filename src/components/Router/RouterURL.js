import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Bai1 from '../Bai1/Bai1';
import Bai2 from '../Bai2/Bai2';
import Bai3 from '../Bai3/Bai3';
import Bai4 from '../Bai4/Bai4';
import Bai5 from '../Bai5/Bai5';
import Bai6 from '../Bai6/Bai6';
import Bai7 from '../Bai7/Bai7';
import Bai8 from '../Bai8/Bai8';
import Bai9 from '../Bai9/Bai9';


class RouterURL extends Component {
    render() {
        return (
            <div>
                 <Route path="/bai1" component={Bai1} />
                <Route path="/bai2" component={Bai2} />
                <Route path="/bai3" component={Bai3} />
                <Route path="/bai4" component={Bai4} />
                <Route path="/bai5" component={Bai5} />
                <Route path="/bai6" component={Bai6} />
                <Route path="/bai7" component={Bai7} />
                <Route path="/bai8" component={Bai8} />
                <Route path="/bai9" component={Bai9} />
            </div>
        );
    }
}

export default RouterURL;

