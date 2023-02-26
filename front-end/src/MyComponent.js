import React, { useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  const makeApiCall = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }

  return (
    <div>
      <button onClick={makeApiCall}>Make API Call</button>
      {data && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
