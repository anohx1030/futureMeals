import React, { Component } from 'react';
import axios from 'axios';

class SavedRecipe extends Component {

  constructor(props) {
    super(props);
    // this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  // deleteRecipe(e) {
  //   console.log(this.props.recipedata);
  //   axios.post('/delete', {
  //     day: this.props.day,
  //     username: this.props.username,
  //     recipe: this.props.recipedata,
  //     hello : 'world'
  //   })
  //     .then(response => {
  //       console.log(response.data);
  //     });
  // }

  render() {

    const ingredients = this.props.recipeData.ingredientLines.map(ing => {
      return <li>{ing}</li>;
    })
    // console.log('INGREDIENTS ---->', Array.isArray(ingredients))

    return (
      <div>
        <a href={this.props.recipeData.url}><img src={this.props.recipeData.image} /></a>
        <h3>{this.props.recipeData.label}</h3>
        <ul>{ingredients}</ul>
        <p>Yield: {this.props.recipeData.yield}</p>

        <Link to="/profile" onClick={this.deleteRecipe} >Delete</Link>
      </div>
    )
  }
}

module.exports = SavedRecipe;