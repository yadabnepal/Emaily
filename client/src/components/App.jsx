import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../style/emaily.css';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
    static get propTypes() {
        return {
            fetchUser: PropTypes.func,
        };
    }

    static get defaultProps() {
        return {
            fetchUser: null,
        };
    }

    componentDidMount() {
        const { fetchUser } = this.props;
        fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
