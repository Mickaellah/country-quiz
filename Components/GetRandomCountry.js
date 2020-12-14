import React from 'react';
import Image from '../img/undraw_adventure_4hum 1.svg';
import {Link} from 'react-router-dom';

function Country({randomCountry, randomOptions,questions, disableFieldset, checkCorrectAnswer, bgColor, getRandomCountries, goodGuess, handleNext}) {
    return (
        <>
        <button className="random" type='button' onClick={e => getRandomCountries(e)}>Random</button>
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
                                        src={randomCountry.flag} 
                                        alt="Country flag"
                                     />
                                    <h3>Which country does this flag belong to?</h3>
                                </div> 
                                : 
                                <h3>{randomCountry.capital} is the capital of?</h3>
                        }
                    </div>
                </div>
                <fieldset disabled={disableFieldset}>
                    <form>
                        {randomOptions.map((randomOption) => 
                            <button 
                                style={bgColor}
                                key={randomOption.population}
                                onClick={e => checkCorrectAnswer(e)}
                                className="buttons" 
                                value={randomOption.name}
                                id={randomOption.name}
                            >
                                {randomOption.name}
                            </button>
                        )}
                    </form>
                </fieldset>
                <div>
                    {goodGuess 
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
                        }
                </div> 
            </div>
        </>
    )
}

export default Country;