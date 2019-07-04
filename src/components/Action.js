import React from 'react';

const Action = (props) => (
  <div>
    <button 
      style={{ color: props.backgroundColor}}
      className="button is-white is-medium"
      onClick={props.handlePick}
      >
       Why go vegan?
    </button>
  </div>
);

export default Action;