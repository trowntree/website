const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/careers', (req, res) => {
  res.render('careers');
});

// Route to render investment-strategy.ejs
app.get('/investment-strategy', (req, res) => {
  res.render('investment-strategy');
});

// Export the app for Vercel
module.exports = app;

// Start server locally (only when not running on Vercel)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Solvaris running at http://localhost:${port}`);
  });
}