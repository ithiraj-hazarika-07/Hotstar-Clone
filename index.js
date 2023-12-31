let movies = [
  {
    name: "Falcon and The Winter Soldier",
    des: "Following the events of “Avengers: Endgame,” Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience.",
    image: "images/slider 2.PNG",
    url: "https://www.hotstar.com/in/movies/luca/1260063730",
  },
  {
    name: "Loki",
    des: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.",
    image: "images/slider 1.PNG",
    url: "https://www.hotstar.com/in/shows/the-falcon-and-the-winter-soldier/1260055670",
  },
  {
    name: "Wanda Vision",
    des: "Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.",
    image: "images/slider 3.PNG",
    url: "https://www.hotstar.com/in/shows/loki/1260063451",
  },
  {
    name: "Raya and The Last Dragon",
    des: "Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world.",
    image: "images/slider 4.PNG",
    url: "https://www.hotstar.com/in/shows/wandavision/1260051344",
  },
  {
    name: "Luca",
    des: "The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.",
    image: "images/slider 5.PNG",
    url: "https://www.hotstar.com/in/movies/raya-and-the-last-dragon/1260062999",
  },
];

const carousel = document.querySelector(".carousel");
const movies_link = document.querySelector(".link");
let sliders = [];

let slideIndex = 0; // to track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //Creating DOM Elements
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //Attaching elements to the Carousel
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //Setting up images for Carousel
  imgElement.src = movies[slideIndex].image;
  //Setting url for the carousel
  movies_link.href = movies[slideIndex].url;

  slideIndex++;

  //Setting elements class names for the Carousel
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 5000);

//Creating Video Cards
const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

// Creating Card Sliders
let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
