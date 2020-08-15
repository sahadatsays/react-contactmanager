import React from 'react';

const TestParams = (props) => {
     const name = props.match.params.name
     return (
          <div>
               <h1 className="display-4">Params {name}</h1>
          </div>
     );
}

export default TestParams;