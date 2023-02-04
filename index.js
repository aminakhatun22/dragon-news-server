const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./Category.json');
const news = require('./News.json');
app.get('/', (req, res) => {
    res.send('News API Running');
});

// category api
app.get('/news-categories', (req, res) => {
    res.send(categories)
});

// category id news
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news);
    }
    else {
        const category = news.filter(news => news.category_id === id);
        res.send(category);
    }


});

app.get('/news', (req, res) => {
    res.send(news);
})



// News api
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(news => news._id === id);
    res.send(selectedNews)
})



app.listen(port, () => {
    console.log('Dragon News Server running on Port', port);

});