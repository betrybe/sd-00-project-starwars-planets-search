import React from 'react';

import {
  TABLE_KEYS,
  rKey,
  formatName,
} from '../services/utils';

const Header = () => (
  <thead>
    <tr>
      {
        TABLE_KEYS.map((header) => (
          <th key={ rKey(header) }>
            { formatName(header) }
          </th>
        ))
      }
    </tr>
  </thead>
);

export default Header;
