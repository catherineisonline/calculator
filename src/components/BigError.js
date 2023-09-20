import React from 'react';

export const BigError = ({setShowError}) => {
  return (
    <div className="big-error">
      <h1>TADY</h1>
      <h1>VIDÍM</h1>
      <h1>VELKÝ</h1>
      <h1>ŠPATNÝ</h1>
      <h1>ERROR</h1>

      <div style={{paddingTop: '1rem'}}>
        <button onClick={() => setShowError(false)}>Zavřít chybu</button>
      </div>
    </div>
  );
}
