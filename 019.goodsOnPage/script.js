let goods = {
  23455: {
    name: 'Apple',
    price: 44,
    img: 'images/apple.png',
    store: true
  },

  64632: {
    name: 'Orange',
    price: 66,
    img: 'images/orange.png',
    store: true
  },

  54266: {
    name: 'Grapes',
    price: 88,
    img: 'images/grapes.png',
    store: false    
  },

  75334: {
    name: 'Strawberry',
    price: 120,
    img: 'images/strawberry.png',
    store: true    
  }
};

console.log(goods);

let output = '';
for (let key in goods) {
  output += goods[key].name + ': <br>';
  output += `<img src ="${goods[key].img}">`;
  output += "<div class='price'>Price: " + goods[key].price + '</div>';
  if (goods[key].store) {
    output += '<div class="present">On store</div> <br>';
  } else {
    output += '<div class="absent">Not available</div> <br>';
  }
  output += '<hr>';
}

document.getElementById('output').innerHTML = output;