import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';

const myHook = {
  isFetching: false,
  setIsFetching: null,
  data: null,
  setData: null,
  backupData: null,
  setBackupData: null,
  filters: { column: 'population', comparison: 'maior que', value: 0 },
  setFilters: null,
  changedData: false,
  setChangedData: null,
  filterOrder: { column: 'name', sort: 'ASC' },
  setFilterOrder: null,
};

function Provider({ children }) {
  [myHook.isFetching, myHook.setIsFetching] = useState(myHook.isFetching);
  [myHook.data, myHook.setData] = useState();
  [myHook.backupData, myHook.setBackupData] = useState();
  [myHook.changedData, myHook.setChangedData] = useState(false);
  [myHook.filters, myHook.setFilters] = useState(myHook.filters);
  [myHook.filterOrder, myHook.setFilterOrder] = useState(myHook.filterOrder);

  return (
    <StarwarsContext.Provider value={ myHook }>
      { children }
    </StarwarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
