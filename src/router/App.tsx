import { Box } from '@material-ui/core';
import MMain from 'pages/Main/mobile';
import Main from 'pages/Main/pc';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { Route, Switch, useHistory } from 'react-router-dom';

const App: React.FC = () => {
  const history = useHistory();
  return (
    <Box>
      {isMobile ? (
        <Switch>
          <Route exact path="/" component={MMain} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      )}
    </Box>
  );
};

export default App;
