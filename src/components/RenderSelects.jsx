import React from 'react';
import StarwarsContext from '../context/StarwarsContext';
import Select from './Select';

const NOONE = 0;

const RenderSelects = () => (
  <StarwarsContext.Consumer>
    {({ filters: { filterByNumericValues: fltr }, filters, setFilters }) => (
      <div>
        <Select
          options={ columns.filter(({ val }) => fltr.filter(
            ({ column: col }) => (col === val),
          ).length === NOONE) }
          dataTest="column-filter"
          selected={ (res) => { setFilters({ ...filters, column: res }); } }
        />
        <Select
          options={ comparisons }
          dataTest="comparison-filter"
          selected={ (res) => { setFilters({ ...filters, comparison: res }); } }
        />
        <input
          data-testid="value-filter"
          type="number"
          onChange={ ({ target: { value } }) => { setFilters({ ...filters, value }); } }
        />
      </div>
    )}
  </StarwarsContext.Consumer>
);

export default RenderSelects;
