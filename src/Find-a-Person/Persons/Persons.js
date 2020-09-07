import React, {Component} from 'react';
import {Card, Spinner} from "react-bootstrap";

import './style/persons.css';

export default class Persons extends Component {
    render() {
        const {persons, loading} = this.props;

        if (loading) {
            return <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        }

        if (!persons) {
            return <h2>Can't find data(persons)</h2>
        }

        return (
            <div>
                {persons.map((person, i) => (
                    <Card key={`person ${i}`} style={{width: '350px'}} className="col-lg-10">
                        <Card.Img variant="top" src={person.picture.large} alt="img"/>
                        <Card.Body>
                            <Card.Title>{person.name.first} {person.name.last}</Card.Title>
                            <Card.Text><span>Age:</span> {person.dob.age}</Card.Text>
                            <Card.Text><span>Gender:</span> {person.gender}</Card.Text>
                            <Card.Text><span>Email:</span> {person.email}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        )
    }
}