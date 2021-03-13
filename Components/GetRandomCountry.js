import React from 'react';
import Image from '../img/undraw_adventure_4hum 1.svg';
import {Link} from 'react-router-dom';

function Country({randomCountry, randomOptions,questions, getRandomCountries, checkCorrectAnswer, isCorrect, isClicked}) {
    const alphabetics = ['A', 'B', 'C', 'D'];
    return (
        <>
            <div className="main">
                <div>
                    <img className="image" src={Image} alt={Image} />
                </div>
                <div>
                    <div>
                        {
                            questions % 2 === 0
                                ? 
                                <div>
                                    <img 
                                        className='flag'
                                        src={randomCountry?.flag} 
                                        alt="Country flag"
                                     />
                                    <h3>Which country does this flag belong to?</h3>
                                </div> 
                                : 
                                <h3>{randomCountry?.capital} is the capital of?</h3>
                        }
                    </div>
                </div>
                <form>
                    {randomOptions.map((randomOption) => 
                        <button 
                            key={randomOption?.alpha2Code}
                            onClick={e => checkCorrectAnswer(e)}
                            className="buttons" 
                            value={randomOption?.name}
                            id={randomOption?.name}
                        >
                            {randomOption?.name}
                        </button>
                    )}
                </form>
                <div>
                    {isClicked 
                        ? (isCorrect 
                            ? 
                            <button 
                                type="button" 
                                onClick={getRandomCountries} 
                                className="next">
                                Next
                            </button>
                            :
                            <Link to="/result">
                                <button 
                                    type="button"
                                    className="next">
                                    Next
                                </button>
                            </Link>
                        ) 
                        : ""
                    }
                </div> 
            </div>
        </>
    )
}

export default Country;