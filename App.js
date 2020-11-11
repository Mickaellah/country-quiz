import React from 'react';
import Country from './Components/GetRandomCountry';
import Result from './Components/Result';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';


function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/result">
                        <Result />
                    </Route>
                    <Route path="/">
                        <Country />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App