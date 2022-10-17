import React from 'react';
import footerBackground from '../../assets/icon/footer.gif';

const Footer = () => {
    return (
        <footer class="p-10 justify-between" style={{ background: `url(${footerBackground})`, backgroundSize: 'cover' }}>
            <div className="footer">
                <div>
                    <span class="footer-title">Web Design</span>
                    <a href="http://" class="a a-hover text-xl">Web Development</a>
                    <a href="http://" class="a a-hover text-xl">Graphics Design</a>
                    <a href="http://" class="a a-hover text-xl">Digital Marketing</a>
                    <a href="http://" class="a a-hover text-xl">Social Media Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Social Media</span>
                    <a href="https://www.facebook.com/iqbalhossainraju04/" class="a a-hover text-xl" target="_blank" rel="noreferrer">Facebook</a>
                    <a href="https://www.instagram.com/iqbalhossainofficial1/" class="a a-hover text-xl" target="_blank" rel="noreferrer">Instagram</a>
                    <a href="https://www.aedin.com/in/iqbal-hossain-b70836228/" class="a a-hover text-xl" target="_blank" rel="noreferrer">aedIn</a>
                    <a href="https://github.com/iqbalhossainraju" class="a a-hover text-xl" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>
            <div className="text-center my-5">
                <p>Copyright &copy; {new Date().getFullYear()} - All right reserved by Iqbal Portfolio</p>
            </div>
        </footer>
    );
};

export default Footer;