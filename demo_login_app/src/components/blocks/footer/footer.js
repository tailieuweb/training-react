import React from 'react';

import './footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="container flex">
                <div className="footer-right">
                    <b>SHOPTEEN</b><span>NET</span>
                    <p>Nơi cập nhật những sản phẩm hot nhất hiện nay.</p>
                </div>
                <div className="footer-left">
                    <h4>Thông Tin</h4>
                    <p>Điều khoản sử dụng</p>
                    <p><span>Admin:</span> ads@shopteen.net</p>
                    <p><span>Liên hệ QC:</span> ads.movies888@gmail.com</p>
                </div>
            </div>
            <div className="footer-forallcopy">&copy;2020 Copyright shopteen.net. All Rights reserved.</div>
        </div>
    );
}

export default Footer;
