import React from 'react'
import './App.css';
import './styles/global.css';
import Box from "./components/Box";
import 'bootstrap/dist/css/bootstrap.min.css';

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000
    }

    this.onHeartChange = this.onHeartChange.bind(this)
    this.onTempChange = this.onTempChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.calculateWater = this.calculateWater.bind(this)
  }

  onHeartChange(e) {
    this.setState({ heart: e.target.value })
  }

  onTempChange(e) {
    this.setState({ temperature: e.target.value })
  }

  onStepsChange(e) {
    this.setState({ steps: e.target.value })
  }

  calculateWater() {
    let initialWater = 1.5;
    let c = this.state.heart - 120;
    let d = 0.0008;
    let f = this.state.steps - 10000;
    let g = 0.00002;
    let h = this.state.temperature - 20;
    let i = 0.02;

    if (this.state.heart > 120) {
      this.setState({ water: initialWater + (c * d) })
    } else if (this.state.steps > 10000) {
      this.setState({ water: initialWater + (f * g) })
    } else if (this.state.temperature > 20) {
      this.setState({ water: initialWater + (h * i) })
    } else {
      this.setState({ water: initialWater })
    }
  }

  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" />
          {/* Steps */}
          <Box icon="directions_walk" color="black" value={this.state.steps} unit="steps" min={stepsMin} max={stepsMax} onChange={this.onStepsChange} calculate={this.calculateWater} />
          {/* Heart */}
          <Box icon="favorite" color="red" value={this.state.heart} unit="bpm" min={heartMin} max={heartMax} onChange={this.onHeartChange} calculate={this.calculateWater} />
          {/* Temperature */}
          <Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit="°C" min={tempMin} max={tempMax} onChange={this.onTempChange} calculate={this.calculateWater} />
          <p> Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <p>Steps : {stepsMin}</p>
        </div>
      </div>
    );
  }
}
export default App;