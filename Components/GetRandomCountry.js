// import React, {Component} from 'react';

// class Capital extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             countries: [],
//             randomCountry: {},
//             randomOptions: [],
//             userIsWin: '',
//             disableFieldset: false,
//             goodGuess: 0,
//             bgColor: {backgroundColor: 'white'}
//         }
//         this.getRandomCountry = this.getRandomCountry.bind(this);
//         this.checkWin = this.checkWin.bind(this);
//     }

//     componentDidMount() {
//         const apiUrl = "https://restcountries.eu/rest/v2/all";
//         fetch(apiUrl)
//         .then(data => data.json())
//         .then(countries => this.setState({countries}))
//         .then(this.getRandomCountry)
//     }
    
//     getRandomCountry() {
//         const random = this.state.countries[Math.floor(Math.random()*this.state.countries.length)];
//         const randomOpt1 = this.state.countries[Math.floor(Math.random()*this.state.countries.length)];
//         const randomOpt2 = this.state.countries[Math.floor(Math.random()*this.state.countries.length)];
//         const randomOpt3 = this.state.countries[Math.floor(Math.random()*this.state.countries.length)];
//         const randomOptions = [random.name, randomOpt1.name, randomOpt2.name, randomOpt3.name];
//         randomOptions.sort(() => { return 0.5 - Math.random() });
//         this.setState({
//             randomCountry: random,
//             randomOptions: randomOptions,
//             userIsWin: '',
//             disableFieldset: false
//         })
//     }

//     checkWin(e) {
//         this.setState({
//             disableFieldset: true
//         })
//         const winCountry = this.state.randomCountry.name;
//         const userGuess = e.target.value;
//         if (winCountry === userGuess) {
//             this.setState({
//                 userIsWin: 'Win',
//                 goodGuess: this.state.goodGuess + 1,
//                 bgColor: {backgroundColor: '#81C784'}
//             })
//         } else {
//             this.setState({
//                 userIsWin: 'Lose',
//                 bgColor: {backgroundColor: '#FF8A65'}
//             })
//         }
//         setTimeout(()=>{
//             this.getRandomCountry();
//             this.setState({
//                 userIsWin: '',
//                 disableFieldset: false,
//                 bgColor: {backgroundColor: 'white'}
//         })
//         console.log(e.target)
//     }, 2000)

// }

// render() {
//     return (
//         <div className="main">
//             <div className="wrapper">
//                 <button className="rnd mui-btn mui-btn--raised" onClick={this.getRandomCountry}>Random</button>
//                 <div className="img-container">
//                     <h3>{this.state.randomCountry.name} is the capital of?</h3>
//                 </div>
//                 <h2>{this.state.userIsWin === 'Win' ? 'You guess right! ' : ''}
//                     {this.state.userIsWin === 'Lose' ? 'You guess wrong. ' : ''} 
//                     Score:{this.state.goodGuess}</h2>
//             </div>
//             <fieldset disabled={this.state.disableFieldset}>
//                 <form onClick={e => this.checkWin(e)}>
//                     <button style={this.state.bgColor} className="buttons" value={this.state.randomOptions[0]}>{this.state.randomOptions[0]}</button>
//                     <button style={this.state.bgColor} className="buttons" value={this.state.randomOptions[1]}>{this.state.randomOptions[1]}</button>
//                     <button style={this.state.bgColor} className="buttons" value={this.state.randomOptions[2]}>{this.state.randomOptions[2]}</button>
//                     <button style={this.state.bgColor} className="buttons" value={this.state.randomOptions[3]}>{this.state.randomOptions[3]}</button>
//                 </form>
//             </fieldset>
//         </div>
//     )
// }
// }

// export default Capital