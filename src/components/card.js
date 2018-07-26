import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

<<<<<<< HEAD
   constructor() {
       super()

       this.state = {
           color: '',
           pluralNoun: '',
           adjectiveOne: '',
           celebOne: ''
       }

       this.handleInputChange = this.handleInputChange.bind(this);
   }

   handleInputChange(event) {
       this.setState({ [event.target.name]: event.target.value })
       console.log(this.state);
   }

   render() {
       return (
           <div className="card">
               <h1>{this.state.color}</h1>
               { Input('Color', this.state.color, this.handleInputChange, 'color')}
               { Input('Plural Noun', this.state.pluralNoun, this.handleInputChange, 'pluralNoun') }
               { Input('Adjective', this.state.adjective, this.handleInputChange, 'adjectiveOne')}
               { Input('Celebrity', this.state.celebOne, this.handleInputChange, 'celebOne') }
           </div>
       )
   }
=======
    constructor() {
        super()

        this.state = {
            color: '',
            pluralNoun: '',
            adjectiveOne: '',
            celebOne: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    } 

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state);
    }

    render() {
        return (
            <div className="card">
                <h1>{this.state.color}</h1>
                { Input('Color', this.state.color, this.handleInputChange, 'color')}
                { Input('Plural Noun', this.state.pluralNoun, this.handleInputChange, 'pluralNoun') }
                { Input('Adjective', this.state.adjective, this.handleInputChange, 'adjectiveOne')}
                { Input('Celebrity', this.state.celebOne, this.handleInputChange, 'celebOne') }
            </div>
        )
    }
>>>>>>> e84d636eaab4b2a5853edf40b4c702f69301c47a
}

export default Card;
