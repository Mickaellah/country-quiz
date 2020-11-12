import React, { Component } from 'react';
import Logo from '../img/undraw_adventure_4hum 1.svg';
import Image from '../img/undraw_winners_ao2o 2.svg';
import {Link} from 'react-router-dom';

class Result extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div>
                        <img className="logo" src={Logo} alt="Logo" />
                    </div>
                    <div>
                        <img className="result" src={Image} alt="Result"/>
                    </div>
                    <h2 className='heading'>Results</h2>
                    <div>
                        <p className="score">You got <span className="good_guess">{this.props.goodGuess}</span> correct answers.</p>
                    </div>
                    <Link to='/'>
                        <button type="button" onClick={this.props.getRandomCountries} className="try_again">Try again</button>
                    </Link>
                </div>
            </>
        )
    }
}

export default Result