import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
    render() {
        return (
            <div className="card-panel z-depth-5">
                <SurveyForm/>
            </div>
        )
    }
}

export default SurveyNew;