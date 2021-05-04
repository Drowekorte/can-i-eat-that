import React from 'react';
import 'Recipe.css';
const Recipe =({receiptData}) =>{
    return(

        <div className="card">
    <div className="card-header">
    <img src={receiptData.image} alt =""/>  
<div className="cover"></div>   
<div className="menu"></div>

<div className="name">
    <span className="title"></span> 
</div>
 
</div>
<div className="container">
      <div className="left-section">
        <h3>{receiptData.label}</h3>
        <p>{receiptData.ingredientLines}</p>
        <button className="detailsBtn" >More Details</button>
      </div>
      <div className="right-section">
      <button className="btn" onClick={addFavorite}>
                <span role="img" aria-label="heart" >❤️</span> Add to Favorites
      </button>
        </div>
      </div>
  </div>


    );
};


export default Recipe;
