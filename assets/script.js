const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById("banner");
const bannerImage = banner.querySelector(".banner-img");
const bannerTagLine = banner.querySelector("p");
const leftArrow = banner.querySelector(".arrow_left");
const rightArrow = banner.querySelector(".arrow_right");
const dotsContainer = banner.querySelector(".dots");
console.log("Éléments DOM récupérés"); // Initialisation de l'index du slide actuel (on rapporte tous les élements)

let currentSlideIndex = 0;

function updateSlide() {
	console.log("updateSlide appelé"); // Affichage de l'index du slide actuel
	console.log("Index actuel :", currentSlideIndex); // Vérification de l'index du slide actuel 

	const slide = slides[currentSlideIndex];
	console.log("Slide actuel :", slide); // Mise à jour de l'image du slide
	
	bannerImage.src = `assets/images/slideshow/${slide.image}`;
	bannerTagLine.innerHTML = slide.tagLine;
	updateDots();
}

function updateDots() {
	console.log("updateDots appelé"); 

	dotsContainer.innerHTML = "";// Suppression des anciens dots plus simple pour refaire les dots
	
	slides.forEach((slide, index) => {
		console.log("Création dot :", index); // Création d'un élément span pour le dot
		
		const dot = document.createElement("span");
		dot.classList.add("dot");
		if (index === currentSlideIndex) {
			console.log("Dot sélectionné :", index); // Ajout de la classe pour le dot sélectionné
			dot.classList.add("dot_selected");
		}
		dotsContainer.appendChild(dot);
	});
}

leftArrow.addEventListener("click", () => {
	console.log("Clic sur flèche gauche"); // Mise à jour de l'index du slide actuel
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	console.log("Nouvel index :", currentSlideIndex); // Mise à jour de l'affichage du slide
	updateSlide();
});

rightArrow.addEventListener("click", () => {
	console.log("Clic sur flèche droite"); // Mise à jour de l'index du slide actuel
	currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	console.log("Nouvel index :", currentSlideIndex); // Mise à jour de l'affichage du slide
	updateSlide();
});

console.log("Initialisation du slider");
// Initialisation du slider avec le premier slide
updateSlide();					
