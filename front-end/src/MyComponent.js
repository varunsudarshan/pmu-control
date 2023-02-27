import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

function MyComponent() {
  const [data, setData] = useState(null);

  const makeApiCall = () => {
    fetch('http://127.0.0.1:5025/api/data')
    // fetch('http://worldtimeapi.org/api/timezone/America/New_York')
      .then(
        response => response.json()
        )
      .then(data => {
        setData(data);
      });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button variant="contained" color="primary" onClick={makeApiCall}>
        Make API Call
      </Button>
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
