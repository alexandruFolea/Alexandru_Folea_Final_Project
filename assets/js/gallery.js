/*
All images are in the assets/images file.
With some manipulation you can turn the string, "Arctic Wolf" to the string, "arctic-wolf" or "assets/images/arctic-wolf.jpg" and so on.
*/
const animalArray = [
	{ name: 'Arctic Wolf', species: 'Wolf' },
	{ name: 'Black Bear', species: 'Bear' },
	{ name: 'Black Panther', species: 'Cat' },
	{ name: 'Brown Bear', species: 'Bear' },
	{ name: 'Cheetah', species: 'Cat' },
	{ name: 'Eastern Wolf', species: 'Wolf' },
	{ name: 'Gray Wolf', species: 'Wolf' },
	{ name: 'Iberian Wolf', species: 'Wolf' },
	{ name: 'Leopard', species: 'Cat' },
	{ name: 'Lion', species: 'Cat' },
	{ name: 'Lynx', species: 'Cat' },
	{ name: 'Mexican Wolf', species: 'Wolf' },
	{ name: 'Panda Bear', species: 'Bear' },
	{ name: 'Polar Bear', species: 'Bear' },
	{ name: 'Spectacled Bear', species: 'Bear' },
	{ name: 'Spirit Bear', species: 'Bear' },
	{ name: 'Steppe Wolf', species: 'Wolf' },
	{ name: 'Tiger', species: 'Cat' },
];

// the gallery is shown when the page is loaded without the need of clicking on any buttons
window.addEventListener('DOMContentLoaded', createGallery);

let animalGroups = [
	...new Set(animalArray.map((animal) => animal.species).sort()),
];
//referencing the gallery parent container
const galleryBtns = document.querySelector('.gallery-buttons');
const animalsSection = document.querySelector('.animals-section');
const allAnimalsBtn = document.querySelector('#all-animals');
// for each button in the array created do this
animalGroups.forEach((animal) => {
	const button = document.createElement('button');
	button.innerHTML = `${animal}`;
	button.classList.add(`${animal.toLowerCase()}`);
	galleryBtns.appendChild(button);
	// console.log(button);
});

// main function for creating the gallery
function createGallery() {
	animalArray.forEach((animal) => {
		let heiffenAnimalName = animal.name.replace(' ', '-');
		animal.name = heiffenAnimalName.toLowerCase();
		const animalPath = `assets/images/${animal.name}.jpg`;
		const imageSection = document.createElement('section');
		const imageTag = document.createElement('img');
		const imageTxt = document.createElement('h1');
		//section
		imageSection.classList.add(animal.name, animal.species.toLowerCase());
		imageSection.style.position = 'relative';
		// h1
		imageTxt.innerHTML = animal.name.replace('-', ' ');
		imageTxt.style.position = 'absolute';
		imageTxt.style.bottom = '0';
		imageTxt.style.left = '0';
		imageTxt.style.width = '100%';
		//image
		imageTag.setAttribute('src', animalPath);
		imageTag.setAttribute('alt', animal.species);
		imageTag.style.display = 'block';
		//appending
		imageSection.appendChild(imageTxt);
		imageSection.appendChild(imageTag);
		animalsSection.appendChild(imageSection);
		// console.log(imageSection);
	});
}

const bearBtn = document.querySelector('.bear');
const catBtn = document.querySelector('.cat');
const wolfBtn = document.querySelector('.wolf');
function displayAll() {
	const sections = animalsSection.children;
	for (let i = 0; i < sections.length; i++) {
		sections[i].style.display = 'block';
	}
}

//EVENT LISTENERS
allAnimalsBtn.addEventListener('click', displayAll);

bearBtn.addEventListener('click', () => {
	const sections = animalsSection.children;
	for (let i = 0; i < sections.length; i++) {
		if (sections[i].classList.contains('bear')) {
			sections[i].style.display = 'block';
		} else {
			sections[i].style.display = 'none';
		}
	}
});
catBtn.addEventListener('click', () => {
	const sections = animalsSection.children;
	for (let i = 0; i < sections.length; i++) {
		// console.log(sections[i].className);

		if (sections[i].classList.contains('cat')) {
			sections[i].style.display = 'block';
		} else {
			sections[i].style.display = 'none';
		}
	}
});
wolfBtn.addEventListener('click', () => {
	const sections = animalsSection.children;
	for (let i = 0; i < sections.length; i++) {
		// console.log(sections[i].className);

		if (sections[i].classList.contains('wolf')) {
			sections[i].style.display = 'block';
		} else {
			sections[i].style.display = 'none';
		}
	}
});
