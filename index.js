const container = document.querySelector(".character_container");

//List the default characters on page load
fetch("https://swapi.dev/api/people/")
	.then((response) => response.json())
	.then((data) => {
		let people = data.results;
		people.forEach((person) => {
			const xterCard = document.createElement("div");
			xterCard.classList.add("xterCard");
			const name = document.createElement("h3");
			name.classList.add("name");
			name.innerText = person.name;
			const gender = document.createElement("p");
			gender.classList.add("attribute");
			gender.innerText = `Gender: ${person.gender}`;
			const hair_color = document.createElement("p");
			hair_color.classList.add("attribute");
			hair_color.innerText = `Hair Color: ${person.hair_color}`;
			const skin_color = document.createElement("p");
			skin_color.classList.add("attribute");
			skin_color.innerText = `Skin Color: ${person.skin_color}`;
			xterCard.appendChild(name);
			xterCard.appendChild(gender);
			xterCard.appendChild(hair_color);
			xterCard.appendChild(skin_color);
			container.appendChild(xterCard);
		});
	});

// search character function
let xterName = document.getElementById("xterName");
let btn = document.getElementById("submitBtn");
btn.addEventListener("click", () => {
	event.preventDefault();
	let queryName = xterName.value.split(" ").join("&");
	let queryURL = `https://swapi.dev/api/people/?search=${queryName}`;

	//fetch the URL with the query
	fetch(queryURL)
		.then((response) => response.json())
		.then((data) => {
			const fetchedData = data.results;
			container.innerText = "";
			container.classList.remove("character_container");
			let nameCard = document.createElement("div");
			nameCard.classList.add("queryCard");
			let namePlate = document.createElement("h3");
			namePlate.classList.add("name");
			namePlate.innerText = fetchedData[0].name;
			let gender = document.createElement("p");
			gender.innerText = `Gender: ${fetchedData[0].gender}`;
			let birth_year = document.createElement("p");
			birth_year.innerText = `Birth Year: ${fetchedData[0].birth_year}`;
			nameCard.appendChild(namePlate);
			nameCard.appendChild(gender);
			nameCard.appendChild(birth_year);
			container.appendChild(nameCard);
		});
});
