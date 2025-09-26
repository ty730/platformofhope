import React from 'react';
import './../App.css';
import './../styles/store.css'
import {Helmet} from 'react-helmet'
import towel from './../images/store/poh-towel.jpg';
import { Link } from "react-router-dom";

function Store() {
  return (
    <div className="Store">
        <Helmet>
            <title>Store - Platform of Hope in Atlanta, Georgia</title>
        </Helmet>
        <div className="store-header">
            <h2>Platform of Hope Store (Under Construction)</h2>
        </div>
        <div className="column-container">
            <div className="product-card">
                <img src={towel} alt="Towel"/>
                <h4>Platform of Hope Towel</h4>
                <p>$25</p>
                <Link to="/order"><button>ORDER NOW</button></Link>
            </div>
            <div className="product-card">
                <img src={towel} alt="Towel"/>
                <h4>Platform of Hope Towel</h4>
                <p>$25</p>
                <Link to="/order"><button>ORDER NOW</button></Link>
            </div>
            <div className="product-card">
                <img src={towel} alt="Towel"/>
                <h4>Platform of Hope Towel</h4>
                <p>$25</p>
                <Link to="/order"><button>ORDER NOW</button></Link>
            </div>
            <div className="product-card">
                <img src={towel} alt="Towel"/>
                <h4>Platform of Hope Towel</h4>
                <p>$25</p>
                <Link to="/order"><button>ORDER NOW</button></Link>
            </div>
            <div className="product-card">
                <img src={towel} alt="Towel"/>
                <h4>Platform of Hope Towel</h4>
                <p>$25</p>
                <Link to="/order"><button>ORDER NOW</button></Link>
            </div>
            <div className="product-card">
                <img src={towel} alt="Towel"/>
                <h4>Platform of Hope Towel</h4>
                <p>$25</p>
                <Link to="/order"><button>ORDER NOW</button></Link>
            </div>
            <div className="product-card">
                <img src={towel} alt="Towel"/>
                <h4>Platform of Hope Towel</h4>
                <p>$25</p>
                <Link to="/order"><button>ORDER NOW</button></Link>
            </div>
        </div>
    </div>
  );
}

export default Store;
