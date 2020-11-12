import React, {Component} from 'react';
import Image from '../img/undraw_adventure_4hum 1.svg';
import {Link} from 'react-router-dom';

class Country extends Component {
    
    render() {
        const filteredQuestion = this.props.question.map((question) => { return question}).filter((question) => question.includes('belong'));

        return (
            <>
                <div className="main">
                    <div>
                        <img className="image" src={Image} alt={Image} />
                    </div>
                    <div>
                        <div>
                            {filteredQuestion
                                ? <img src={this.props.randomCountry.flag} alt="Country flag" /> 
                                : ''
                            }
                        </div>
                        <div>
                            <h3>
                                {this.props.question[Math.floor(Math.random() * this.props.question.length)]}
                            </h3>
                        </div>
                    </div>
                    <fieldset disabled={this.props.disableFieldset}>
                        <form onClick={e => this.props.checkCorrectAnswer(e)}>
                            <button 
                                style={this.props.bgColor}
                                className="buttons" value={this.props.randomOptions[0]}><span>A</span> <p>{this.props.randomOptions[0]}</p>
                            </button>
                            <button 
                                style={this.props.bgColor}
                                className="buttons" value={this.props.randomOptions[1]}><span>B</span> <p>{this.props.randomOptions[1]}</p>
                            </button>
                            <button 
                                style={this.props.bgColor}
                                className="buttons" value={this.props.randomOptions[2]}><span>C</span> <p>{this.props.randomOptions[2]}</p>
                            </button>
                            <button 
                                style={this.props.bgColor}
                                className="buttons" value={this.props.randomOptions[3]}><span>D</span> <p>{this.props.randomOptions[3]}</p>
                            </button>
                        </form>
                    </fieldset>
                    <div>
                        {this.props.isThereCorrectAnswer
                            ? <Link exact to='/'>
                                <button 
                                    type="button" 
                                    onClick={this.props.getRandomCountries} 
                                    className="next">
                                    Next
                                </button>
                            </Link>
                            : <Link to="/result">
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
}

export default Country;