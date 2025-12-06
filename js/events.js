// UPCOMING EVENT COMPONENT GENERATOR
function createEventCard(event) {
    const template = document.getElementById("eventCardTemplate");
    const card = template.content.cloneNode(true);

    card.querySelector(".event-image").src = event.image;
    card.querySelector(".event-date").textContent = event.date;
    card.querySelector(".event-title").textContent = event.title;
    card.querySelector(".event-description").textContent = event.description;

    card.querySelector(".register-link").href = event.register;

    // Prize
    if (event.prize) {
        const prize = `
            <div class="flex items-center px-8 py-2 rounded-xl bg-amber-50 dark:bg-gray-800 border border-amber-200 dark:border-amber-700/50 shadow-sm">
                <span class="text-3xl mr-3">🏆</span>
                <div class="flex flex-col">
                    <span class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Grand Prize</span>
                    <span class="text-xl font-extrabold text-gray-900 dark:text-white">${event.prize}</span>
                </div>
            </div>`;
        card.querySelector(".prize-container").innerHTML = prize;
    }

    // Judges
    card.querySelector(".judges-grid").innerHTML = event.judges
        .map(j => `
            <div class="flex flex-col items-center">
                <img src="${j.image}" class="w-24 h-24 rounded-full object-cover mb-2">
                <p class="font-semibold text-text-light dark:text-text-dark text-center">${j.name}</p>
                <p class="text-sm text-subtext-light dark:text-subtext-dark text-center">${j.role}</p>
            </div>
        `)
        .join("");

    // Sponsors
    card.querySelector(".sponsors-list").innerHTML = event.sponsors
        .map(s => `<img src="${s}" class="h-12 object-contain" />`)
        .join("");

    return card;
}

// EVENT DATA
const eventsData = [
    {
        image: "./assets/images/highlights/event_pic.png",
        date: "October 25–27, 2024 • Tokyo, Japan",
        title: "WSP Global Finals 2024",
        description: "The world's top student startup teams compete for the grand title. Three days of pitching, workshops, judging, and networking.",
        register: "https://yume.dt-solution.com/",
        prize: "$50,000",

        judges: [
            { image: "./assets/images/events/PH/Donn Gamboa.png", name: "John Carter", role: "VC Partner" },
            { image: "./assets/images/events/PH/Jay.png", name: "Aisha Tan", role: "Tech CEO" },
            { image: "./assets/images/events/PH/Rico.png", name: "Mark Velasquez", role: "Innovation Lead" },
            { image: "./assets/images/events/PH/Yes.png", name: "Mark Velasquez", role: "Innovation Lead" }
        ],

        sponsors: [
            "./assets/images/events/PH/Blinc.png",
            "./assets/images/events/PH/FLP.png",
            "./assets/images/events/PH/ETX.png",
            "./assets/images/events/PH/LG.png",
            "./assets/images/events/PH/WC.png"
        ]
    },

];


// RENDER CARDS
const carousel = document.getElementById("upcomingCarousel");
eventsData.forEach(event => carousel.appendChild(createEventCard(event)));

let index = 0;
const totalSlides = eventsData.length;

// HIDE CONTROLS IF ONLY ONE EVENT
const prevBtn = document.getElementById("prevEvent");
const nextBtn = document.getElementById("nextEvent");

if (totalSlides <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
}

// UPDATE CAROUSEL POSITION
function updateCarousel() {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// BUTTON LOGIC
prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
});




// PAST EVENT COMPONENT GENERATOR ------------------------------------------
const pastEventsData = [
  {
    image: "./assets/images/2025/2025-1.png",
    date: "May 15, 2023",
    title: "WSP Asia Regional Finals",
    description: "Teams from across Asia competed for a spot in the Global Finals.",
    link: "#" 
  },
  {
    image: "./assets/images/2025/2025-2.png",
    date: "March 10, 2023",
    title: "WSP Europe Semi-Finals",
    description: "Online event showcasing Europe’s most promising student startups.",
    link: "#"
  }
];

const createPastEventCard = (event) => {
  return `
    <div class="flex flex-col h-full p-8 bg-card-light dark:bg-card-dark rounded-xl shadow-custom-light dark:shadow-custom-dark transition-transform hover:scale-[1.02]">
        
        <img 
            src="${event.image}" 
            alt="${event.title}" 
            class="w-full h-56 object-cover rounded-lg mb-5"
        >
        
        <p class="text-subtext-light dark:text-subtext-dark text-lg">
            ${event.date}
        </p>
        
        <h4 class="text-2xl font-bold text-text-light dark:text-text-dark mt-1 mb-2">
            ${event.title}
        </h4>
        
        <p class="text-subtext-light dark:text-subtext-dark text-lg mb-6 flex-grow">
            ${event.description}
        </p>

        <a href="${event.link}" class="text-blue-500 hover:text-blue-600 font-semibold inline-flex items-center mt-auto group transition-colors">
            Learn more 
            <span class="ml-2 transform group-hover:translate-x-1 transition-transform">-></span>
        </a>
    </div>
  `;
};

const renderPastEvents = () => {
  // Target the specific 'past-events' ID
  const container = document.getElementById('past-events-container');
  
  if (container) {
    container.innerHTML = pastEventsData.map(event => createPastEventCard(event)).join('');
  }
};

document.addEventListener('DOMContentLoaded', renderPastEvents);