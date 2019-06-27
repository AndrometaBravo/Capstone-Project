let getLocation = function(){
  return fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDwjy2BCmYxnLmCtH1QZtH4L88YErTeK6M',{
    method: 'POST'
  })
  .then(function(response) {
    let json = response.json()
    return json
  })
}
export{
  getLocation
}

let getCloseUsers = function(){
  return fetch('/onlineusers',{
    method: 'GET'
  })
  .then(function(response) {
    let json = response.json()
    return json

  })
}
export{
  getCloseUsers
}
