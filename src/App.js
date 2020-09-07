import React, {Component} from 'react';
import './App.css';
import Header from "./Find-a-Person/Header/Header";
import Persons from "./Find-a-Person/Persons/Persons";
import PaginationClass from "./Find-a-Person/Pagination/PaginationClass";

export default class App extends Component {

    state = {
        persons: [],
        loading: true,
        currentPage: 1,
        personsPerPage: 12
    };

   async componentDidMount() {

            const url = "https://randomuser.me/api/?results=200";
            const response = await fetch(url);
            const data = await response.json();
            this.setState({persons: data.results, loading: false});
        };

    render() {

        const {currentPage, personsPerPage, persons, loading} = this.state;

        const lastPage = currentPage * personsPerPage;
        const firstPage = lastPage - personsPerPage;
        const currentPersons = persons.slice(firstPage, lastPage);

        const paginate = pageNum => this.setState({currentPage: pageNum});
        const nextPage = () => this.setState({currentPage: currentPage + 1});
        const prevPage = () => this.setState({currentPage: currentPage - 1});
        return (
            <nav>
                <Header/>
                <div className="container-fluid">
                    <Persons persons={currentPersons} loading={loading}/>
                    <PaginationClass personsPerPage={personsPerPage} totalPersons={persons.length} paginate={paginate}
                                     nextPage={nextPage} prevPage={prevPage}/>
                </div>
            </nav>
        )
    }
}



