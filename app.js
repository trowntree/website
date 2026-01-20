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
    title: 'Heatmaps',
    summary: 'An intuitive framework for turning operational mini-grid data into action.',
    link: '/heatmaps',
    image: '/images/com2.png'
  },
  {
    title: 'Capacity Utilisation',
    summary: 'Exploring capacity utilisation as the all-encompassing metric for system performance',
    link: '/article_capacity_utilisation',
    image: '/images/hernen-solar.jpg'
  },
  {
    title: 'Artificial Intelligence',
    summary: 'Creative financing mechanisms to fund renewable energy projects and expand reliable power access.',
    link: '/article_ai',
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
app.get('/heatmaps', (req, res) => {
  res.render('heatmaps');
});

app.get('/article_capacity_utilisation', (req, res) => {
  res.render('article_capacity_utilisation');
});

app.get('/article_ai', (req, res) => {
  res.render('article_ai');
});

// Export the app for Vercel
module.exports = app;

// Start server locally (only when not running on Vercel)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Solvaris running at http://localhost:${port}`);
  });
}
