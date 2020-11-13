import React from 'react';
import Image from '../img/undraw_adventure_4hum 1.svg';
import {Link} from 'react-router-dom';

function Country({randomCountry, randomOptions,questions, disableFieldset, checkCorrectAnswer, bgColor, getRandomCountries, goodGuess, handleNext}) {
    return (
        <>
            <div className="main">
                <button className="random" type='button' onClick={e => getRandomCountries(e)}>Random</button>
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
                            onClick={checkCorrectAnswer()} 
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



// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// function QuizData() {
//     const [countries, setCountries] = useState([])
//     const [randomCountry, setRandomCountry] = useState({})
//     const [questionNum, setQuestionNum] = useState(0);
//     const [randomOptions, setRandomOptions] = useState([])
//     const [isUserWin, setIsUserWin] = useState('')
//     const [bgColor, setBgColor] = useState('white')
//     const [score, setScore] = useState(0)
//     const [isClicked, setIsClicked] = useState(false)
//     const getData = async () => {
//         const apiUrl = "https://restcountries.eu/rest/v2/all";
//         try {
//             const res = await fetch(apiUrl);
//             const data = await res.json();
//             setCountries(data);
//             getRandomCountry(data)
//         } catch (e) {
//             console.error(e);
//         }
//     }
//     useEffect(() => {
//         getData()
//     }, [questionNum])
//     function getRandomCountry(randomCountry) {
//         const random = randomCountry[Math.floor(Math.random() * randomCountry.length)];
//         console.log(random);
//         const randomOpt1 = randomCountry[Math.floor(Math.random() * randomCountry.length)];
//         const randomOpt2 = randomCountry[Math.floor(Math.random() * randomCountry.length)];
//         const randomOpt3 = randomCountry[Math.floor(Math.random() * randomCountry.length)];
//         const randomOption = [random, randomOpt1, randomOpt2, randomOpt3];
//         randomOption.sort(() => { return 0.5 - Math.random() });
//         setRandomCountry(random)
//         setRandomOptions(randomOption)
//     }
//     function handleClick(e) {
//         e.preventDefault()
//         if (e.target.value === randomCountry.name) {
//             console.log(e.target);
//             setIsUserWin({
//                 score: score + 1,
//                 isUserWin: true,
//                 bgColor: { backgroundColor: '#81C784' }
//             })
//             setIsClicked(true)
//         } else {
//             setIsUserWin({
//                 isUserWin: 'Lose',
//                 bgColor: { backgroundColor: '#FF8A65' }
//             })
//             setIsClicked(true)
//         }
//     }
//     const handleNext = () => {
//         if (!isClicked) {
//             setIsClicked(false);
//             setQuestionNum(questionNum + 1);
//             setScore(score + 1)
//         } else {
//             setScore(0)
//         }
//     }
//     return (
//         <div className="Quiz-card" >
//             <div className="question-component">
//                 {questionNum % 2 === 0 ?
//                     (
//                         <div className="question-text">
//                             <img
//                                 className='flag'
//                                 src={randomCountry.flag}
//                                 alt="flag"
//                             />
//                             <h3 className="question">Which country does this flag belong to?</h3>
//                         </div>
//                     ) : (
//                         <h3 className="question">
//                             {randomCountry.capital} is the capital of
//                         </h3>
//                     )}
//             </div>
//             <form>
//                 {randomOptions.map(option =>
//                     <div key={option.numericCode} className='answer-content'>
//                         <button onClick={handleClick} className="options" value={option.name}>{option.name}</button>
//                     </div>
//                 )}
//                 < button onClick={handleNext} className='next-button'>
//                     <Link to="/component/QuizResult">Next</Link></button >
//             </form>
//         </div >
//     )
// }
// export default QuizData