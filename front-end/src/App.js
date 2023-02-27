import React from 'react';
import MyComponent from './MyComponent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">PMU Control</Typography>
        </Toolbar>
      </AppBar>
      <MyComponent />
    </div>
  );
}

export default App;
