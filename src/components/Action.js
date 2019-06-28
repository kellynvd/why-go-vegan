import React from 'react';

const Action = (props) => (
  <div>
    <button className="app-button"
      onClick={props.handlePick}
      >
       Porquê ser vegano?
    </button>
  </div>
);

export default Action;