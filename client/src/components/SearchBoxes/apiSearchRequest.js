import React, { Component } from "react";
import axios from "axios";
const APIURL = "https://api.edamam.com/search?q=";
const APIKEY = `&app_key=${process.env.EDAMAM_API_KEY}`;
const APIID = `&app_id=${process.env.EDAMAM_API_ID}`;

const maxTime = "&time=30";
const maxIngreds = "&ingr=10";

const fetchRecipes = async (...ingredients) => {
  const mappedIngreds = ingredients
    .map((ingredient, idx) => {
      if (idx < ingredients.length - 1) {
        return ingredient + "+";
      } else {
        return ingredient;
      }
    })
    .join("");

  const url = `${APIURL}${mappedIngreds}${maxIngreds}${maxTime}${APIID}${APIKEY}`;
  const res = await axios.get(url);
  const recipes = res.data;
  console.log(recipes);
  // addToList(recipes);
};

fetchRecipes("zucchini", "broccoli", "carrots");


class ApiApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch("https://api.edamam.com/search")
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }

  render() {
    var { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Loading....</div>;
    }
    else {
      return (
        <div className="Search">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name}
              </li>

            ))};
          </ul>
        </div>
      )
    }
    }
  }

  export { ApiApp };


