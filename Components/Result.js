import React from 'react';
import Image from '../img/undraw_winners_ao2o 2.svg';
import {Link} from 'react-router-dom';

function Result(props) {
    return (
        <>
            <div className='container'>
                <div>
                    <img className="result" src={Image} alt="Result"/>
                </div>
                <h2 className='heading'>Results</h2>
                <div>
                    <p>You got {props.goodGuess} correct answers.</p>
                </div>
                <Link to='/'>
                    <button type="button" className="try_again">Try again</button>
                </Link>
            </div>
        </>
    )
}

export default Result