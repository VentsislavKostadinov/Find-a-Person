import React, { Component } from 'react';
import './style/pagination.css'
import {Pagination } from "react-bootstrap";

export default class PaginationClass extends Component {
    render() {
        const { personsPerPage, totalPersons, paginate, nextPage, prevPage } = this.props;

        const numbersOfPage = [];

        for (let i = 1; i <= Math.ceil(totalPersons / personsPerPage); i++) {
            numbersOfPage.push(i);
        }

        return (
                <Pagination className= "justify-content-center">
                    <Pagination.First />
                    <Pagination.Prev onClick={() => prevPage()}/>
                    {numbersOfPage.map(numbers => (
                        <Pagination.Item onClick={() => paginate(numbers)}>{numbers}</Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => nextPage()}/>
                    <Pagination.Last />
                </Pagination>
        )
    }
}


