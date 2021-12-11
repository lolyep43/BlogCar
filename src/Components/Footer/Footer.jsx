import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-100 py-4 flex-shrink-0 bg-dark">
      <div className="container py-4">
        <div className="row gy-4 gx-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="h1 text-white">BlogCar</h5>
            <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">Quick links</h5>
            <ul className="list-unstyled text-muted text-decoration-none">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/produk">Produk</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Newsletter</h5>
            <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
