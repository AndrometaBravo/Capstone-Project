
//////// users fetches/////////////


let getUsers = function() {
	return fetch('/allusers.json')
		.then((resp) => {
			let json = resp.json()
			console.log(json);
			return json
		})
}

export  {
	getUsers
}

let oneUser = function(id) {
	return fetch(`/users/${id}.json`)
		.then((resp) => {
			let json = resp.json()
			console.log(json);
			return json
		})
}

export  {
	oneUser
}

let myFriends = function() {
	return fetch(`/friends.json`)
		.then((resp) => {
			let json = resp.json()
			console.log(json);
			return json
		})
}

export  {
	myFriends
}

let myFriendsIds = function() {
	return fetch(`/friendid.json`)
		.then((resp) => {
			let json = resp.json()
			console.log(json);
			return json
		})
}

export  {
	myFriendsIds
}




///////USERSTATUS FETCHES///////////////

let makeFriends = function(info) {
	return fetch('/userstatus', {
		body: JSON.stringify(info),
		headers: {
			'Content-Type': 'application/json'
		},
		method: "POST"
	})
		.then((resp) => {
			let json = resp.json()
			console.log(json);
			return json
		})
}

export  {
	makeFriends
}

let pendingFriends = function(){
	return fetch('/pendingid')
	.then((resp) => {
		let json = resp.json()
		console.log(json);
		return json
	})
}
export {
	pendingFriends
}

let sentpendingFriends = function(){
	return fetch('/sentpendingid')
	.then((resp) => {
		let json = resp.json()
		console.log(json);
		return json
	})
}
export {
	sentpendingFriends
}
