# Saint Laurent Boulevard - A Story Map

An interactive story mapping website that explores the rich history of Boulevard Saint-Laurent (The Main) in Montreal, Canada.

## 🗺️ About

Boulevard Saint-Laurent has been Montreal's spine for over a century, serving as the primary gateway for immigrants and dividing the city into East and West. This story map allows visitors to explore significant locations along this iconic boulevard through an interactive web experience.

## ✨ Features

- **Interactive Map**: Built with Leaflet.js and OpenStreetMap
- **Clickable Locations**: 8 curated points of interest along Saint-Laurent Boulevard
- **Rich Content**: Historical descriptions, time periods, and contextual information
- **Mobile Friendly**: Responsive design that works on all devices
- **No Backend Required**: Static site that can be hosted anywhere

## 🚀 Getting Started

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/grammeth/StLo.git
   cd StLo
   ```

2. Serve the files locally:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Or simply open index.html in your browser
   ```

3. Open your browser to `http://localhost:8000`

### Hosting Options

This site is designed to be hosted as a static website. Recommended options:

- **GitHub Pages**: Push to a `gh-pages` branch or enable Pages in repository settings
- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Import your project for instant hosting
- **Any static hosting**: Upload the files to any web server

## 📁 Project Structure

```
StLo/
├── index.html          # Main HTML page
├── css/
│   └── style.css       # Responsive styles
├── js/
│   ├── locations.js    # Location data and descriptions
│   └── map.js          # Map initialization and interactions
├── images/             # Location images (add your own)
└── README.md           # This file
```

## 🖼️ Adding Your Own Images

To add real images for each location:

1. Add image files to the `images/` folder
2. Update the `image` property in `js/locations.js`
3. Set `hasPlaceholderImage: false` for locations with real images

Recommended image size: 800x600 pixels, JPEG format

## 📍 Featured Locations

1. **Chinatown Gate** - Gateway to one of North America's oldest Chinatowns
2. **Monument-National** - Historic 1893 theatre for French-Canadian culture
3. **Schwartz's Deli** - Legendary smoked meat institution since 1928
4. **The Main Immigrant Corridor** - Historic gateway for waves of immigrants
5. **St. Lawrence Warehouse District** - 19th century commercial heart
6. **Mile End Artists Quarter** - Contemporary creative district
7. **St-Viateur Bagel** - Famous Montreal-style bagel bakery
8. **Portuguese Quarter** - Heart of Montreal's Portuguese community

## 🛠️ Technologies Used

- [Leaflet.js](https://leafletjs.com/) - Open-source interactive maps
- [OpenStreetMap](https://www.openstreetmap.org/) - Free map tiles
- Vanilla HTML, CSS, and JavaScript

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to add more locations, improve descriptions, or enhance the user experience.

---

*Exploring the stories of Boulevard Saint-Laurent, Montreal's legendary Main Street.*