import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails  from '../../utils/validateEmails';

const FIELDS = [
    {label: "Survey Title", name: "title"},
    {label: "Subject Line", name: "subject"},
    {label: "Email Body", name: "body"},
    {label: "Recipients List", name: "emails"},
];

class SurveyForm extends Component {

    renderFields() {
        return _.map(FIELDS, ({ label, name}) => {
            return <Field key={name} component={SurveyField} type="text" name={name} label={label} className="input-field"/>
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text waves-effect waves-light" >Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text waves-effect waves-light">
                        Next
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    errors.emails = validateEmails(values.emails || '');
    _.each(FIELDS, ({name, label})=> {
        if(!values[name]) {
            errors[name] = `You must provide ${label}`;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);