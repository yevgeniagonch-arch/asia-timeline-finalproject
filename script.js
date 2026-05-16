// =============================================
// Asia Trip Timeline — Interactive Slider
// Yevgeniia Goncharenko
// =============================================

const scenes = [
  {
    date: "March 5, 2024",
    headline: "Welcome to Bangkok, Thailand",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Wat_Arun_Temple_at_dusk_Landmark_of_Bangkok%2C_Thailand.jpg/1280px-Wat_Arun_Temple_at_dusk_Landmark_of_Bangkok%2C_Thailand.jpg",
    imageAlt: "Wat Arun temple at dusk in Bangkok, Thailand",
    description: "The journey begins in Bangkok — a city of golden spires, tuk-tuks, and sensational street food. Yevgeniia explored the Grand Palace, floated through canal markets, and savored pad thai at a riverside stall as the sun dipped below the Chao Phraya."
  },
  {
    date: "March 18, 2024",
    headline: "Island Dreams in Bali, Indonesia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Tegallalang_Rice_Terrace.jpg/1280px-Tegallalang_Rice_Terrace.jpg",
    imageAlt: "Terraced rice fields in Tegallalang, Bali, Indonesia",
    description: "From Thailand, the adventure continued to the emerald island of Bali. The Tegallalang rice terraces took Yevgeniia's breath away. She climbed the volcano at dawn, attended a Kecak dance ceremony at Uluwatu, and discovered that the best nasi goreng is found at a roadside warung."
  },
  {
    date: "April 2, 2024",
    headline: "Kuala Lumpur Gleams, Malaysia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/KL_Petronas_Towers.jpg/800px-KL_Petronas_Towers.jpg",
    imageAlt: "Petronas Twin Towers in Kuala Lumpur, Malaysia",
    description: "Malaysia welcomed Yevgeniia with its dazzling skyline and extraordinary food culture. She stood beneath the iconic Petronas Twin Towers, got wonderfully lost in the Batu Caves, and spent a full evening working her way through the hawker stalls of Jalan Alor — a true street food paradise."
  },
  {
    date: "April 15, 2024",
    headline: "Ha Long Bay Steals the Show, Vietnam",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Ha_Long_Bay.jpg/1280px-Ha_Long_Bay.jpg",
    imageAlt: "Ha Long Bay limestone islands in Vietnam",
    description: "The final chapter brought Yevgeniia to Vietnam — a country of incredible contrasts. After wandering the ancient lantern-lit streets of Hoi An and savoring pho in Hanoi, she sailed through the legendary limestone karsts of Ha Long Bay, watching the mist roll in at sunrise over still green waters."
  }
];

const slider = document.getElementById("timeline-slider");
const sceneDate = document.getElementById("scene-date");
const sceneHeadline = document.getElementById("scene-headline");
const sceneImage = document.getElementById("scene-image");
const sceneDescription = document.getElementById("scene-description");
const sceneDisplay = document.getElementById("scene-display");
const lastModified = document.getElementById("last-modified");

function updateScene(index) {
  const scene = scenes[index];

  // Fade out
  sceneDisplay.style.opacity = "0";

  setTimeout(() => {
    sceneDate.textContent = scene.date;
    sceneHeadline.textContent = scene.headline;
    sceneImage.src = scene.image;
    sceneImage.alt = scene.imageAlt;
    sceneDescription.textContent = scene.description;

    // Fade back in
    sceneDisplay.style.opacity = "1";
  }, 250);
}

// Initialize first scene
updateScene(0);

// Listen to slider changes
slider.addEventListener("input", function () {
  updateScene(parseInt(this.value));
});

// Display last modified date
const now = new Date();
const options = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" };
lastModified.textContent = "Last Modified: " + now.toLocaleString("en-US", options);
