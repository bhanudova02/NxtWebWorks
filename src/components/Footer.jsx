import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-rn-border bg-rn-surface py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center">
              <img
                src="/logo/logo.png"
                alt="NxtWebWorks"
                className="h-7 w-auto object-contain"
              />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-rn-text-muted">
              Websites, full-stack applications, Shopify stores, and admin dashboards for businesses that need clean digital products.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-rn-text">Services</h3>
            <ul className="mt-3 space-y-2 text-sm text-rn-text-muted">
              <li><a href="/#services" className="hover:text-rn-blue">Website development</a></li>
              <li><a href="/#services" className="hover:text-rn-blue">Full-stack apps</a></li>
              <li><a href="/#services" className="hover:text-rn-blue">Shopify stores</a></li>
              <li><a href="/#services" className="hover:text-rn-blue">Admin dashboards</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-rn-text">Pages</h3>
            <ul className="mt-3 space-y-2 text-sm text-rn-text-muted">
              <li><a href="/#projects" className="hover:text-rn-blue">Work</a></li>
              <li><a href="/#process" className="hover:text-rn-blue">Process</a></li>
              <li><Link to="/about" className="hover:text-rn-blue">About</Link></li>
              <li><Link to="/contact" className="hover:text-rn-blue">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-rn-text">Contact</h3>
            <a href="mailto:teamnxtwebworks@gmail.com" className="mt-3 block break-all text-sm text-rn-text-muted hover:text-rn-blue">
              teamnxtwebworks@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-7 border-t border-rn-border pt-5 text-sm text-rn-text-muted">
          © {new Date().getFullYear()} NxtWebWorks. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
