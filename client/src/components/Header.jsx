import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginModal from './widgets/LoginModal';
import Payments from './Payments';


function renderContent(auth) {
    switch (auth) {
        case null:
            return 'Still deciding';
        case false:
            return (
                <>
                    <LoginModal />
                    <Link to="/#" className="waves-effect waves-light modal-trigger"
                        data-target="modal1"
                    >
                        Login
                    </Link>
                </>
            );
        default:
            return (
                <>
                    <li><Payments /></li>
                    <li style={{ margin: '0 10px 0 10px' }}>
                        Credits:
                        { ' ' }
                        { auth.credits }
                    </li>
                    <li><a href="/api/logout">Logout</a></li>
                </>
            );
    }
}

const Header = ({ auth }) => {
    Header.propTypes = {
        auth: PropTypes.bool,
    };
    Header.defaultProps = {
        auth: null,
    };

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={auth ? '/surveys' : '/'} className="brand-logo">Emaily</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    { renderContent(auth) }
                </ul>
            </div>
        </nav>
    );
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
