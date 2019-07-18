
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


let createPost = function(post,tagid) {
	return fetch(`/taggedpost/${tagid}`, {
		body: JSON.stringify(post,tagid),
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




////////tags


// let createTag = function(tag) {
// 	return fetch(`/newtagname/${tag}`, {
// 		body: JSON.stringify(tag),
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		method: "POST"
// 	})
// 		.then((resp) => {
// 			let json = resp.json()
// 			console.log(json);
// 			return json
// 		})
// }
//
// export  {
// 	createTag
// }
