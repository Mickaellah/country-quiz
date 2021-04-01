import React from 'react';
import Image from '../img/undraw_adventure_4hum 1.svg';
import {Link} from 'react-router-dom';

function Country({countries, randomCountry, randomOptions,questions, checkCorrectAnswer, isCorrect, isClicked, isDisabled, handleNextBttn, isLoading}, props) {
    const {reference} = props
    const sortedCountries = randomOptions.sort(function (a, b) {
        return a?.name.localeCompare(b?.name);
    });

    return (
        <>
            {isLoading && <h2>Loading...</h2>}
            {!isLoading && countries && (
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
                  {sortedCountries.map((randomOption, index) => {
                      return (
                          <button 
                              key={index}
                              ref={randomOption?.name == countries?.name ? reference : null}
                              onClick={e => checkCorrectAnswer(e)}
                              className="buttons" 
                              disabled={isDisabled}
                              value={randomOption?.name}
                              id={randomOption?.name}
                          >
                              {randomOption?.name}
                          </button>
                      )
                  }
                  )}
              </form>
              <div className="nextbbtn__container">
                  {isClicked
                      ? 
                      (isCorrect
                          ? 
                          <button 
                              type="button" 
                              onClick={handleNextBttn} 
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
            )}
        </>
    )
}

export default Country;