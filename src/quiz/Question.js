import React from 'react';
import PropTypes from 'prop-types';
import {Content} from './QuizPartsStyles'

function Question(props) {

return (

<Content>{props.content}</Content>
);
}
Question.propTypes = {
content: PropTypes.string.isRequired
};

export default Question;