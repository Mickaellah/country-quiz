import React from 'react';
import Image from '../img/undraw_winners_ao2o 2.svg';
import {Link} from 'react-router-dom';

function Result({ goodGuess, handleTryAgain}) {
    return (
        <>
            <div className='container'>
                <div>
                    <img className="result" src={Image} alt="Result"/>
                </div>
                <h2 className='heading'>Results</h2>
                <div>
                    <p 
                        className="score">
                            You got 
                            <span className="good_guess">{goodGuess}</span>
                            correct answers.
                    </p>
                </div>
                <Link to='/'>
                    <button 
                        type="button" 
                        onClick={handleTryAgain} 
                        className="try_again"
                    >Try again</button>
                </Link>
            </div>
        </>
    )
}

export default Result