import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';
import { Grid, Row, Col} from 'react-flexbox-grid';

import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Paper } from '@material-ui/core';

import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Madrid,es',
  'Bogota,co',
  'Mexico,mx',
  'Moscow,ru',
]

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      city: ''
    }
  }

  handleSelectionLocation = (city) => {
    this.setState({city})
  }

  render() {
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
                <LocationList
                  cities={ cities }
                  onSelectedLocation={this.handleSelectionLocation}>
                </LocationList>
              </List>
            </Col>
            <Col xs>
              <Paper>
                <div className="details">
                {
                  !this.state.city ?
                  <div>Seleccione una ciudad de la derecha</div>
                  :
                  <ForecastExtended city={this.state.city} />
                }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
