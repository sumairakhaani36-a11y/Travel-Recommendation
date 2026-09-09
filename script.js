// Destination data: each entry has a name, a category used for search
// matching, a short description, and an image.
const destinations = [
  {
    name: "Bora Bora, French Polynesia",
    category: "beach",
    description:
      "Turquoise lagoon waters and overwater bungalows ringed by a coral reef.",
    image: "https://en.wikipedia.org/wiki/Special:FilePath/Bora-bora_from_air.jpg"
  },
  {
    name: "Whitehaven Beach, Australia",
    category: "beach",
    description:
      "Pure silica sand and swirling blue water in the Whitsunday Islands.",
    image: "https://en.wikipedia.org/wiki/Special:FilePath/Whitehaven_Beach,_Whitsunday_Island,_Queensland.jpg"
  },
  {
    name: "Navagio Beach, Greece",
    category: "beach",
    description:
      "A shipwreck-dotted cove on Zakynthos, reachable only by boat.",
    image: "https://en.wikipedia.org/wiki/Special:FilePath/Navagio_beach_Zakynthos.jpg"
  },
  {
    name: "Angkor Wat, Cambodia",
    category: "temple",
    description:
      "The largest religious monument in the world, famous for sunrise views.",
    image: "https://en.wikipedia.org/wiki/Special:FilePath/Angkor_Wat.jpg"
  },
  {
    name: "Kinkaku-ji, Japan",
    category: "temple",
    description:
      "Kyoto's Golden Pavilion, a Zen temple reflected in its own pond.",
    image: "https://en.wikipedia.org/wiki/Special:FilePath/Kinkaku3402.jpg"
  },
  {
    name: "Borobudur, Indonesia",
    category: "temple",
    description:
      "A 9th-century Buddhist temple built as a giant stepped mandala.",
    image: "https://en.wikipedia.org/wiki/Special:FilePath/Borobudur_Temple.jpg"
  },
  {
    name: "Japan",
    category: "country",
    description:
      "From neon Tokyo streets to quiet mountain shrines and bullet trains.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mt._Fuji.jpg"
  },
  {
    name: "New Zealand",
    category: "country",
    description:
      "Fjords, glaciers, and film-set landscapes across two dramatic islands.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/MilfordSound.jpg"
  },
  {
    name: "Italy",
    category: "country",
    description:
      "Ancient ruins, coastal towns, and food worth planning a trip around.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tuscan_Landscape_7.JPG"
  }
];

// Very small keyword-to-category mapping so "temples", "Temple", "beaches"
// etc. all match the same category.
function matchCategory(query) {
  const q = query.trim().toLowerCase();
  if (q.startsWith("beach")) return "beach";
  if (q.startsWith("temple")) return "temple";
  if (q.startsWith("countr")) return "country";
  return null;
}

function renderResults(items) {
  const results = document.getElementById("results");
  results.innerHTML = "";

  if (items.length === 0) {
    results.innerHTML =
      '<p class="empty-note">No matches. Try "beach", "temple", or "country".</p>';
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <span class="category">${item.category}</span>
      </div>
    `;
    results.appendChild(card);
  });
}

function handleSearch() {
  const input = document.getElementById("search-input");
  const category = matchCategory(input.value);
  const results = document.getElementById("results");

  if (!input.value.trim()) {
    results.innerHTML =
      '<p class="empty-note">Type "beach", "temple", or "country" and press Search.</p>';
    return;
  }

  const matches = category
    ? destinations.filter((d) => d.category === category)
    : [];
  renderResults(matches);
}

function handleClear() {
  document.getElementById("search-input").value = "";
  document.getElementById("results").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");
  const clearBtn = document.getElementById("clear-btn");
  const input = document.getElementById("search-input");

  if (searchBtn) searchBtn.addEventListener("click", handleSearch);
  if (clearBtn) clearBtn.addEventListener("click", handleClear);
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSearch();
    });
  }
});
