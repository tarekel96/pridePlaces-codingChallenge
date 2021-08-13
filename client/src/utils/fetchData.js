// asynchronously fetching API data from JSON Placeholder server
export const fetchData = async (dataURL, dataSetter) => {
	// specify options - GET request and receiving JSON data
	const options = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	};
	// await for response from server
	const res = await fetch(dataURL, options);
	// await to convert data from body of response to JSON
	const data = await res.json();
	console.log(data);
	// set JSON data to React state
	dataSetter(data);
};
