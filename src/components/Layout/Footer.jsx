import logo from '../../assets/logo-footer.svg'

export default function Footer() {
    return (
        <footer>
            <div className="logo">
                <img src={logo} alt="logo Kasa" />
            </div>
            <div className="copyright">
                <p>&copy; 2023 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};