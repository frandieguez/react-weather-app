import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';
import { Grid, Row, Col} from 'react-flexbox-grid';
import { Typography, AppBar, Toolbar, Paper } from '@material-ui/core';
import ForecastExtended from './components/ForecastExtended';
import { CircularProgress } from '@material-ui/core'

const cities = [
  'Madrid,ES',
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
        <AppBar position="sticky">
          <Toolbar>
            <Typography>Weather App</Typography>
          </Toolbar>
        </AppBar>

        <Grid fluid className="App">
          <Row>
            <Col xs={12} md={6}>
              <Paper>
                <LocationList
                  cities={ cities }
                  onSelectedLocation={this.handleSelectionLocation}>
                </LocationList>
              </Paper>
            </Col>
            <Col xs={12} md={6}>
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
