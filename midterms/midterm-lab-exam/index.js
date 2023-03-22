//ph dishes Midterm exam //Maniago, Charmagne Dale G.

const express = require('express');
const app = express();

//Array for GET Method
const dishes = [
  {
    type: 'Sisig',
    province: 'Pampanga',
    price: '220',
  },

  {
    type: 'Salpapico',
    province: 'Quezon',
    price: '180',
  },

  {
    type: 'Bagnet',
    province: 'Ilocos',
    price: '370',
  },
];

//get all dishes
app.get('/api/dishes', (req, res) => {
  res.send(dishes);
});

app.listen(3000, () => console.log('Listening on port 3000'));

//get dishes by type
app.get('/api/dishes/:type', (req, res) => {
  const dish = dishes.find((h) => h.id === parseInt(req.params.type));
  if (!type) return res.status(404).send('Record not found');
  res.send(dish);
});
