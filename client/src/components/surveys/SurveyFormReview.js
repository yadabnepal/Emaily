import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router';
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history}) => {
    const reviewFields = _.map(formFields, ({name, label}) => {
       return (
         <div key={ name }>
             <label>{ label }</label>
             <div>
                 { formValues[name] }
             </div>
         </div>
       );
    });

  return (
      <div>
          <h5>Please confirm your entries</h5>
          { reviewFields }
          <button className="btn darken-3 waves-effect waves-light yellow" onClick={onCancel}>
              Back
          </button>

          <button className="btn waves-effect waves-light right" onClick={()=>submitSurvey(formValues, history)}>
              Submit <i className="material-icons right">send</i>
          </button>
      </div>
  )
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default withRouter(connect(mapStateToProps, actions)(SurveyReview));