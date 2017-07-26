const express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
 
    var now = new Date().toString();
    console.log(now+' '+req.method+' '+ req.url);
    next();
})
app.get('/', (req, res)=>{
  
   res.render('home.hbs',{
    pageTitle: 'Home Page',
    welcomeMessage: 'Hi, Welcome to Sarthak Page',
    currentYear: new Date().getFullYear()
   });
   //res.send('Hello express')
    // res.send({
    //     numResults: 2,
    //     object : [
    //         {
    //     name: 'Sarthak',
    //     hobbies: [
    //         'Biking',
    //         'Swimming'
    //     ]

    // },{ name: 'Andrew',
    //     hobbies: [
    //         'Biking',
    //         'Swimming'
    //     ]
    // }
    //     ],
    //     about: 'This is made by Sarthak :D'
    // });
});

app.get('/about', (req,res)=>{
res.render('about.hbs',{
    pageTitle: 'About Us',
    currentYear: new Date().getFullYear()
});
});

app.listen(3000);