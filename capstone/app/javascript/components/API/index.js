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

let updatelocation = function(coords) {
	console.log(coords);
	return fetch(`/updatelocation`, {
		body: JSON.stringify(coords),
		headers: {
			'Content-Type': 'application/json'
		},
		method: "PATCH"
	})
		.then((resp) => {
			let json = resp.json()
			console.log(json);
			return json
		})
}

export  {
	updatelocation
}

let getClosePosts = function(){
 return fetch('/onlineposts',{
   method: 'GET'
 })
 .then(function(response) {
   let json = response.json()
   return json
 })
}
export{
 getClosePosts
}

let getAddress = function(){
  return fetch('https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=41.8842,-87.6388&mode=retrieveAddress&app_id=cMIr2JjzkoYTvnLEn57K&app_code=fbM5AKlYS7YHhCnMhmtVhQ',{
    method: 'GET'
  })
  .then(function(response) {
    let json = response.json()
    return json
  })
}
export{
  getAddress
}
