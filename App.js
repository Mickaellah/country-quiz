import React, {useEffect, useState } from 'react';
import Country from './Components/GetRandomCountry';
import Result from './Components/Result';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

function App() {
    const [ countries, setCountries ] = useState([]);
    const [ randomCountry, setRandomCountry ] = useState({});
    const [ randomOptions, setRandomOptions ] = useState([]);
    const [ userIsWin, setUserWin ] = useState(false);
    const [ disableFieldset, setDisableFieldset ] = useState(false);
    const [ goodGuess, setGoodGuess ] = useState(0);
    const [ bgColor, setBgColor ] = useState({backgroundColor: 'white'});
    const [ questions, setQuestions ] = useState(0);
    const [ isClicked, setIsClicked ] = useState(false);

    const apiUrl = "https://restcountries.eu/rest/v2/all";

    async function fetchCountries() {
        try {
            const res = await fetch(apiUrl);
            const data = await res.json();

            setCountries(data);
            setRandomCountry(data);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        fetchCountries();
    }, []);

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
    }

    function checkCorrectAnswer(e) {
        e.preventDefault();
        setQuestions(questions + 1);

        const winCountry = randomCountry.name;
        const userGuess = e.target.value;
        if (winCountry === userGuess) {
            setUserWin('');
            setGoodGuess(goodGuess + 1);
            setBgColor({backgroundColor: '#81c784'});
            setIsClicked(false);
            setCountries(countries);
            setDisableFieldset(true);
        } else {
            setUserWin('Lose');
            setBgColor({backgroundColor: '#FF8A65'});
            setIsClicked(true);
        }
    }

    function handleClick() {
        setBgColor({backgroundColor: 'white'});
    }

    const handleNext = () => {
        const winCountry = randomCountry.name;
        const userGuess = e.target.value;

        if (winCountry === userGuess) {
            setIsClicked(false);
        } else {
            setIsClicked(true);
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
                            handleClick={handleClick}
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
                            handleNext={handleNext}
                        />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App