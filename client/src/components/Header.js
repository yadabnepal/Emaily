import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginModal from './widgets/LoginModal';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return "Still deciding";
            case false:
                return (
                    <>
                        <LoginModal/>
                        <Link to={"#"} className="waves-effect waves-light modal-trigger"
                           data-target="modal1" >
                            Login
                        </Link>
                    </>
                );
            default:
                return (
                    <>
                        <li><Payments/></li>
                        <li style={{margin: '0 10px 0 10px'}}>
                            Credits: {this.props.auth.credits}
                        </li>
                        <li><a href="/api/logout">Logout</a></li>
                    </>
                )
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth? "/surveys" : "/"} className="brand-logo">Emaily</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);