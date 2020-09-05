import React, {Component} from 'react';
import './App.css';
import Persons from "./Find-a-Person/Persons/Persons";
import Header from "./Find-a-Person/Header/Header";

export default class App extends Component {

    render() {

        return (
            <div>
                <Header/>
               <Persons/>
            </div>
        )
    }

}



