import React from 'react';
import Cards from './components/Cards';
// import Chart from './components/Chart';
// import StatePicker from './components/StatePicker';
import { fetchData } from './api';
import './App.css';

class App extends React.Component {

  state = {
    data : {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({data : fetchedData});
  }

  render() {

    const { data } = this.state;

    return(
      <div>
        <h1 className = "app__header">India Covid-19 Tracker</h1>
        <Cards data = {data} />
      </div>
    )
  }
}

export default App;
