
let getPosts = function() {

	return fetch('/posts')
		.then((resp) => {

			let json = resp.json()
			console.log(json);
			return json
		})
}

export {
	getPosts
}


let createPost = function(post) {
	console.log(post);
	return fetch('/posts', {
		body: JSON.stringify(post),
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
	createPost
}
