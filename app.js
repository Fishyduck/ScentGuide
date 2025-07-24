// Enhanced fragrance data with additional properties and rule-set for recommendations
const fragrances = [
  {
    id: 0,
    name: "Lacoste Noir",
    image: "images/lacsote-noir.png",
    timeOfDay: "Evening",
    season: "Summer",
    occasion: "Casual, Date Night, Outdoor Events",
    temperature: "Above 75 °F",
    rating: 4.4,
    testimonial: "Effortlessly fresh and subtly sweet—perfect for warm summer evenings.",
    trending: true,
    notes: "Watermelon, Basil, Lavender, Dark Chocolate, Cashmeran",
    preference: "fresh",
    // Recommendation rule-set
    time: "Evening",
    seasons: ["Summer"],
    tempRange: [75, null]
  },
  {
    id: 1,
    name: "Versace Eros Flame",
    image: "images/versace-eros-flame.png",
    timeOfDay: "Evening / Night",
    season: "Fall & Winter",
    occasion: "Night out, date night, clubbing",
    temperature: "Below 60 °F",
    rating: 4.8,
    testimonial: "Perfect for winter date nights!",
    trending: true,
    notes: "Spicy, Woody, Amber",
    preference: "spicy",
    // Added rule-set for smart recommendations
    time: "Evening",
    seasons: ["Fall", "Winter"],
    tempRange: [null, 60]
  },
  {
    id: 2,
    name: "Versace Eros Energy",
    image: "images/versace-eros-energy.png",
    timeOfDay: "Morning through afternoon",
    season: "Spring & Summer",
    occasion: "Casual daytime wear—office, brunch, gym",
    temperature: "Above 60 °F",
    rating: 4.5,
    testimonial: "Great for everyday wear, fresh and energizing",
    trending: false,
    notes: "Citrus, Mint, Woody",
    preference: "fresh",
    // Added rule-set for smart recommendations
    time: "Morning",
    seasons: ["Spring", "Summer"],
    tempRange: [60, null]
  },
  {
    id: 3,
    name: "Crown by Peter Millar",
    image: "images/crown-peter-millar.png",
    timeOfDay: "Evening",
    season: "Fall & Winter",
    occasion: "Formal/business events, upscale dinners, date night",
    temperature: "45 °F to 60 °F",
    rating: 4.7,
    testimonial: "Sophisticated and elegant for business meetings",
    trending: false,
    notes: "Woody, Spicy, Amber",
    preference: "woody",
    // Added rule-set for smart recommendations
    time: "Evening",
    seasons: ["Fall", "Winter"],
    tempRange: [45, 60]
  },
  {
    id: 4,
    name: "Polo Ralph Lauren est. 67 Blue",
    image: "images/polo-rl-blue.png",
    timeOfDay: "Daytime",
    season: "Spring & Summer",
    occasion: "Casual outings, weekend activities, office",
    temperature: "Above 60 °F",
    rating: 4.4,
    testimonial: "Fresh and clean for everyday wear",
    trending: false,
    notes: "Citrus, Aquatic, Musk",
    preference: "fresh",
    // Added rule-set for smart recommendations
    time: "Afternoon",
    seasons: ["Spring", "Summer"],
    tempRange: [60, null]
  },
  {
    id: 5,
    name: "Dolce & Gabbana Light Blue",
    image: "images/dg-light-blue.png",
    timeOfDay: "Daytime",
    season: "Spring & Summer",
    occasion: "Beach days, casual outings, weekend brunch",
    temperature: "Above 75 °F",
    rating: 4.6,
    testimonial: "Perfect for hot summer days, so refreshing",
    trending: true,
    notes: "Citrus, Apple, Cedar",
    preference: "fresh",
    // Added rule-set for smart recommendations
    time: "Afternoon",
    seasons: ["Spring", "Summer"],
    tempRange: [75, null]
  },
  {
    id: 6,
    name: "Bleu de Chanel",
    image: "images/bleu-de-chanel.png",
    timeOfDay: "All day",
    season: "All seasons",
    occasion: "Office, business meetings, dinner",
    temperature: "Any temperature",
    rating: 4.9,
    testimonial: "Versatile and sophisticated for any occasion",
    trending: true,
    notes: "Citrus, Woody, Aromatic",
    preference: "woody",
    // Added rule-set for smart recommendations
    time: "All",
    seasons: ["Spring", "Summer", "Fall", "Winter"],
    tempRange: [null, null]
  },
  {
    id: 7,
    name: "Burberry Brit",
    image: "images/burberry-brit.png",
    timeOfDay: "Daytime to evening",
    season: "Fall & Winter",
    occasion: "Casual outings, work, weekend activities",
    temperature: "Below 60 °F",
    rating: 4.3,
    testimonial: "Cozy and comforting for cool weather",
    trending: false,
    notes: "Spicy, Woody, Sweet",
    preference: "spicy",
    // Added rule-set for smart recommendations
    time: "Afternoon",
    seasons: ["Fall", "Winter"],
    tempRange: [null, 60]
  },
  {
    id: 8,
    name: "Tom Ford Fougere d'Argent",
    image: "images/tf-fougere-argent.png",
    timeOfDay: "Evening or daytime transitional",
    season: "Spring & Fall",
    occasion: "Business meetings, black-tie events, cocktail hour",
    temperature: "50 °F to 65 °F",
    rating: 4.6,
    testimonial: "Luxurious and refined, perfect for special occasions",
    trending: false,
    notes: "Lavender, Mandarin, Woody",
    preference: "woody",
    // Added rule-set for smart recommendations
    time: "Evening",
    seasons: ["Spring", "Fall"],
    tempRange: [50, 65]
  },
  {
    id: 9,
    name: "Gucci Guilty Elixir",
    image: "images/gucci-guilty-elixir.png",
    timeOfDay: "Night",
    season: "Fall & Winter",
    occasion: "Clubs, lounges, late-night parties, date nights",
    temperature: "Below 60 °F",
    rating: 4.7,
    testimonial: "Seductive and long-lasting for nights out",
    trending: true,
    notes: "Spicy, Sweet, Amber",
    preference: "sweet",
    // Added rule-set for smart recommendations
    time: "Night",
    seasons: ["Fall", "Winter"],
    tempRange: [null, 60]
  },
  {
    id: 10,
    name: "Dolce & Gabbana The One",
    image: "images/dg-the-one.png",
    timeOfDay: "Evening",
    season: "Fall & Cooler Spring nights",
    occasion: "Formal dinners, romantic evenings, special occasions",
    temperature: "55 °F to 65 °F",
    rating: 4.5,
    testimonial: "Warm and inviting, perfect for intimate evenings",
    trending: false,
    notes: "Spicy, Tobacco, Amber",
    preference: "spicy",
    // Added rule-set for smart recommendations
    time: "Evening",
    seasons: ["Fall", "Spring"],
    tempRange: [55, 65]
  }
];

// Global state
let weatherData = null;
let activeFilters = {
  time: [],
  season: [],
  temp: [],
  occasion: []
};
let searchQuery = '';
// Added global variables for current context
let timeOfDay = '';
let season = '';

// --- Render Function ---
function renderFragrances() {
  const container = document.getElementById("fragrances");
  container.innerHTML = "";  // clear first

  // Check if any filters are active
  const hasActiveFilters = Object.values(activeFilters).some(arr => arr.length > 0) || window.customTempFilter !== undefined;

  // Apply filters and search in the correct order
  let filteredFragrances = fragrances;
  if (hasActiveFilters) {
    filteredFragrances = applyFilters(fragrances);
    // Only apply temperature filter if customTempFilter is set
    if (window.customTempFilter !== undefined) {
      filteredFragrances = filteredFragrances.filter(frag => {
        if (!frag.tempRange) return true;
        const [min, max] = frag.tempRange;
        const temp = window.customTempFilter;
        if (min !== null && max !== null) return temp >= min && temp <= max;
        if (min !== null) return temp >= min;
        if (max !== null) return temp <= max;
        return true;
      });
    }
  }

  // Update filter counts
  updateFilterCounts(filteredFragrances);

  // Show no results message if needed
  if (filteredFragrances.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <h2>No fragrances found</h2>
        <p>Try adjusting your filters or search query</p>
      </div>
    `;
    updateMoodRing('low', 0); // Show low confidence if nothing matches
    return;
  }

  // Render each fragrance card
  filteredFragrances.forEach((frag, idx) => {
    const card = document.createElement("div");
    card.className = "card card-fade";
    card.setAttribute('data-id', frag.id); // Add data-id for recommendation matching
    card.setAttribute('tabindex', 0);
    card.setAttribute('data-parallax', idx % 2 === 0 ? 'left' : 'right');
    card.innerHTML = `
      <img src="${frag.image}" alt="${frag.name}">
      <div class="card-content">
        <h2 class="card-title">${frag.name}</h2>
        <ul class="card-details">
          <li><strong>Time of Day:</strong> ${frag.timeOfDay}</li>
          <li><strong>Season:</strong> ${frag.season}</li>
          <li><strong>Occasion:</strong> ${frag.occasion}</li>
          <li><strong>Temperature:</strong> ${frag.temperature}</li>
          <li><strong>Notes:</strong> ${frag.notes}</li>
        </ul>
        <div class="rating">
          <span>${'★'.repeat(Math.floor(frag.rating))}${'☆'.repeat(5 - Math.floor(frag.rating))}</span>
          <span>${frag.rating}</span>
        </div>
        <p>"${frag.testimonial}"</p>
      </div>
    `;
    container.appendChild(card);
  });

  // Animate cards in with fade-in and parallax
  animateCardsIn();
  // Apply recommendations after cards are rendered
  highlightRecommendations();
  // Update mood ring/confidence indicator
  updateMoodRingByBestMatch(filteredFragrances);
}

// Animate cards in with fade-in and parallax
function animateCardsIn() {
  const cards = document.querySelectorAll('.card');
  if (!('IntersectionObserver' in window)) {
    // Fallback: show all
    cards.forEach(card => card.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  cards.forEach(card => {
    card.classList.remove('visible');
    observer.observe(card);
  });
}

// Apply filters and search to fragrances
function applyFilters(fragrances) {
  let result = [...fragrances];

  // First apply category filters (AND logic across categories, OR logic within)
  const hasActiveFilters = Object.values(activeFilters).some(arr => arr.length > 0);

  if (hasActiveFilters) {
    result = result.filter(frag => {
      // Check each filter type (AND logic across different filter types)
      for (const [type, values] of Object.entries(activeFilters)) {
        if (values.length === 0) continue; // Skip if no filters of this type

        // For each filter type, check if ANY value matches (OR logic within category)
        let matchFound = false;

        if (type === 'time') {
          matchFound = values.some(val => {
            return frag.timeOfDay.toLowerCase().includes(val.toLowerCase()) ||
                  (val === 'Morning' && frag.timeOfDay.toLowerCase().includes('all day')) ||
                  (val === 'Daytime' && frag.timeOfDay.toLowerCase().includes('all day')) ||
                  (val === 'Evening' && frag.timeOfDay.toLowerCase().includes('all day')) ||
                  (val === 'Night' && frag.timeOfDay.toLowerCase().includes('all day'));
          });
        }
        else if (type === 'season') {
          matchFound = values.some(val => {
            return frag.season.toLowerCase().includes(val.toLowerCase()) ||
                  frag.season.toLowerCase().includes('all seasons');
          });
        }
        else if (type === 'temp') {
          matchFound = values.some(val => {
            const temp = frag.temperature.toLowerCase();

            // Handle special case for "Any temperature"
            if (temp.includes('any temperature')) return true;

            // Cold filter (Below 50°F)
            if (val === 'cold' && (
                temp.includes('below 50') ||
                (temp.includes('45') && !temp.includes('above'))
            )) return true;

            // Cool filter (50-60°F)
            if (val === 'cool' && (
                (temp.includes('50') && !temp.includes('below')) ||
                (temp.includes('45') && temp.includes('60')) ||
                (temp.includes('55') && temp.includes('65')) ||
                temp.includes('below 60')
            )) return true;

            // Mild filter (60-75°F)
            if (val === 'mild' && (
                (temp.includes('60') && !temp.includes('below')) ||
                temp.includes('65') ||
                temp.includes('70') ||
                (temp.includes('55') && temp.includes('65')) ||
                (temp.includes('above 60') && !temp.includes('75'))
            )) return true;

            // Warm filter (Above 75°F)
            if (val === 'warm' && (
                temp.includes('above 75') ||
                (temp.includes('above') && temp.includes('70'))
            )) return true;

            return false;
          });
        }
        else if (type === 'occasion') {
          matchFound = values.some(val => {
            const occasion = frag.occasion.toLowerCase();
            if (val === 'Date' && occasion.includes('date')) return true;
            if (val === 'Casual' && occasion.includes('casual')) return true;
            if (val === 'Office' && (occasion.includes('office') || occasion.includes('business'))) return true;
            if (val === 'Formal' && (occasion.includes('formal') || occasion.includes('upscale'))) return true;
            return false;
          });
        }

        // If no match found for this filter type, exclude the fragrance
        if (!matchFound) return false;
      }

      // Passed all filter types
      return true;
    });
  }

  // Then apply search query (further narrows results)
  if (searchQuery) {
    const query = searchQuery.toLowerCase().trim();
    result = result.filter(frag =>
      frag.name.toLowerCase().includes(query) ||
      frag.season.toLowerCase().includes(query) ||
      frag.occasion.toLowerCase().includes(query)
    );
  }
  return result;
}

// Update the count of matching fragrances for each filter
function updateFilterCounts(filteredFragrances) {
  // Skip if no fragrances or no filter buttons
  if (!filteredFragrances || !filteredFragrances.length) return;

  const filterButtons = document.querySelectorAll('.filter-btn');
  if (!filterButtons.length) return;

  // For each filter button, calculate how many fragrances would match if it were active
  filterButtons.forEach(btn => {
    const type = btn.parentElement.getAttribute('data-filter-type');
    const value = btn.getAttribute('data-value');

    // Create a temporary copy of active filters
    const tempFilters = JSON.parse(JSON.stringify(activeFilters));

    // If this button is not active, temporarily add it to see how many would match
    if (!btn.classList.contains('active') && !tempFilters[type].includes(value)) {
      tempFilters[type].push(value);
    }

    // Apply these temporary filters to get a count
    let tempFilteredFragrances = fragrances;

    // Apply all other active filters except the current type
    for (const [filterType, values] of Object.entries(tempFilters)) {
      if (values.length === 0 || filterType === type) continue;

      tempFilteredFragrances = tempFilteredFragrances.filter(frag => {
        let match = false;

        if (filterType === 'time') {
          match = values.some(val => frag.timeOfDay.toLowerCase().includes(val.toLowerCase()) ||
                                    frag.timeOfDay.toLowerCase().includes('all day'));
        }
        else if (filterType === 'season') {
          match = values.some(val => frag.season.toLowerCase().includes(val.toLowerCase()) ||
                                    frag.season.toLowerCase().includes('all seasons'));
        }
        else if (filterType === 'temp') {
          match = values.some(val => {
            const temp = frag.temperature.toLowerCase();
            if (temp.includes('any temperature')) return true;
            if (val === 'cold' && (temp.includes('below 50') || (temp.includes('45') && !temp.includes('above')))) return true;
            if (val === 'cool' && ((temp.includes('50') && !temp.includes('below')) || (temp.includes('45') && temp.includes('60')) || (temp.includes('55') && temp.includes('65')) || temp.includes('below 60'))) return true;
            if (val === 'mild' && ((temp.includes('60') && !temp.includes('below')) || temp.includes('65') || temp.includes('70') || (temp.includes('55') && temp.includes('65')) || (temp.includes('above 60') && !temp.includes('75')))) return true;
            if (val === 'warm' && (temp.includes('above 75') || (temp.includes('above') && temp.includes('70')))) return true;
            return false;
          });
        }
        else if (filterType === 'occasion') {
          match = values.some(val => {
            const occasion = frag.occasion.toLowerCase();
            if (val === 'Date' && occasion.includes('date')) return true;
            if (val === 'Casual' && occasion.includes('casual')) return true;
            if (val === 'Office' && (occasion.includes('office') || occasion.includes('business'))) return true;
            if (val === 'Formal' && (occasion.includes('formal') || occasion.includes('upscale'))) return true;
            return false;
          });
        }

        return match;
      });
    }

    // Now check how many fragrances match this specific filter
    let count = 0;

    if (type === 'time') {
      count = tempFilteredFragrances.filter(frag =>
        frag.timeOfDay.toLowerCase().includes(value.toLowerCase()) ||
        frag.timeOfDay.toLowerCase().includes('all day')
      ).length;
    }
    else if (type === 'season') {
      count = tempFilteredFragrances.filter(frag =>
        frag.season.toLowerCase().includes(value.toLowerCase()) ||
        frag.season.toLowerCase().includes('all seasons')
      ).length;
    }
    else if (type === 'temp') {
      count = tempFilteredFragrances.filter(frag => {
        const temp = frag.temperature.toLowerCase();
        if (temp.includes('any temperature')) return true;
        if (value === 'cold' && (temp.includes('below 50') || (temp.includes('45') && !temp.includes('above')))) return true;
        if (value === 'cool' && ((temp.includes('50') && !temp.includes('below')) || (temp.includes('45') && temp.includes('60')) || (temp.includes('55') && temp.includes('65')) || temp.includes('below 60'))) return true;
        if (value === 'mild' && ((temp.includes('60') && !temp.includes('below')) || temp.includes('65') || temp.includes('70') || (temp.includes('55') && temp.includes('65')) || (temp.includes('above 60') && !temp.includes('75')))) return true;
        if (value === 'warm' && (temp.includes('above 75') || (temp.includes('above') && temp.includes('70')))) return true;
        return false;
      }).length;
    }
    else if (type === 'occasion') {
      count = tempFilteredFragrances.filter(frag => {
        const occasion = frag.occasion.toLowerCase();
        if (value === 'Date' && occasion.includes('date')) return true;
        if (value === 'Casual' && occasion.includes('casual')) return true;
        if (value === 'Office' && (occasion.includes('office') || occasion.includes('business'))) return true;
        if (value === 'Formal' && (occasion.includes('formal') || occasion.includes('upscale'))) return true;
        return false;
      }).length;
    }

    // Update the button text to include the count
    const originalText = btn.getAttribute('data-original-text') || btn.textContent;
    if (!btn.getAttribute('data-original-text')) {
      btn.setAttribute('data-original-text', originalText);
    }

    // Only show count if there are matching fragrances
    if (count > 0) {
      btn.textContent = `${originalText} (${count})`;
    } else {
      btn.textContent = originalText;
    }
  });
}

// --- Theme Toggle ---
function initThemeToggle() {
  const btn = document.querySelector(".theme-toggle");
  btn.addEventListener("click", () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Or use system preference
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

// --- Weather Fetch (Open-Meteo) ---
async function getWeatherData() {
  const weatherEl = document.getElementById("weather");

  // Show that we're requesting location
  weatherEl.textContent = "Requesting your location...";
  weatherEl.classList.add("requesting-location");

  try {
    // Try to get user's location with a clear message
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        timeout: 10000, // Increased timeout for mobile networks
        maximumAge: 60000,
        enableHighAccuracy: false // Lower accuracy is fine for weather and uses less battery
      });
    });

    weatherEl.classList.remove("requesting-location");
    weatherEl.textContent = "Loading weather data...";

    const { latitude, longitude } = position.coords;
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
      `&current_weather=true&timezone=auto`
    );

    if (!response.ok) throw new Error('Weather API request failed');

    const data = await response.json();
    const temp = Math.round(data.current_weather.temperature * 9/5 + 32); // Convert C to F
    const condition = getWeatherCondition(data.current_weather.weathercode);

    // Inside getWeatherData() function, after setting weatherData
    weatherData = { temp, condition };
    weatherEl.textContent = `Weather: ${temp}°F, ${condition}`;

    // Re-render fragrances instead of directly calling highlightRecommendations
    renderFragrances();
  } catch (err) {
    console.warn("Geolocation or fetch failed:", err);
    weatherEl.classList.remove("requesting-location");

    // Show more helpful message based on error type
    if (err.code === 1) { // Permission denied
      weatherEl.textContent = "Location access denied. Using Mission Viejo weather.";
    } else if (err.code === 2) { // Position unavailable
      weatherEl.textContent = "Could not determine location. Using Mission Viejo weather.";
    } else if (err.code === 3) { // Timeout
      weatherEl.textContent = "Location request timed out. Using Mission Viejo weather.";
    } else {
      weatherEl.textContent = "Using Mission Viejo weather data...";
    }

    // Fallback to Mission Viejo, California weather
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=33.60&longitude=-117.67` +
        `&current_weather=true&timezone=auto`
      );

      if (!response.ok) throw new Error('Fallback weather API request failed');

      const data = await response.json();
      const temp = Math.round(data.current_weather.temperature * 9/5 + 32);
      const condition = getWeatherCondition(data.current_weather.weathercode);

      // Inside the fallback weather data section
      weatherData = { temp, condition };
      weatherEl.textContent = `Weather (Mission Viejo): ${temp}°F, ${condition}`;

      // Re-render fragrances instead of directly calling highlightRecommendations
      renderFragrances();
    } catch (fallbackErr) {
      console.error("All weather attempts failed:", fallbackErr);
      weatherEl.textContent = "Weather unavailable";

      // Set a default temperature so recommendations can still work
      weatherData = { temp: 70, condition: "Unknown" };

      // Re-render with default weather data
      renderFragrances();
    }
  }

  // After weather data is fetched, determine context and update recommendations
  determineCurrentContext();
  return weatherData;
}

// Convert weather code to condition text
function getWeatherCondition(code) {
  // WMO Weather interpretation codes (WW)
  // https://open-meteo.com/en/docs
  const conditions = {
    0: 'Clear',
    1: 'Mainly Clear',
    2: 'Partly Cloudy',
    3: 'Overcast',
    45: 'Foggy',
    48: 'Foggy',
    51: 'Light Drizzle',
    53: 'Drizzle',
    55: 'Heavy Drizzle',
    56: 'Light Freezing Drizzle',
    57: 'Freezing Drizzle',
    61: 'Light Rain',
    63: 'Rain',
    65: 'Heavy Rain',
    66: 'Light Freezing Rain',
    67: 'Freezing Rain',
    71: 'Light Snow',
    73: 'Snow',
    75: 'Heavy Snow',
    77: 'Snow Grains',
    80: 'Light Showers',
    81: 'Showers',
    82: 'Heavy Showers',
    85: 'Light Snow Showers',
    86: 'Snow Showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with Hail',
    99: 'Thunderstorm with Heavy Hail'
  };
  return conditions[code] || 'Unknown';
}

// Handle search input
function setupSearch() {
  const searchInput = document.getElementById('fragrance-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      console.log('Search Query:', searchQuery); // Add this line
      renderFragrances();
    });
  }
}

// Add keyboard navigation for modal escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.querySelector('.modal.show');
    if (modal) modal.classList.remove('show');
  }
});

// Setup event listeners for filter buttons
function setupEventListeners() {
  // Setup filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', handleFilterClick);
  });

  // Setup clear filters button
  const clearBtn = document.getElementById('clear-filters');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      // Remove active class from all filter buttons
      document.querySelectorAll('.filter-btn.active').forEach(btn => {
        btn.classList.remove('active');
      });

      // Clear all active filters
      for (const type in activeFilters) {
        activeFilters[type] = [];
      }

      // Clear search input
      const searchInput = document.getElementById('fragrance-search');
      if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
      }

      // Reset temperature slider and filter
      window.customTempFilter = undefined;
      const slider = document.getElementById('temp-slider');
      const valueEl = document.getElementById('temp-slider-value');
      if (slider) slider.value = 70;
      if (valueEl) valueEl.textContent = '70°F';

      // Re-render fragrances (should show all)
      renderFragrances();
    });
  }
}

// Handle filter button clicks
function handleFilterClick(e) {
  const btn = e.target;
  const filterType = btn.parentElement.getAttribute('data-filter-type');
  const filterValue = btn.getAttribute('data-value');

  // Toggle active class
  btn.classList.toggle('active');

  // Update active filters
  if (btn.classList.contains('active')) {
    // Add filter value if not already present
    if (!activeFilters[filterType].includes(filterValue)) {
      activeFilters[filterType].push(filterValue);
    }
  } else {
    // Remove filter value
    activeFilters[filterType] = activeFilters[filterType].filter(val => val !== filterValue);
  }

  // Re-render fragrances
  renderFragrances();
}

// --- Temperature slider logic ---
function setupTempSlider() {
  const slider = document.getElementById('temp-slider');
  const valueEl = document.getElementById('temp-slider-value');
  if (!slider || !valueEl) return;
  slider.addEventListener('input', e => {
    const val = parseInt(e.target.value, 10);
    valueEl.textContent = `${val}°F`;
    window.customTempFilter = val;
    renderFragrances();
  });
}

// --- Mood ring/confidence indicator ---
function updateMoodRing(level, score) {
  const ring = document.getElementById('mood-ring-indicator');
  if (!ring) return;
  let colorClass = 'low', emoji = '😶', label = 'Low', tooltip = '';
  if (level === 'perfect') {
    colorClass = 'perfect'; emoji = '💎'; label = 'Perfect';
    tooltip = `Perfect match for your current vibe: ${timeOfDay}, ${season}, ${window.customTempFilter !== undefined ? window.customTempFilter + '°F' : (weatherData?.temp ? weatherData.temp + '°F' : '')}`;
  }
  else if (level === 'great') { colorClass = 'great'; emoji = '🌟'; label = 'Great'; }
  else if (level === 'good') { colorClass = 'good'; emoji = '😊'; label = 'Good'; }
  ring.innerHTML = '';
  if (level === 'perfect') {
    ring.innerHTML = `<div class="mood-ring ${colorClass}" tabindex="0" aria-label="${label} Match" title="${tooltip}"><span class="emoji">${emoji}</span></div><span class="mood-label">${label} Match</span><span class="mood-tooltip" role="tooltip">${tooltip}</span>`;
  } else if (level === 'great' || level === 'good' || level === 'low') {
    ring.innerHTML = `<div class="mood-ring ${colorClass}" tabindex="0" aria-label="${label} Match"><span class="emoji">${emoji}</span></div><span class="mood-label">${label} Match</span>`;
  }
}
function updateMoodRingByBestMatch(filteredFragrances) {
  let bestScore = 0;
  const timeOrder = ["Morning", "Afternoon", "Evening", "Night"];
  filteredFragrances.forEach(frag => {
    let score = 0;
    const temp = window.customTempFilter !== undefined ? window.customTempFilter : (weatherData?.temp ?? 70);
    const fragIndex = timeOrder.indexOf(frag.time);
    const userIndex = timeOrder.indexOf(timeOfDay);
    if (frag.time === "All") score += 4.0;
    else if (fragIndex !== -1 && userIndex !== -1) {
      const diff = Math.abs(fragIndex - userIndex);
      if (diff === 0) score += 4.0;
      else if (diff === 1) score += 1.0;
    }
    if (frag.seasons) {
      if (frag.seasons.length === 4) score += 1.0;
      else if (frag.seasons.includes(season)) score += 1.0;
    }
    if (frag.tempRange) {
      const [min, max] = frag.tempRange;
      if (min === null && max === null) score += 5.0;
      else if (min === null && max !== null) {
        if (temp <= max) score += 5.0;
        else if (temp <= max + 3) score += 3.0;
      } else if (min !== null && max === null) {
        if (temp >= min) score += 5.0;
        else if (temp >= min - 3) score += 3.0;
      } else {
        if (temp >= min && temp <= max) score += 5.0;
        else if (temp >= min - 3 && temp <= max + 3) score += 3.0;
      }
    }
    if (score > bestScore) bestScore = score;
  });
  if (bestScore >= 9.5) updateMoodRing('perfect', bestScore);
  else if (bestScore >= 8.0) updateMoodRing('great', bestScore);
  else if (bestScore >= 7.0) updateMoodRing('good', bestScore);
  else updateMoodRing('low', bestScore);
}

// --- Lock in favorite weather/vibe (UI only for now) ---
function setupLockInButton() {
  const ring = document.getElementById('mood-ring-indicator');
  if (!ring) return;
  const btn = document.createElement('button');
  btn.textContent = 'Lock In This Vibe';
  btn.className = 'lock-in-btn';
  btn.style.marginLeft = '1.5rem';
  btn.onclick = () => {
    // Placeholder: store current filters in localStorage
    localStorage.setItem('lockedVibe', JSON.stringify({
      time: [...activeFilters.time],
      season: [...activeFilters.season],
      temp: window.customTempFilter,
      occasion: [...activeFilters.occasion]
    }));
    btn.textContent = 'Locked!';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = 'Lock In This Vibe'; btn.disabled = false; }, 2000);
  };
  ring.appendChild(btn);
}

// --- Filter accordion toggle logic ---
function setupFilterAccordion() {
  const toggle = document.getElementById('filter-accordion-toggle');
  const content = document.getElementById('filter-accordion-content');
  if (!toggle || !content) return;
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    if (expanded) {
      content.hidden = true;
    } else {
      content.hidden = false;
      content.classList.add('accordion-open');
    }
  });
  // Keyboard accessibility
  toggle.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle.click();
    }
  });
}

// --- Initialize App ---
document.addEventListener("DOMContentLoaded", async () => {
  // Initialize theme toggle (load saved preference)
  initThemeToggle();
  // Determine current context first (time and season)
  determineCurrentContext();
  // Set up event listeners
  setupEventListeners();
  // Set up temperature slider
  setupTempSlider();
  // Set up lock in button
  setupLockInButton();
  // Set up filter accordion
  setupFilterAccordion();
  // Fetch weather data (but don't wait for initial render)
  getWeatherData();
  // Initial render
  renderFragrances();
});

// Determine current context (time of day, season)
function determineCurrentContext() {
  const now = new Date();
  const hour = now.getHours();

  // Determine time of day
  timeOfDay =
      hour < 12    ? "Morning"
    : hour < 17    ? "Afternoon"
    : hour < 20    ? "Evening"
    :               "Night";

  // Determine current season
  const month = now.getMonth() + 1;
  season =
      [12, 1, 2].includes(month)  ? "Winter"
    : [3, 4, 5].includes(month)   ? "Spring"
    : [6, 7, 8].includes(month)   ? "Summer"
    :                              "Fall";

  console.log(`Current context: ${timeOfDay}, ${season}, ${weatherData?.temp ?? 'unknown'}°F`);
}

// Highlight recommendations based on current context using a scoring system
function highlightRecommendations() {
  // Skip if weather data isn't available yet
  if (!weatherData) return;

  const cards = document.querySelectorAll('.card');
  if (!cards.length) return;

  // Define time order for adjacent time matching
  const timeOrder = ["Morning", "Afternoon", "Evening", "Night"];
  const tempMargin = 3; // degrees

  // Get all visible fragrances (those that have cards rendered)
  const visibleFragrances = Array.from(cards).map(card => {
    const fragId = parseInt(card.getAttribute('data-id'));
    return fragrances.find(f => f.id === fragId);
  }).filter(Boolean);

  const scores = [];
  visibleFragrances.forEach((frag, i) => {
    if (!frag) return;
    let score = 0;
    const temp = weatherData?.temp ?? 70;
    // 1. Time match (4 points max, stricter)
    if (frag.time === "All") {
      score += 4.0;
    } else {
      const fragIndex = timeOrder.indexOf(frag.time);
      const userIndex = timeOrder.indexOf(timeOfDay);
      if (fragIndex !== -1 && userIndex !== -1) {
        const diff = Math.abs(fragIndex - userIndex);
        if (diff === 0) {
          score += 4.0; // Exact match
        } else if (diff === 1) {
          score += 1.0; // Adjacent slot, much lower
        }
        // No points for other times
      }
    }
    // 2. Season match (1 point max)
    if (frag.seasons) {
      if (frag.seasons.length === 4 && frag.seasons.includes("Spring") && frag.seasons.includes("Summer") && frag.seasons.includes("Fall") && frag.seasons.includes("Winter")) {
        score += 1.0;
      } else if (frag.seasons.includes(season)) {
        score += 1.0;
      }
    }
    // 3. Temperature match (5 points max)
    if (frag.tempRange) {
      const [min, max] = frag.tempRange;
      if (min === null && max === null) {
        score += 5.0;
      } else if (min === null && max !== null) {
        if (temp <= max) {
          score += 5.0;
        } else if (temp <= max + tempMargin) {
          score += 3.0;
        }
      } else if (min !== null && max === null) {
        if (temp >= min) {
          score += 5.0;
        } else if (temp >= min - tempMargin) {
          score += 3.0;
        }
      } else {
        if (temp >= min && temp <= max) {
          score += 5.0;
        } else if (temp >= min - tempMargin && temp <= max + tempMargin) {
          score += 3.0;
        }
      }
    }
    scores[i] = score;
  });
  const maxScore = Math.max(...scores, 0);
  const perfectThreshold = 9.5;
  const greatThreshold = 8.0;
  const goodThreshold = 7.0;
  scores.forEach((score, i) => {
    const card = cards[i];
    card.classList.remove('recommend', 'recommend-high', 'recommend-low', 'recommend-perfect', 'recommend-great', 'recommend-good');
    const existingBadge = card.querySelector('.recommend-badge-high, .recommend-badge-low');
    if (existingBadge) existingBadge.remove();
    if (score >= perfectThreshold) {
      card.classList.add('recommend-high');
      addRecommendationBadge(card, 'PERFECT MATCH', 'high');
    } else if (score >= greatThreshold) {
      card.classList.add('recommend-high');
      addRecommendationBadge(card, 'GREAT MATCH', 'high');
    } else if (score >= goodThreshold) {
      card.classList.add('recommend-low');
      addRecommendationBadge(card, 'GOOD MATCH', 'low');
    }
  });
}

// Helper function to add recommendation badge
function addRecommendationBadge(card, text, level) {
  const badge = document.createElement('div');
  badge.className = `recommend-badge-${level}`;
  badge.textContent = text;
  card.appendChild(badge);
}