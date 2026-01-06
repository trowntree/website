const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Homepage articles data (optional, for dynamic rendering)
const articles = [
  {
    title: 'Community Impact',
    summary: 'A focus on inclusive access, reaching underserved communities and empowering people with reliable and affordable energy.',
    link: '/article_community_impact',
    image: '/images/com2.png'
  },
  {
    title: 'Decentralised Renewable Energy',
    summary: 'Modern, decentralised energy solutions designed for rapid implementation and scalable impact across communities and economies.',
    link: '/article_decentralised_energy',
    image: '/images/hernen-solar.jpg'
  },
  {
    title: 'Innovative Financing',
    summary: 'Creative financing mechanisms to fund renewable energy projects and expand reliable power access.',
    link: '/article_innovative_financing',
    image: '/images/Africa_images/DSCF0367.JPG'
  }
];

// Routes
app.get('/', (req, res) => {
  // Pass articles array to index.ejs
  res.render('index', { articles });
});

app.get('/careers', (req, res) => {
  res.render('careers');
});

app.get('/investment-strategy', (req, res) => {
  res.render('investment-strategy');
});

app.get('/gallery', (req, res) => {
  res.render('gallery');
});

// Routes for articles
app.get('/article_community_impact', (req, res) => {
  res.render('article_community_impact');
});

app.get('/article_decentralised_energy', (req, res) => {
  res.render('article_decentralised_energy');
});

app.get('/article_innovative_financing', (req, res) => {
  res.render('article_innovative_financing');
});

// Export the app for Vercel
module.exports = app;

// Start server locally (only when not running on Vercel)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Solvaris running at http://localhost:${port}`);
  });
}
