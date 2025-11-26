/**
 * Map initialization and interaction for Saint Laurent Story Map
 * Uses Leaflet.js with OpenStreetMap tiles
 */

// Initialize the map centered on Saint Laurent Boulevard, Montreal
const map = L.map('map', {
    center: [45.5150, -73.5700],
    zoom: 14,
    zoomControl: true,
    scrollWheelZoom: true
});

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Custom icon for markers
const customIcon = L.divIcon({
    className: 'custom-marker',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12]
});

// Alternative icon using Leaflet's default style but with custom color
const storyIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// DOM elements
const sidebar = document.getElementById('sidebar');
const sidebarContent = document.querySelector('.sidebar-content');
const sidebarHeader = document.querySelector('.sidebar-header h2');
const closeBtn = document.querySelector('.close-btn');

// Create toggle button for mobile
const toggleBtn = document.createElement('button');
toggleBtn.className = 'sidebar-toggle';
toggleBtn.innerHTML = '☰ Info';
toggleBtn.setAttribute('aria-label', 'Toggle sidebar');
document.querySelector('.main-content').appendChild(toggleBtn);

// Add markers for each location
const markers = [];
locations.forEach(location => {
    const marker = L.marker([location.lat, location.lng], { icon: storyIcon })
        .addTo(map);
    
    // Create popup content
    const popupContent = `
        <div class="popup-content">
            <h3>${location.name}</h3>
            <p>${location.shortDescription}</p>
            <button class="learn-more" data-id="${location.id}">Learn More</button>
        </div>
    `;
    
    marker.bindPopup(popupContent);
    
    // Store reference
    markers.push({ marker, location });
});

// Handle "Learn More" button clicks in popups
map.on('popupopen', function(e) {
    const learnMoreBtn = e.popup._contentNode.querySelector('.learn-more');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            const locationId = parseInt(this.getAttribute('data-id'));
            const location = locations.find(loc => loc.id === locationId);
            if (location) {
                showLocationDetails(location);
            }
        });
    }
});

/**
 * Display location details in the sidebar
 */
function showLocationDetails(location) {
    sidebarHeader.textContent = location.name;
    
    // Generate placeholder image if needed
    const imageHtml = location.hasPlaceholderImage 
        ? `<div style="width: 100%; height: 200px; background: linear-gradient(135deg, #1a5276 0%, #5dade2 100%); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 1rem;">
             <div style="text-align: center; padding: 1rem;">
               <div style="font-size: 3rem;">📍</div>
               <div style="font-size: 0.9rem; opacity: 0.8;">${location.name}</div>
             </div>
           </div>`
        : `<img src="${location.image}" alt="${location.name}" class="location-image" onerror="this.style.display='none'">`;
    
    sidebarContent.innerHTML = `
        <div class="location-card">
            ${imageHtml}
            <h3>${location.name}</h3>
            <p class="location-period">📅 ${location.period}</p>
            <p class="location-description">${location.fullDescription}</p>
            <p class="location-address">📍 ${location.address}</p>
        </div>
    `;
    
    // Open sidebar on mobile
    sidebar.classList.add('open');
}

/**
 * Show welcome content in sidebar
 */
function showWelcomeContent() {
    sidebarHeader.textContent = 'Welcome';
    sidebarContent.innerHTML = `
        <p>Explore the rich history of Boulevard Saint-Laurent, Montreal's legendary "Main Street" that divides the city into east and west.</p>
        <p>Click on any marker on the map to discover stories, histories, and images of significant places along this iconic boulevard.</p>
        <div class="instructions">
            <h3>How to Use</h3>
            <ul>
                <li>🗺️ Pan and zoom the map to explore</li>
                <li>📍 Click on markers to learn about each location</li>
                <li>📱 Works on mobile devices</li>
            </ul>
        </div>
        <div style="margin-top: 1.5rem;">
            <h3>About The Main</h3>
            <p style="margin-top: 0.5rem;">Boulevard Saint-Laurent has been the spine of Montreal for over a century. It officially divides the city's street addresses into East and West, but more importantly, it has served as the landing ground for generations of immigrants who built the multicultural city we know today.</p>
        </div>
    `;
}

// Close button handler
closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('open');
});

// Toggle button handler
toggleBtn.addEventListener('click', function() {
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    } else {
        showWelcomeContent();
        sidebar.classList.add('open');
    }
});

// Close sidebar when clicking outside on mobile
map.on('click', function() {
    if (window.innerWidth < 768) {
        sidebar.classList.remove('open');
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        sidebar.classList.remove('open');
    }
});

// Draw a line along Saint-Laurent Boulevard for visual reference
const stLaurentPath = [
    [45.5020, -73.5550], // Southern end near Old Port
    [45.5053, -73.5582],
    [45.5078, -73.5607],
    [45.5101, -73.5623],
    [45.5130, -73.5645],
    [45.5175, -73.5770],
    [45.5195, -73.5825],
    [45.5228, -73.5920],
    [45.5270, -73.6000]  // Northern end at Mile End
];

const boulevardLine = L.polyline(stLaurentPath, {
    color: '#1a5276',
    weight: 4,
    opacity: 0.6,
    dashArray: '10, 10'
}).addTo(map);

// Fit map to show all markers
const group = L.featureGroup(markers.map(m => m.marker));
map.fitBounds(group.getBounds().pad(0.1));

// Show welcome content on load (on desktop)
if (window.innerWidth >= 768) {
    showWelcomeContent();
}
