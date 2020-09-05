import React from "react";

export default class FetchRandomUser extends React.Component {
    state = {
        loading: true,
        persons: null
    };

    async componentDidMount() {
        const url = "https://randomuser.me/api/?results=200";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({persons: data.results, loading: false});
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.persons) {
            return <div>didn't get a person</div>;
        }

        return (
            <div>
                {this.state.persons.map( (person, i) => (
                    <div key={`person ${i}`}>
                        <div>{person.name.title}</div>
                        <div>{person.name.first}</div>
                        <div>{person.name.last}</div>
                        <div>{person.gender}</div>
                        <img src={person.picture.large}/>
                    </div>
                ))}

            </div>
        );
    }
}
