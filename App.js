import React, { Component } from 'react';
import Country from './Components/GetRandomCountry';
import Result from './Components/Result';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            randomCountry: {},
            randomOptions: [],
            userIsWin: '',
            disableFieldset: false,
            goodGuess: 0,
            bgColor: {backgroundColor: 'white'},
            question: [
                'Which country does this flag belong to ?',
                ` is the capital of ?`
            ]
        }
        this.getRandomCountries = this.getRandomCountries.bind(this);
        this.checkCorrectAnswer = this.checkCorrectAnswer.bind(this);
    }

    componentDidMount() {
        const apiUrl = "https://restcountries.eu/rest/v2/all";
        fetch(apiUrl)
        .then(data => data.json())
        .then(countries => this.setState({countries}))
        .then(this.getRandomCountries)
    }

    getRandomCountries() {
        const random = this.state.countries[Math.floor(Math.random() *this.state.countries.length)];
        const randomOpt1 = this.state.countries[Math.floor(Math.random()* this.state.countries.length)];
        const randomOpt2 = this.state.countries[Math.floor(Math.random()* this.state.countries.length)];
        const randomOpt3 = this.state.countries[Math.floor(Math.random()* this.state.countries.length)];
        const randomOptions = [random.name, randomOpt1.name, randomOpt2.name, randomOpt3.name];
        randomOptions.sort(() => { return 0.5 - Math.random() });

        this.setState({
            randomCountry: random,
            randomOptions: randomOptions,
            userIsWin: '',
            disableFieldset: false,
            question: [
                'Which country does this flag belong to ?',
                `${this.state.randomCountry.capital} is the capital of ?`
            ]
        })
    }

    checkCorrectAnswer(e) {
        this.setState({
            disableFieldset: true
        })
        const winCountry = this.state.randomCountry.name;
        const userGuess = e.target.value;
        if (winCountry === userGuess) {
            this.setState({
                userIsWin: 'Win',
                goodGuess: this.state.goodGuess + 1,
                bgColor: {backgroundColor: '#81C784'}
            })
        } else {
            this.setState({
                userIsWin: 'Lose',
                bgColor: {backgroundColor: '#FF8A65'}
            })
        }

        setTimeout(()=>{
            // this.getRandomCountries();
            this.setState({
                userIsWin: '',
                disableFieldset: false,
                bgColor: {backgroundColor: 'white'}
        })
        }, 3000)

    }

    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/result">
                            <Result 
                                goodGuess={this.state.goodGuess}
                            />
                        </Route>
                        <Route path="/">
                            <Country 
                                getRandomCountries={this.getRandomCountries}
                                checkCorrectAnswer={this.checkCorrectAnswer}
                                countries={this.state.countries}
                                question={this.state.question}
                                bgColor={this.state.bgColor}
                                goodGuess={this.state.goodGuess}
                                disableFieldset={this.state.disableFieldset}
                                randomOptions={this.state.randomOptions}
                                randomCountry={this.state.randomCountry}
                            />
                        </Route>
                    </Switch>
                </Router>
            </>
        )
    }
}

export default App