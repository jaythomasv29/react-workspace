import React, {Component} from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'
import './App.css';

class App extends Component {  //create class to use state
    constructor(){ //constructor
        super() // call super on Component class
        this.state = {  //something that can change and effect our app - STATE lives in parent component and passes to smaller components
            robots: [],  //App component has TWO STATES 'robots' and searchfield'
            searchfield: '',
        }
    }

    onSearchChange = (event) => {  //your own methods must be in arrow functions
        this.setState({ searchfield: event.target.value })  //set state using .setState to change searchfield
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot => {
                return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}
export default App