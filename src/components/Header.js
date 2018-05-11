import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

    constructor(){
        super();
        
        this.state = {
            isNavOpen : false
        };
    }

    NavOpenClick() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }

    render() {
        return (
            <header>
                <nav className="container navbar navbar-expand-lg navbar-light justify-content-between">
                    <a className="navbar-brand" href="#">MyNews</a>
                    <button className="navbar-toggler" type="button" onClick={this.NavOpenClick.bind(this)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse" style={{ display: this.state.isNavOpen ? "block" : "none" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" activeClassName="active" to="/">Ana Sehife</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeClassName="active" to="/society">Cemiyyet</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeClassName="active" to="/politics">Siyaset</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeClassName="active" to="/economy">Iqtisadiyyat</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;