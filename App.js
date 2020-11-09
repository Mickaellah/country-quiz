import React, { useEffect, useState } from 'react';

function App() {
    const [ countries, setCountries ] = useState([]);

    console.log(countries);

    async function getCountries() {
        const res = await fetch('https://restcountries.eu/rest/v2/all/');
        const data = await res.json();

        setCountries(data.numericCode);
    }

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <>
            <div>
                {countries.map((country) => 
                    <div key={country.numericCode}>
                        <h3>{country.name}</h3>
                        <p>{country.capital}</p>
                        <img src={country.flag} alt="Flag" />
                    </div>
                )}
            </div>
        </>
    )
}

export default App