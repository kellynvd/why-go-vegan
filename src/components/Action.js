import React from 'react';

const Action = (props) => (
  <div className="container">
    <button 
      className="button is-white is-medium"
      onClick={props.handlePick}
      >
       Porquê ser vegano?
    </button>
  </div>
);

export default Action;