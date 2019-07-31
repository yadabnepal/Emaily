import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails  from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {

    renderFields() {
        return _.map(formFields, ({ label, name}) => {
            return <Field key={name} component={SurveyField} type="text" name={name} label={label} className="input-field"/>
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text waves-effect waves-light" >Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text waves-effect waves-light">
                        Next
                        <i className="material-icons right">navigate_next</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    errors.recipients = validateEmails(values.recipients || '');
    _.each(formFields, ({name, label})=> {
        if(!values[name]) {
            errors[name] = `You must provide ${label}`;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);