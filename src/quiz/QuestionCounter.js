import React from 'react';
import PropTypes from 'prop-types';

export default function QuestionCount(props) {
return (
<div>
Question <span>{props.counter}</span> of <span>{props.total}</span>
</div>
);
}
QuestionCount.propTypes = {
counter: PropTypes.number.isRequired,
total: PropTypes.number.isRequired
};
