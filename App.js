import React, {useEffect, useState, useRef } from 'react';
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
    const [ isCorrect, setIsCorrect ] = useState(false);
    const [ isClicked, setIsClicked ] = useState(false);

    const reference = useRef();

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
        setQuestions(Math.floor(Math.random() * 5));
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
        const userGuess = e.currentTarget.value;
        document.getElementById(winCountry).style.backgroundColor = '#60BF88';
        setIsClicked(true);
        if (winCountry === userGuess) {
            e.currentTarget.classList.add("rightAnswer");
            setGoodGuess(goodGuess + 1);
            setIsCorrect(true);
            setCountries(countries);
        } else {
            e.currentTarget.classList.add("wrongAnswer")
            e.currentTarget.classList.add("rightAnswer");
            setIsCorrect(false);
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
                            countries={countries}
                            getRandomCountries={getRandomCountries}
                            checkCorrectAnswer={checkCorrectAnswer}
                            questions={questions}
                            bgColor={bgColor}
                            reference={reference}
                            isCorrect={isCorrect}
                            randomOptions={randomOptions}
                            randomCountry={randomCountry}
                            isClicked={isClicked}
                        />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App