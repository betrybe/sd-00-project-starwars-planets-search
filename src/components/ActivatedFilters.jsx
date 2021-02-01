import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from '../context/StarwarsContext';
import { rKey } from '../services/utils';

function ActivatedFilters() {
  return (
    <StarwarsContext.Consumer>
      {({ filters }) => (
        <div>
          <h4>Filtros</h4>
          {filters.filterByNumericValues.map(({ column, comparison, value }, i) => (
            <p key={ rKey(column )} data-testid="filter">
              {`${column} ${comparison} ${value}`}
              <button type="button" onClick={ () => { filters.removeFilter(i); } }>
                X
              </button>
            </p>
          ))}
        </div>
      )}
    </StarwarsContext.Consumer>
  );
}

export default ActivatedFilters;
