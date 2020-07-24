import React from 'react';
import PropTypes from 'prop-types';
import {Counter} from './QuizPartsStyles'

export default function QuestionCount(props) {
return (
<Counter>
Question <span>{props.counter}</span> of <span>{props.total}</span>
</Counter>
);
}
QuestionCount.propTypes = {
counter: PropTypes.number.isRequired,
total: PropTypes.number.isRequired
};
