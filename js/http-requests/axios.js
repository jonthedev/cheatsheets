axios
	.get('https://swapi.dev/api/planets/')
	.then((res) => {
		//We don't have to parse the JSON!
		console.log(res.data);
	})
	.catch((err) => {
		console.log('IN CATCH CALLBACK!!!');
		console.log(err);
	});

axios
	.get('https://swapi.dev/api/planetss/') //BAD URL!
	.then((res) => {
		//We don't need to check for a 200 status code, because...
		//Axios will reject the promise for us, unlike fetch!
		console.log(res.data);
	})
	.catch((err) => {
		//In this example with a not-found URL, this callback will run...
		console.log('IN CATCH CALLBACK!!!');
		console.log(err);
	});

axios.get('https://swapi.dev/api/planets/')
	.then(({ data }) => {
		console.log(data);
		for (let planet of data.results) {
			console.log(planet.name);
		}
		return axios.get(data.next)
	})
	.then(({ data }) => {
		console.log(data);
		for (let planet of data.results) {
			console.log(planet.name);
		}
	})
	.catch(err => {
		console.log(err);
	})
