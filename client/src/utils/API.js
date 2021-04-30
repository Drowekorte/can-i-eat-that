import React, { Component } from "react";
import axios from "axios";
const BASEURL = "https://api.edamam.com/search?";
const APIKEY = "f0da9fcc6e4a8e55ebb56b3d79fe2804";




export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  }
};

