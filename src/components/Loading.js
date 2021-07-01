// LIBRARY
import React from 'react';

// STYLE
import '../style/css/spinner.css';

const LoadingSpinner = (props) => {
  return (
    <div className="spinner-wrap">
      <div className="spinner">
        <span className="hide-spinner"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
