import React from 'react';
import { processDateRange } from '../utils';

export function Filter(props) {
  const { state } = props;

  const onChange = (e) => {
    props.onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="Filter-container">
      <div className="Filter-item">
        <label htmlFor="language" className="Filter-label">
          Language:
        </label>
        <select
          name="language"
          id="language"
          value={state.language}
          onChange={onChange}
        >
          <option value="java">Java</option>
          <option value="javascript">Javascript</option>
          <option value="python">Python</option>
        </select>
      </div>
      <div className="Filter-item">
        <label htmlFor="created" className="Filter-label">
          Date range:
        </label>
        <select
          name="created"
          id="created"
          value={state.created}
          onChange={onChange}
        >
          <option value={processDateRange('today')}>Today</option>
          <option value={processDateRange('this_week')}>This week</option>
          <option value={processDateRange('this_month')}>This month</option>
        </select>
      </div>
    </div>
  );
}
