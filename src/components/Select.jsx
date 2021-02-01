import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const { options, dataTest, selected } = props;
  return (
    <select
      data-testid={ dataTest }
      onChange={ ({ target }) => { selected(target.value); } }
    >
      {
        options.map(({ value, innerText }) => (
          <option key={ rKey(value) } value={ value }>{ innerText }</option>
        ))
      }
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataTest: PropTypes.string.isRequired,
  selected: PropTypes.func.isRequired,
};

export default Select;
