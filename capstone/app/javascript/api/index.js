
let getPosts = function() {

	return fetch('/feed')
		.then((resp) => {

			let json = resp.json()
			console.log(json);
			return json
		})
}

export { getPosts }
