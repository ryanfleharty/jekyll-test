/* global angular: true */
const app = angular.module('MovieApp', [])

app.controller('MainController', ['$http', function ($http) {
  this.appName = "Gerard Von Schtieffes's MüvieHaüs"
  this.baseURL = 'http://www.omdbapi.com/?'
  this.apikey = 'apikey=' + '98e3fb1f'
  this.query = 't='
  this.movieTitle = ''
  this.searchURL = this.baseURL + this.apikey + '&' + this.query

  this.movies = []

  this.getMovies = () => {
    $http({
      method: 'GET',
      url: this.searchURL + this.movieTitle
    }).then(response => {
      console.log(this.searchURL)
      this.movies = [response.data]
    }, error => console.error(error))
      .catch(err => console.error('Catch:', err))
  }
}]) // closes app.controller
