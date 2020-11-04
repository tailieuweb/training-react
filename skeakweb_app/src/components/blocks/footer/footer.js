import React from 'react';

import './footer.scss';
import logofooter from '../footer/images/logoJaevs3.jpg';
function Footer() {
    return (
        <div className="footer-forall">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <h4>Our Stories</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                        <p className="ourstories">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 footer-row-fa">
                        <h4>Adress</h4>
                        <p className="footer-fa"><i className="fa fa-map-marker fa-footer"></i>53 Vo Van Ngan, Thu Duc district, Ho Chi Minh city</p>
                        <p className="footer-fa"><i className="fa fa-phone"></i>0999999999</p>
                        <p className="footer-fa footer-fa4"><i className="fa fa-facebook fa-footer"></i>facebook.com/</p>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <h4 className="payment">Service</h4>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-4 col-img-footer">
                                <img src={logofooter} alt="Logofooter" className="img-responsive" />
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <h4 className="newletter">Newletter</h4>
                        <p>Sign up now newsletter to get our update. We don't send span email to you.</p>
                        <p>Sign up now newsletter to get our update.
                         We don't send span email to you odio dignissimos ducimus qui blanditi.</p>
                        <form action="">
                            <div className="form-filed">
                                <p className="input-icon">
                                    <i className="fa fa-envelope icon"></i>
                                    <input type="email" name="EMAIL" placeholder="Your email address" required=""
                                        className="input-field" />

                                </p>
                                <p className="btn-submitfooter">
                                    <button value="Sign up" className="submit">Submit</button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="app-footer">Jae</div>
            </div>
            <div className="footer-forallcopy">Jae &copy;2020</div>
        </div>
    );
}

export default Footer;
