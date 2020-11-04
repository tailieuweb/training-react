import React from 'react';

import './footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="container flex">
                <div className="footer-right">
                    <b>FLYMPHIIM</b><span>NET</span>
                    <p>Nơi cập nhật những bộ phim mới hot nhất hiện nay.</p>
                </div>
                <div className="footer-left">
                    <h4>Thông Tin</h4>
                    <p>Điều khoản sử dụng</p>
                    <p>Bản quyền và trách nhiệm nội dung</p>
                    <p><span>Admin:</span> ads@dongphim.net</p>
                    <p><span>Liên hệ QC:</span> ads.movies888@gmail.com</p>
                </div>
            </div>
            <div className="footer-forallcopy">&copy;2020 Copyright flymphim.net. All Rights reserved.</div>
        </div>
    );
}

export default Footer;
