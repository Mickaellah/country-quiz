import React, {Component} from 'react';
import Image from '../img/undraw_adventure_4hum 1.svg';
import {Link} from 'react-router-dom';

class Country extends Component {
    render() {
        return (
            <>
                <div className="main">
                    <div>
                        <img className="image" src={Image} alt={Image} />
                    </div>
                    <div>
                        <button className="random" onClick={this.props.getRandomCountries} hidden>Random</button>
                        <div>
                            <img src={this.props.randomCountry.flag} alt="Country flag" />
                        </div>
                        <div>
                            <h3>
                                {this.props.question[Math.floor(Math.random() * this.props.question.length)]}
                            </h3>
                        </div>
                        <h2>
                            {this.props.userIsWin === 'Win' ? `You got ${this.props.goodGuess} correct answer ` : ''}
                        </h2>
                    </div>
                    <fieldset disabled={this.props.disableFieldset}>
                        <form onClick={e => this.props.checkCorrectAnswer(e)}>
                            <button 
                                style={this.props.bgColor}
                                className={`buttons ${this.props.goodGuess ? 'green' : 'red'}`} value={this.props.randomOptions[0]}>{this.props.randomOptions[0]}</button>
                            <button 
                                style={this.props.bgColor}
                                className={`buttons ${this.props.goodGuess ? 'green' : 'red'}`} value={this.props.randomOptions[1]}>{this.props.randomOptions[1]}</button>
                            <button 
                                style={this.props.bgColor}
                                className={`buttons ${this.props.goodGuess ? 'green' : 'red'}`} value={this.props.randomOptions[2]}>{this.props.randomOptions[2]}</button>
                            <button 
                                style={this.props.bgColor}
                                className={`buttons ${this.props.goodGuess ? 'green' : 'red'}`} value={this.props.randomOptions[3]}>{this.props.randomOptions[3]}</button>
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