const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content bg-black text-white">
                <aside>
                    <h2 className="text-3xl font-semibold">CareerHub</h2>
                    <p className="text-[gray]">There are many variations of passages<br /> of Lorem Ipsum , but the majority have<br />suffered alteration in some form.</p>
                    <div>
                        <img src="./social.png" alt="" />
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest news</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                <nav>
                    <header className="footer-title">Product</header>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricings</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <header className="footer-title">Support</header>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a Partner</a>
                    <a className="link link-hover">Developers</a>
                </nav>
                <div>
                    <header className="footer-title">Contact</header>
                    <p>524 Broadway, NYC</p>
                    <p>+1777-978-5570</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;