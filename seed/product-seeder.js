var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://www.beadmagazine.co.uk/binder.jpg',
        title: 'Bead Binder',
        description: 'gf dsjf gdsfhjdgs fj dsgfj gdsfgsdjgfsgfjsgf dsg',
        price: 15
    }),
    new Product({
        imagePath: 'http://www.beadmagazine.co.uk/binder.jpg',
        title: 'Bead Binder2',
        description: 'gfhg hg hfghfgh gh  hf hj gdsfgsdjgfsgfjsgf dsg',
        price: 15
    }),
    new Product({
        imagePath: 'http://www.beadmagazine.co.uk/binder.jpg',
        title: 'Bead Binder3',
        description: 'gf dsjf gd gg hgfh f hfgfgsdjgfsgfjsgf dsg',
        price: 15
    }),
    new Product({
        imagePath: 'http://www.beadmagazine.co.uk/binder.jpg',
        title: 'Bead Binder4',
        description: 'gf d h hgf hfghfgh  hfghsdjgfsgfjsgf dsg',
        price: 15
    }),
    new Product({
        imagePath: 'http://www.beadmagazine.co.uk/binder.jpg',
        title: 'Bead Binder5',
        description: 'fdh hfgh fghsfhjdgs fj ds fghh hhgsgfjsgf dsg',
        price: 15
    })
];
var done = 0;

for (var i=0; i < products.length; i++){
    products[i].save(function(err, result) {
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
