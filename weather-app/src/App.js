import React from 'react';
import { Grid, Row, Col} from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

import './App.css';

const cities = [
  'Madrid,es',
  'Bogota,co',
  'Mexico,mx',
  'Moscow,ru',
]

const App = (props) => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
          Weather App
          </Typography>
        </Toolbar>

      </AppBar>

      <Grid fluid className="App">
        <Row>
          <Col xs>
            <List>
              <LocationListContainer cities={cities}/>
            </List>
          </Col>
          <Col xs>
            <Paper>
              <div className="details">
                <ForecastExtendedContainer/>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    </React.Fragment>
  );
}

export default App;
