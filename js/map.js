/**
 * Map initialization and interaction for Saint Laurent Story Map
 * Uses Leaflet.js with OpenStreetMap tiles
 */

/**
 * Escape HTML to prevent XSS attacks
 * @param {string} text - Text to escape
 * @returns {string} Escaped text safe for HTML insertion
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

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

// Use Leaflet's default marker icon (bundled with Leaflet, no external dependencies)
// The default blue marker is reliable and doesn't require external resources

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
    // Use Leaflet's default marker (no custom icon needed)
    const marker = L.marker([location.lat, location.lng])
        .addTo(map);
    
    // Create popup content with escaped HTML to prevent XSS
    const popupContent = `
        <div class="popup-content">
            <h3>${escapeHtml(location.name)}</h3>
            <p>${escapeHtml(location.shortDescription)}</p>
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
 * All dynamic content is escaped to prevent XSS
 */
function showLocationDetails(location) {
    sidebarHeader.textContent = location.name;
    
    // Escape all dynamic content for safe HTML insertion
    const safeName = escapeHtml(location.name);
    const safePeriod = escapeHtml(location.period);
    const safeDescription = escapeHtml(location.fullDescription);
    const safeAddress = escapeHtml(location.address);
    const safeImage = escapeHtml(location.image);
    
    // Generate placeholder image if needed
    const imageHtml = location.hasPlaceholderImage 
        ? `<div style="width: 100%; height: 200px; background: linear-gradient(135deg, #1a5276 0%, #5dade2 100%); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 1rem;">
             <div style="text-align: center; padding: 1rem;">
               <div style="font-size: 3rem;">📍</div>
               <div style="font-size: 0.9rem; opacity: 0.8;">${safeName}</div>
             </div>
           </div>`
        : `<img src="${safeImage}" alt="${safeName}" class="location-image" onerror="this.style.display='none'">`;
    
    sidebarContent.innerHTML = `
        <div class="location-card">
            ${imageHtml}
            <h3>${safeName}</h3>
            <p class="location-period">📅 ${safePeriod}</p>
            <p class="location-description">${safeDescription}</p>
            <p class="location-address">📍 ${safeAddress}</p>
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
