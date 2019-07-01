import React from 'react';

const Action = (props) => (
  <div>
    <button 
      className="button"
      onClick={props.handlePick}
      >
       Porquê ser vegano?
    </button>
  </div>
);

export default Action;