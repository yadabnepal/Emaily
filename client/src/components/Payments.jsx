import React from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

function Payments({ handleToken }) {
    Payments.propTypes = {
        handleToken: PropTypes.func,
    };
    Payments.defaultProps = {
        handleToken: null,
    };
    return (
        <StripeCheckout
            name="Emaily"
            description="Add 5 email credits"
            amount={500}
            token={token => handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
            <button className="btn" type="button">Add Credits</button>
        </StripeCheckout>
    );
}

export default connect(null, actions)(Payments);
