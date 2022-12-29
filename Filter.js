import React from 'react';
import PropTypes from 'prop-types';
constructor(props){
    super(props);
    this.state = {
      films: [],
      page: 1,
      loading: false,
      genres: [],
      currentCategory: null
    };
    this.getFilms = this.getFilms.bind(this)
    this.btnClickPrev = this.btnClickPrev.bind(this)
    this.btnClickNext = this.btnClickNext.bind(this)
  }
  getFilms(categoryId= ''){
    const { page } = this.state
    this.setState({
      films: [],
      loading: true,
    })
    Axios.get(`${baseUrlDiscover}&page=${page}&with_genres=${categoryId}`)
    .then((response) => {
      this.setState({
        films: response.data.results,
        loading: false
      })
    })
    .catch(error => {
      console.log(error)
      this.setState({
        films: [],
        loading: false
      })
    })
  }
  updateCurrentCategory = (id) => {
    this.setState({currentCategory: id})
  }