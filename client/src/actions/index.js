import axios from 'axios';
import { FETCH_SURVEYS, FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({ payload: res.data, type: FETCH_USER });
};

export const handleToken = token => async (dispatch) => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ payload: res.data, type: FETCH_USER });
};

export const submitSurvey = (values, history) => async (dispatch) => {
    const res = await axios.post('/api/surveys', values);
    history.push('/surveys');
    dispatch({ payload: res.data, type: FETCH_USER });
};

export const fetchSurveys = () => async (dispatch) => {
    const res = await axios.post('/api/surveys');

    dispatch({ payload: res.data, type: FETCH_SURVEYS });
};
