import React, {Component} from 'react';
import Image from '../img/undraw_adventure_4hum 1.svg';
import {Link} from 'react-router-dom';

class Country extends Component {
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
        this.getRandomCountry = this.getRandomCountry.bind(this);
        this.checkWin = this.checkWin.bind(this);
    }

    componentDidMount() {
        const apiUrl = "https://restcountries.eu/rest/v2/all";
        fetch(apiUrl)
        .then(data => data.json())
        .then(countries => this.setState({countries}))
        .then(this.getRandomCountry)
    }

    getRandomCountry() {
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

    checkWin(e) {
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
            this.getRandomCountry();
            this.setState({
                userIsWin: '',
                disableFieldset: false,
                bgColor: {backgroundColor: 'white'}
        })
        }, 2000)

    }

render() {
    return (
        <>
            <div className="main">
                <div>
                    <img className="image" src={Image} alt={Image} />
                </div>
                <div>
                    <button className="random" onClick={this.getRandomCountry} hidden>Random</button>
                    <div>
                        <img src={this.state.randomCountry.flag} alt="Country flag" />
                    </div>
                    <div>
                        <h3>
                            {this.state.question[Math.floor(Math.random() * this.state.question.length)]}
                        </h3>
                    </div>
                    <h2>
                        {this.state.userIsWin === 'Win' ? `You got ${this.state.goodGuess} correct answer ` : ''}
                    </h2>
                </div>
                <fieldset disabled={this.state.disableFieldset}>
                    <form onClick={e => this.checkWin(e)}>
                        <button 
                            style={this.state.bgColor}
                            className={`buttons ${this.state.goodGuess ? 'green' : 'red'}`} value={this.state.randomOptions[0]}>{this.state.randomOptions[0]}</button>
                        <button 
                            style={this.state.bgColor}
                            className={`buttons ${this.state.goodGuess ? 'green' : 'red'}`} value={this.state.randomOptions[1]}>{this.state.randomOptions[1]}</button>
                        <button 
                            style={this.state.bgColor}
                            className={`buttons ${this.state.goodGuess ? 'green' : 'red'}`} value={this.state.randomOptions[2]}>{this.state.randomOptions[2]}</button>
                        <button 
                            style={this.state.bgColor}
                            className={`buttons ${this.state.goodGuess ? 'green' : 'red'}`} value={this.state.randomOptions[3]}>{this.state.randomOptions[3]}</button>
                    </form>
                </fieldset>
                <div>
                    <Link to="/result">
                        <button type="button" className="next">
                            Next
                        </button>
                    </Link>
                </div> 
            </div>
        </>
    )
}
}

export default Country;