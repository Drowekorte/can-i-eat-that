import React, { Component } from "react";
import axios from "axios";

export default {
  signup: function (body) {
    return axios.post("/api/login-signup", body);
  },
  login: function (body) {
    return axios.post("/api/login-signup", body);
  },
  // Gets all posts
  getRecipes: function () {
    return axios.get("/api/recipes");
  },
  // Gets the post with the given id
  getRecipes: function (id) {
    return axios.get("/api/recipes/" + id);
  },
  // Deletes the post with the given id
  deleteRecipes: function (id) {
    return axios.delete("/api/recipes/" + id);
  },
  // Saves a post to the dat API
  saveRecipes: function (recipeData) {
    return axios.recipe("/api/recipes", recipeData);
  },
};
