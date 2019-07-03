import React from 'react';

const Action = (props) => (
  <div>
    <button 
      style={{ color: props.backgroundColor}}
      className="button is-white is-medium"
      onClick={props.handlePick}
      >
       Porquê ser vegano?
    </button>
  </div>
);

export default Action;