import React, {Component} from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'

class App extends Component {  //create class to use state
    constructor(){ //constructor
        super() // call super on Component class
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }
    render(){
        return(
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <SearchBox/>
                <CardList robots={this.state.robots}/>
            </div>
        )
    }
}
export default App