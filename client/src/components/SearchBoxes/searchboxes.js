import React, { Component } from "react";
import CheckBox from "./checkboxes";
import "./searchboxes.css";

class SearchBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paramBoxes: [
        { id: 1, name: "", value: "balanced", tooltip: "", isChecked: false },
        { id: 2, value: "high-fiber", isChecked: false },
        { id: 3, value: "high-protein", isChecked: false },
        { id: 4, value: "low-carb", isChecked: false },
        { id: 5, value: "low-fat", isChecked: false },
        { id: 6, value: "low-sodium", isChecked: false },
        { id: 7, value: "alcohol-free", isChecked: false },
        { id: 8, value: "immuno-supportive", isChecked: false },
        { id: 9, value: "celery-free", isChecked: false },
        { id: 10, value: "crustacean-free", isChecked: false },
        { id: 11, value: "dairy-free", isChecked: false },
        { id: 12, value: "egg-free", isChecked: false },
        { id: 13, value: "fish-free", isChecked: false },
        { id: 14, value: "fodmap-free", isChecked: false },
        { id: 15, value: "gluten-free", isChecked: false },
        { id: 16, value: "keto-friendly", isChecked: false },
        { id: 17, value: "kidney-friendly", isChecked: false },
        { id: 18, value: "kosher", isChecked: false },
        { id: 19, value: "low-potassium", isChecked: false },
        { id: 20, value: "lupine-free", isChecked: false },
        { id: 21, value: "mustard-free", isChecked: false },
        { id: 22, value: "low-fat-abs", isChecked: false },
        { id: 23, value: "No-oil-added", isChecked: false },
        { id: 24, value: "low-sugar", isChecked: false },
        { id: 25, value: "paleo", isChecked: false },
        { id: 26, value: "peanut-free", isChecked: false },
        { id: 27, value: "pescatarian", isChecked: false },
        { id: 28, value: "pork-free", isChecked: false },
        { id: 29, value: "red-meat-free", isChecked: false },
        { id: 30, value: "sesame-free", isChecked: false },
        { id: 31, value: "shellfish-free", isChecked: false },
        { id: 32, value: "soy-free", isChecked: false },
        { id: 33, value: "sugar-conscious", isChecked: false },
        { id: 34, value: "tree-nut-free", isChecked: false },
        { id: 35, value: "vegan", isChecked: false },
        { id: 36, value: "vegetarian", isChecked: false },
        { id: 37, value: "wheat-free", isChecked: false },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <h1> Check and Uncheck All Example </h1>
        <input
          type="checkbox"
          onChange={this.handleAllChecked}
          value="checkedall"
        />{" "}
        Check / Uncheck All
        <ul>
          {this.state.paramBoxes.map((paramBoxes, index) => {
            return (
              <CheckBox
                key={index}
                handleCheckChieldElement={this.handleCheckChieldElement}
                {...paramBoxes}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

// Diet	Balanced	balanced	Protein/Fat/Carb values in 15/35/50 ratio
// Diet	High-Fiber	high-fiber	More than 5g fiber per serving
// Diet	High-Protein	high-protein	More than 50% of total calories from proteins
// Diet	Low-Carb	low-carb	Less than 20% of total calories from carbs
// Diet	Low-Fat	low-fat	Less than 15% of total calories from fat
// Diet	Low-Sodium	low-sodium	Less than 140mg Na per serving
// Health	Alcohol-free	alcohol-free	No alcohol used or contained
// Health	Immune-Supportive	immuno-supportive	Recipes which fit a science-based approach to eating to strengthen the immune system
// Health	Celery-free	celery-free	Does not contain celery or derivatives
// Health	Crustcean-free	crustacean-free	Does not contain crustaceans (shrimp, lobster etc.) or derivatives
// Health	Dairy	dairy-free	No dairy; no lactose
// Health	Eggs	egg-free	No eggs or products containing eggs
// Health	Fish	fish-free	No fish or fish derivatives
// Health	FODMAP free	fodmap-free	Does not contain FODMAP foods
// Health	Gluten	gluten-free	No ingredients containing gluten
// Health	Keto	keto-friendly	Maximum 7 grams of net carbs per serving
// Health	Kidney friendly	kidney-friendly	Per serving – phosphorus less than 250 mg AND potassium less than 500 mg AND sodium less than 500 mg
// Health	Kosher	kosher	Contains only ingredients allowed by the kosher diet. However it does not guarantee kosher preparation of the ingredients themselves
// Health	Low potassium	low-potassium	Less than 150mg per serving
// Health	Lupine-free	lupine-free	Does not contain lupine or derivatives
// Health	Mustard-free	mustard-free	Does not contain mustard or derivatives
// Health	n/a	low-fat-abs	Less than 3g of fat per serving
// Health	No oil added	No-oil-added	No oil added except to what is contained in the basic ingredients
// Health	No-sugar	low-sugar	No simple sugars – glucose, dextrose, galactose, fructose, sucrose, lactose, maltose
// Health	Paleo	paleo	Excludes what are perceived to be agricultural products; grains, legumes, dairy products, potatoes, refined salt, refined sugar, and processed oils
// Health	Peanuts	peanut-free	No peanuts or products containing peanuts
// Health	Pescatarian	pescatarian	Does not contain meat or meat based products, can contain dairy and fish
// Health	Pork-free	pork-free	Does not contain pork or derivatives
// Health	Red meat-free	red-meat-free	Does not contain beef, lamb, pork, duck, goose, game, horse, and other types of red meat or products containing red meat.
// Health	Sesame-free	sesame-free	Does not contain sesame seed or derivatives
// Health	Shellfish	shellfish-free	No shellfish or shellfish derivatives
// Health	Soy	soy-free	No soy or products containing soy
// Health	Sugar-conscious	sugar-conscious	Less than 4g of sugar per serving
// Health	Tree Nuts	tree-nut-free	No tree nuts or products containing tree nuts
// Health	Vegan	vegan	No meat, poultry, fish, dairy, eggs or honey
// Health	Vegetarian	vegetarian	No meat, poultry, or fish
// Health	Wheat-free	wheat-free	No wheat, can have gluten though
