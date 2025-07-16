const express = require('express');
const { engine } = require('express-handlebars'); 
const path = require('path');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')));
app.engine('hbs', engine(
  {extname: '.hbs'
   // 👉 đây là layout mặc định
  }
)); // ✅ Gọi hàm engine()
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource\\views'));



app.get('/', (req, res) => {
  res.render('home');
    
})
app.get('/tin-tuc', (req, res) => {
  res.render('news');
    
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)

})