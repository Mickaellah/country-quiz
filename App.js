import React, {useEffect, useState } from 'react';
import Country from './Components/GetRandomCountry';
import Result from './Components/Result';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

function App() {
    const [ randomCountry, setRandomCountry ] = useState({});
    const [ randomOptions, setRandomOptions ] = useState([]);
    const [ userIsWin, setUserWin ] = useState('');
    const [ disableFieldset, setDisableFieldset ] = useState(false);
    const [ goodGuess, setGoodGuess ] = useState(0);
    const [ bgColor, setBgColor ] = useState({backgroundColor: 'white'});
    const [ questions, setQuestions ] = useState(0);

    const apiUrl = "https://restcountries.eu/rest/v2/all";

    async function fetchCountries() {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setRandomCountry(data);
    }
    
    useEffect(() => {
        fetchCountries(randomCountry);
    }, [questions]);

    function getRandomCountries() {
        const random = randomCountry[Math.floor(Math.random() *randomCountry.length)];
        const randomOpt1 = randomCountry[Math.floor(Math.random()* randomCountry.length)];
        const randomOpt2 = randomCountry[Math.floor(Math.random()* randomCountry.length)];
        const randomOpt3 = randomCountry[Math.floor(Math.random()* randomCountry.length)];
        const randomOptions = [random, randomOpt1, randomOpt2, randomOpt3];
        randomOptions.sort(() => { return 0.5 - Math.random() });
        console.log(randomOptions);

        setRandomCountry(random);
        setRandomOptions(randomOptions);
        setUserWin('');
        setDisableFieldset(false);
    }

    function checkCorrectAnswer(e) {
        setDisableFieldset(true);

        const winCountry = randomCountry.name;
        const userGuess = e.target.value;
        if (winCountry === userGuess) {
            setUserWin('Win');
            setGoodGuess(goodGuess + 1);
            setBgColor({backgroundColor: '#81c784'});
        } else {
            setUserWin('Lose');
            setBgColor({backgroundColor: '#FF8A65'});
        }

        setTimeout(()=>{
            getRandomCountries();
            setUserWin('');
            setDisableFieldset(false);
            setBgColor({backgroundColor: 'white'});
        }, 500)

    }

    function handleClick(e) {
        if (goodGuess) {
            setBgColor({backgroundColor: '#81c784'});
        } else {
            setBgColor({backgroundColor: '#FF8A65'});
        }
    }

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/result">
                        <Result 
                            goodGuess={goodGuess}
                            getRandomCountries={getRandomCountries}
                        />
                    </Route>
                    <Route path="/">
                        <Country 
                            getRandomCountries={getRandomCountries}
                            checkCorrectAnswer={checkCorrectAnswer}
                            questions={questions}
                            bgColor={bgColor}
                            goodGuess={goodGuess}
                            disableFieldset={disableFieldset}
                            randomOptions={randomOptions}
                            randomCountry={randomCountry}
                            userIsWin={userIsWin}
                            handleClick={handleClick}
                        />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App