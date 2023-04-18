import React from 'react'
import PropTypes from 'prop-types'


function Square({ value, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export { Square };
