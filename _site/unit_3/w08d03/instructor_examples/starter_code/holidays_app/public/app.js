const app = angular.module('HolidaysApp', [])

app.controller('MainController', ['$http', function ($http) {
  this.h5 = 'Holidays! Celeberate!'
  // store all the input values in an object
  this.createForm = {}
  this.holidays = []
  this.holiday = ''

  this.chooseOneHoliday = holiday => {
    this.holiday = holiday
  }

  this.createHoliday = () => {
    $http({
      method: 'POST',
      url: '/holidays',
      data: this.createForm
    }).then(response => {
      // updating our table with newly created holiday
      // Matt's way
      // this.getHolidays()
      // Karolin's way
      this.holidays.unshift(response.data)
      // emptying the form
      this.createForm = {}
    }, error => {
      console.log(error)
    })
  }

  this.getHolidays = () => {
    $http({
      method: 'GET',
      url: '/holidays'
    }).then(response => {
      this.holidays = response.data
      this.holiday = this.holidays[0]
    }, error => {
      console.log(error)
    })
  }

  this.deleteHoliday = (id) => {
    // console.log("I'm going to delete you", id)
    $http({
      method: 'DELETE',
      url: '/holidays/' + id
    }).then(response => {
      // on success of delete

      // this.getHolidays() // second database call
      // removeByIndex a number to match the index position of the item we are removing
      // this.holidays is an array of our holiday objects
      // us the findIndex method
      // takes a callback
      // whole object which we name holiday
      // then we compare each holiday object ._id to the id passed in as an argument
      const removeByIndex = this.holidays.findIndex(holiday => holiday._id === id)
      this.holidays.splice(removeByIndex, 1)
    }, error => {
      console.log(error)
    })
  }

  this.updateCelebrated = holiday => {
    holiday.celebrated = !holiday.celebrated
    $http({
      method: 'PUT',
      url: '/holidays/' + holiday._id,
      data: { celebrated: holiday.celebrated }
    }).then(response => {
      console.log(response.data.celebrated)
    }, error => console.log(error))
  }

  // call immediately on page load
  this.getHolidays()

}])
