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
        const random = countries[Math.floor(Math.random() * countries.length)];
        const randomOpt1 = countries[Math.floor(Math.random()* countries.length)];
        const randomOpt2 = countries[Math.floor(Math.random()* countries.length)];
        const randomOpt3 = countries[Math.floor(Math.random()* countries.length)];
        const randomOptions = [random, randomOpt1, randomOpt2, randomOpt3];

        setRandomOptions(randomOptions);
        setRandomCountry(random);
        setBgColor({backgroundColor: 'white'});
    }

    useEffect(() => {
        getRandomCountries();
    }, [countries]);

    function checkCorrectAnswer(e) {
        e.preventDefault();

        const winCountry = randomCountry.name;
        const userGuess = e.target.value;
        if (winCountry === userGuess) {
            setGoodGuess(goodGuess + 1);
            setBgColor({backgroundColor: '#81c784'});
            setIsClicked(true);
            setCountries(countries);
        } else {
            setBgColor({backgroundColor: '#FF8A65'});
            setIsClicked(false);
        }

        setTimeout(() => {
            setQuestions(questions + 1);
        }, 2000);
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
                            isClicked={isClicked}
                            randomOptions={randomOptions}
                            randomCountry={randomCountry}
                            handleNext={handleNext}
                        />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App