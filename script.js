/** Add any JavaScript you need to this file. */
function display_intro() {
  var subtitle = document.querySelector('#subtitle');
  subtitle.innerHTML = 'Introduction';
  var tb = document.querySelector('#write_in_text');
  var tb_exist_body = tb.querySelector('tbody');
  if (tb_exist_body) tb.removeChild(tb_exist_body);
  var tb_body = document.createElement('tbody');
  var row = document.createElement('tr');
    var col = document.createElement('td');
    var temp;
      var text = '';
      text +=
        'Highlands Coffee is a famous coffee brand which is introduced to the public the the first time in 1998.';
      text +=
        'It is originated in Vietnam by a Vietnamese American David Thai in 1998. He is inspired by the famous American brand - Starbucks.';
      text += 'There are more than 80 coffee shops of this brands in Vietnam.';
      text +=
        'Being interested with this merchandise, a new coffee shop of this brand is opened in Toronto.';
      text += 'Information is taken from Wikipedia.';
      temp = document.createTextNode(text);
    col.appendChild(temp);
    row.appendChild(col);
  
  tb_body.appendChild(row);
  tb.appendChild(tb_body);

  var img_cont = document.querySelector("#theme");
  var ima = document.createElement('img');
  ima.src = 'images/theme.jpg';
  ima.style = "max-width:100%; max-height:100%;"
  img_cont.appendChild(ima);

  //    var pic = document.querySelector("#theme");
  //  var picture = document.createElement("img");
  //picture.src = "images/theme.jpg";
  //pic.style = "text-align:center;";
  //pic.appendChild(picture);
}
function display_d1() {
  var con = document.querySelector('#theme');
  var pic_exist = con.querySelector('img');
  if (pic_exist) con.removeChild(pic_exist);

  var subtitle = document.querySelector('#subtitle');
  subtitle.innerHTML = 'Drink';

  var tb = document.querySelector('#write_in_text');
  var tb_exist_body = tb.querySelector('tbody');
  if (tb_exist_body) tb.removeChild(tb_exist_body);
  var tb_body = document.createElement('tbody');
  var row2 = document.createElement('tr');
  for (var i = 0; i < 2; i++) {
    var col = document.createElement('td');
    var temp;
    if (i === 0) {
      col.style = 'text-align:center; width:50%;';
      temp = document.createElement('img');
      temp.src = 'images/d1.png';
      temp.alt = 'Error Image';
    } else if (i === 1) {
      temp = document.createElement('div');
      var para1 = document.createElement('p');
      var para = document.createElement('p');
      para.style = 'font-size:150%; color:black;';
      var b = document.createElement('b');
      var text = document.createTextNode('Black Coffee');
      b.appendChild(text);
      para.appendChild(b);
      temp.appendChild(para);
      var text1 = document.createTextNode(
        'Description: The Vietnames Espresso Coffee Shot mixed with Ice will make your day more energy than ever.'
      );
      para1.appendChild(text1);
      var para2 = document.createElement('p');
      var text2 = document.createTextNode('Price: 3.99$');
      para2.appendChild(text2);
      temp.appendChild(para1);
      temp.appendChild(para2);
    }
    col.appendChild(temp);
    row2.appendChild(col);
  }
  tb_body.appendChild(row2);
  tb.appendChild(tb_body);
}
function display_d2() {
  var con = document.querySelector('#theme');
  var pic_exist = con.querySelector('img');
  if (pic_exist) con.removeChild(pic_exist);
  var subtitle = document.querySelector('#subtitle');
  subtitle.innerHTML = 'Drink';

  var tb = document.querySelector('#write_in_text');
  var tb_exist_body = tb.querySelector('tbody');
  if (tb_exist_body) tb.removeChild(tb_exist_body);
  var tb_body = document.createElement('tbody');

  var row2 = document.createElement('tr');
  for (var i = 0; i < 2; i++) {
    var col = document.createElement('td');
    var temp;
    if (i === 0) {
      col.style = 'text-align:center; width:50%;';
      temp = document.createElement('img');
      temp.src = 'images/d2.png';
      temp.alt = 'Error Image';
    } else if (i === 1) {
      temp = document.createElement('div');
      var para1 = document.createElement('p');
      var para = document.createElement('p');
      para.style = 'font-size:150%; color:black;';
      var b = document.createElement('b');
      var text = document.createTextNode('Black Coffee with Condensed Milk');
      b.appendChild(text);
      para.appendChild(b);
      temp.appendChild(para);
      var text1 = document.createTextNode(
        'Description: The Vietnamese Espresso Shots mixed with Sweet Condensed Milk is the most popular type of Coffe in Vietnam. This drink will make you fall in love for the first time trying'
      );
      para1.appendChild(text1);
      var para2 = document.createElement('p');
      var text2 = document.createTextNode('Price: 4.99$');
      para2.appendChild(text2);
      temp.appendChild(para1);
      temp.appendChild(para2);
    }
    col.appendChild(temp);
    row2.appendChild(col);
  }
  tb_body.appendChild(row2);
  tb.appendChild(tb_body);
}
function display_d3() {
  var con = document.querySelector('#theme');
  var pic_exist = con.querySelector('img');
  if (pic_exist) con.removeChild(pic_exist);
  var subtitle = document.querySelector('#subtitle');
  subtitle.innerHTML = 'Drink';

  var tb = document.querySelector('#write_in_text');
  var tb_exist_body = tb.querySelector('tbody');
  if (tb_exist_body) tb.removeChild(tb_exist_body);
  var tb_body = document.createElement('tbody');

  var row2 = document.createElement('tr');
  for (var i = 0; i < 2; i++) {
    var col = document.createElement('td');
    var temp;
    if (i === 0) {
      col.style = 'text-align:center; width:50%;';
      temp = document.createElement('img');
      temp.src = 'images/d3.png';
      temp.alt = 'Error Image';
    } else if (i === 1) {
      temp = document.createElement('div');
      var para1 = document.createElement('p');
      var para = document.createElement('p');
      para.style = 'font-size:150%; color:black;';
      var b = document.createElement('b');
      var text = document.createTextNode('Peach Tea');
      b.appendChild(text);
      para.appendChild(b);
      temp.appendChild(para);
      var text1 = document.createTextNode(
        'Description: In an extremely hot weather, this drink boosts you up with the sweet flavours of the peaces and the Golden Jelly'
      );
      para1.appendChild(text1);
      var para2 = document.createElement('p');
      var text2 = document.createTextNode('Price: 4.99$');
      para2.appendChild(text2);
      temp.appendChild(para1);
      temp.appendChild(para2);
    }
    col.appendChild(temp);
    row2.appendChild(col);
  }
  tb_body.appendChild(row2);
  tb.appendChild(tb_body);
}
function display_d4() {
  var con = document.querySelector('#theme');
  var pic_exist = con.querySelector('img');
  if (pic_exist) con.removeChild(pic_exist);
  var subtitle = document.querySelector('#subtitle');
  subtitle.innerHTML = 'Drink';

  var tb = document.querySelector('#write_in_text');
  var tb_exist_body = tb.querySelector('tbody');
  if (tb_exist_body) tb.removeChild(tb_exist_body);
  var tb_body = document.createElement('tbody');
  var row2 = document.createElement('tr');
  for (var i = 0; i < 2; i++) {
    var col = document.createElement('td');
    var temp;
    if (i === 0) {
      col.style = 'text-align:center; width:50%;';
      temp = document.createElement('img');
      temp.src = 'images/d4.png';
      temp.alt = 'Error Image';
    } else if (i === 1) {
      temp = document.createElement('div');
      var para1 = document.createElement('p');
      var para = document.createElement('p');
      para.style = 'font-size:150%; color:black;';
      var b = document.createElement('b');
      var text = document.createTextNode('Lychee Tea');
      b.appendChild(text);
      para.appendChild(b);
      temp.appendChild(para);
      var text1 = document.createTextNode(
        "Description: This type of fruit is not so much popular in our country Canada, right? Don't worry, give a try on this drink and the flavours will not disappoint you."
      );
      para1.appendChild(text1);
      var para2 = document.createElement('p');
      var text2 = document.createTextNode('Price: 4.99$');
      para2.appendChild(text2);
      temp.appendChild(para1);
      temp.appendChild(para2);
    }
    col.appendChild(temp);
    row2.appendChild(col);
  }
  tb_body.appendChild(row2);
  tb.appendChild(tb_body);
}
function display_d5() {
  var con = document.querySelector('#theme');
  var pic_exist = con.querySelector('img');
  if (pic_exist) con.removeChild(pic_exist);
  var subtitle = document.querySelector('#subtitle');
  subtitle.innerHTML = 'Drink';

  var tb = document.querySelector('#write_in_text');
  var tb_exist_body = tb.querySelector('tbody');
  if (tb_exist_body) tb.removeChild(tb_exist_body);
  var tb_body = document.createElement('tbody');

  var row2 = document.createElement('tr');
  for (var i = 0; i < 2; i++) {
    var col = document.createElement('td');
    var temp;
    if (i === 0) {
      col.style = 'text-align:center; width:50%;';
      temp = document.createElement('img');
      temp.src = 'images/d5.png';
      temp.alt = 'Error Image';
    } else if (i === 1) {
      temp = document.createElement('div');
      var para1 = document.createElement('p');
      var para = document.createElement('p');
      para.style = 'font-size:150%; color:black;';
      var b = document.createElement('b');
      var text = document.createTextNode('Matcha Frappucino');
      b.appendChild(text);
      para.appendChild(b);
      temp.appendChild(para);
      var text1 = document.createTextNode(
        'Description: The most popular drink for teenagers and children is here. Matcha Frappucino mixes with Green Tea Jelly and topped with Whipped Cream.'
      );
      para1.appendChild(text1);
      var para2 = document.createElement('p');
      var text2 = document.createTextNode('Price: 5.49$');
      para2.appendChild(text2);
      temp.appendChild(para1);
      temp.appendChild(para2);
    }
    col.appendChild(temp);
    row2.appendChild(col);
  }
  tb_body.appendChild(row2);
  tb.appendChild(tb_body);
}
function display_f1() {
  var con = document.querySelector('#theme');
  var pic_exist = con.querySelector('img');
  if (pic_exist) con.removeChild(pic_exist);
  var subtitle = document.querySelector('#subtitle');
  subtitle.innerHTML = 'Food';

  var tb = document.querySelector('#write_in_text');
  var tb_exist_body = tb.querySelector('tbody');
  if (tb_exist_body) tb.removeChild(tb_exist_body);
  var tb_body = document.createElement('tbody');
  var row2 = document.createElement('tr');
  for (var i = 0; i < 2; i++) {
    var col = document.createElement('td');
    var temp;
    if (i === 0) {
      col.style = 'text-align:center; width:50%;';
      temp = document.createElement('img');
      temp.src = 'images/f1.png';
      temp.alt = 'Error Image';
    } else if (i === 1) {
      temp = document.createElement('div');
      var para1 = document.createElement('p');
      var para = document.createElement('p');
      para.style = 'font-size:150%; color:black;';
      var b = document.createElement('b');
      var text = document.createTextNode('Traditional Banh Mi');
      b.appendChild(text);
      para.appendChild(b);
      temp.appendChild(para);
      var text1 = document.createTextNode(
        'Description: Traditional Vietnamese Banh Mi with vegetables, French pate, Vietname style Ham'
      );
      para1.appendChild(text1);
      var para2 = document.createElement('p');
      var text2 = document.createTextNode('Price: 5.99$');
      para2.appendChild(text2);
      temp.appendChild(para1);
      temp.appendChild(para2);
    }
    col.appendChild(temp);
    row2.appendChild(col);
  }
  tb_body.appendChild(row2);
  tb.appendChild(tb_body);
}
function display_f2() {
  var con = document.querySelector('#theme');
  var pic_exist = con.querySelector('img');
  if (pic_exist) con.removeChild(pic_exist);
  var subtitle = document.querySelector('#subtitle');
  subtitle.innerHTML = 'Food';

  var tb = document.querySelector('#write_in_text');
  var tb_exist_body = tb.querySelector('tbody');
  if (tb_exist_body) tb.removeChild(tb_exist_body);
  var tb_body = document.createElement('tbody');

  var row2 = document.createElement('tr');
  for (var i = 0; i < 2; i++) {
    var col = document.createElement('td');
    var temp;
    if (i === 0) {
      col.style = 'text-align:center; width:50%;';
      temp = document.createElement('img');
      temp.src = 'images/f2.png';
      temp.alt = 'Error Image';
    } else if (i === 1) {
      temp = document.createElement('div');
      var para1 = document.createElement('p');
      var para = document.createElement('p');
      para.style = 'font-size:150%; color:black;';
      var b = document.createElement('b');
      var text = document.createTextNode('Meatball Banh Mi');
      b.appendChild(text);
      para.appendChild(b);
      temp.appendChild(para);
      var text1 = document.createTextNode(
        'Description: Meatballs Banh Mi with vegetables, meatbals and sweet spicy tomator sauce.'
      );
      para1.appendChild(text1);
      var para2 = document.createElement('p');
      var text2 = document.createTextNode('Price: 5.99$');
      para2.appendChild(text2);
      temp.appendChild(para1);
      temp.appendChild(para2);
    }
    col.appendChild(temp);
    row2.appendChild(col);
  }
  tb_body.appendChild(row2);
  tb.appendChild(tb_body);
}
function display_f3() {
  var con = document.querySelector('#theme');
  var pic_exist = con.querySelector('img');
  if (pic_exist) con.removeChild(pic_exist);
  var subtitle = document.querySelector('#subtitle');
  subtitle.innerHTML = 'Food';

  var tb = document.querySelector('#write_in_text');
  var tb_exist_body = tb.querySelector('tbody');
  if (tb_exist_body) tb.removeChild(tb_exist_body);
  var tb_body = document.createElement('tbody');
  var row2 = document.createElement('tr');
  for (var i = 0; i < 2; i++) {
    var col = document.createElement('td');
    var temp;
    if (i === 0) {
      col.style = 'text-align:center; width:50%;';
      temp = document.createElement('img');
      temp.src = 'images/f3.png';
      temp.alt = 'Error Image';
    } else if (i === 1) {
      temp = document.createElement('div');
      var para1 = document.createElement('p');
      var para = document.createElement('p');
      para.style = 'font-size:150%; color:black;';
      var b = document.createElement('b');
      var text = document.createTextNode('Chiken Banh Mi');
      b.appendChild(text);
      para.appendChild(b);
      temp.appendChild(para);
      var text1 = document.createTextNode(
        'Description: Chicken Banh Mi with vegetables, grilled chicken topped with special sauces.'
      );
      para1.appendChild(text1);
      var para2 = document.createElement('p');
      var text2 = document.createTextNode('Price: 5.99$');
      para2.appendChild(text2);
      temp.appendChild(para1);
      temp.appendChild(para2);
    }
    col.appendChild(temp);
    row2.appendChild(col);
  }
  tb_body.appendChild(row2);
  tb.appendChild(tb_body);
}

function display_f4() {
  var con = document.querySelector('#theme');
  var pic_exist = con.querySelector('img');
  if (pic_exist) con.removeChild(pic_exist);
  var subtitle = document.querySelector('#subtitle');
  subtitle.innerHTML = 'Food';

  var tb = document.querySelector('#write_in_text');
  var tb_exist_body = tb.querySelector('tbody');
  if (tb_exist_body) tb.removeChild(tb_exist_body);
  var tb_body = document.createElement('tbody');

  var row2 = document.createElement('tr');
  for (var i = 0; i < 2; i++) {
    var col = document.createElement('td');
    var temp;
    if (i === 0) {
      col.style = 'text-align:center; width:50%;';
      temp = document.createElement('img');
      temp.src = 'images/f4.png';
      temp.alt = 'Error Image';
    } else if (i === 1) {
      temp = document.createElement('div');
      var para1 = document.createElement('p');
      var para = document.createElement('p');
      para.style = 'font-size:150%; color:black;';
      var b = document.createElement('b');
      var text = document.createTextNode('Beef Banh Mi');
      b.appendChild(text);
      para.appendChild(b);
      temp.appendChild(para);
      var text1 = document.createTextNode(
        'Description: Beef Banh Mi with vegetables, seasoned grilled beef with special sauces.'
      );
      para1.appendChild(text1);
      var para2 = document.createElement('p');
      var text2 = document.createTextNode('Price: 5.99$');
      para2.appendChild(text2);
      temp.appendChild(para1);
      temp.appendChild(para2);
    }
    col.appendChild(temp);
    row2.appendChild(col);
  }
  tb_body.appendChild(row2);
  tb.appendChild(tb_body);
}

function display_s1() {
  var con = document.querySelector('#theme');
  var pic_exist = con.querySelector('img');
  if (pic_exist) con.removeChild(pic_exist);
  var subtitle = document.querySelector('#subtitle');
  subtitle.innerHTML = 'Dessert';

  var tb = document.querySelector('#write_in_text');
  var tb_exist_body = tb.querySelector('tbody');
  if (tb_exist_body) tb.removeChild(tb_exist_body);
  var tb_body = document.createElement('tbody');

  var row2 = document.createElement('tr');
  for (var i = 0; i < 2; i++) {
    var col = document.createElement('td');
    var temp;
    if (i === 0) {
      col.style = 'text-align:center; width:50%;';
      temp = document.createElement('img');
      temp.src = 'images/s1.png';
      temp.alt = 'Error Image';
    } else if (i === 1) {
      temp = document.createElement('div');
      var para1 = document.createElement('p');
      var para = document.createElement('p');
      para.style = 'font-size:150%; color:black;';
      var b = document.createElement('b');
      var text = document.createTextNode('Cheese Cake');
      b.appendChild(text);
      para.appendChild(b);
      temp.appendChild(para);
      var text1 = document.createTextNode('Description: Popular New York Cheese Cake');
      para1.appendChild(text1);
      var para2 = document.createElement('p');
      var text2 = document.createTextNode('Price: 3.99$');
      para2.appendChild(text2);
      temp.appendChild(para1);
      temp.appendChild(para2);
    }
    col.appendChild(temp);
    row2.appendChild(col);
  }
  tb_body.appendChild(row2);
  tb.appendChild(tb_body);
}
function display_s2() {
  var con = document.querySelector('#theme');
  var pic_exist = con.querySelector('img');
  if (pic_exist) con.removeChild(pic_exist);
  var subtitle = document.querySelector('#subtitle');
  subtitle.innerHTML = 'Dessert';

  var tb = document.querySelector('#write_in_text');
  var tb_exist_body = tb.querySelector('tbody');
  if (tb_exist_body) tb.removeChild(tb_exist_body);
  var tb_body = document.createElement('tbody');
  var row2 = document.createElement('tr');
  for (var i = 0; i < 2; i++) {
    var col = document.createElement('td');
    var temp;
    if (i === 0) {
      col.style = 'text-align:center; width:50%;';
      temp = document.createElement('img');
      temp.src = 'images/s2.png';
      temp.alt = 'Error Image';
    } else if (i === 1) {
      temp = document.createElement('div');
      var para1 = document.createElement('p');
      var para = document.createElement('p');
      para.style = 'font-size:150%; color:black;';
      var b = document.createElement('b');
      var text = document.createTextNode('Peach Tea');
      b.appendChild(text);
      para.appendChild(b);
      temp.appendChild(para);
      var text1 = document.createTextNode(
        'Description: Special Peace Cake made from 100% peaches from tropicals'
      );
      para1.appendChild(text1);
      var para2 = document.createElement('p');
      var text2 = document.createTextNode('Price: 3.99$');
      para2.appendChild(text2);
      temp.appendChild(para1);
      temp.appendChild(para2);
    }
    col.appendChild(temp);
    row2.appendChild(col);
  }
  tb_body.appendChild(row2);
  tb.appendChild(tb_body);
}
function display_s3() {
  var con = document.querySelector('#theme');
  var pic_exist = con.querySelector('img');
  if (pic_exist) con.removeChild(pic_exist);
  var subtitle = document.querySelector('#subtitle');
  subtitle.innerHTML = 'Dessert';

  var tb = document.querySelector('#write_in_text');
  var tb_exist_body = tb.querySelector('tbody');
  if (tb_exist_body) tb.removeChild(tb_exist_body);
  var tb_body = document.createElement('tbody');
  var row2 = document.createElement('tr');
  for (var i = 0; i < 2; i++) {
    var col = document.createElement('td');
    var temp;
    if (i === 0) {
      col.style = 'text-align:center; width:50%;';
      temp = document.createElement('img');
      temp.src = 'images/s3.png';
      temp.alt = 'Error Image';
    } else if (i === 1) {
      temp = document.createElement('div');
      var para1 = document.createElement('p');
      var para = document.createElement('p');
      para.style = 'font-size:150%; color:black;';
      var b = document.createElement('b');
      var text = document.createTextNode('Chocolate Cake');
      b.appendChild(text);
      para.appendChild(b);
      temp.appendChild(para);
      var text1 = document.createTextNode(
        'Description: Chocolate Cake with special cacao flavours from Europeans'
      );
      para1.appendChild(text1);
      var para2 = document.createElement('p');
      var text2 = document.createTextNode('Price: 3.99$');
      para2.appendChild(text2);
      temp.appendChild(para1);
      temp.appendChild(para2);
    }
    col.appendChild(temp);
    row2.appendChild(col);
  }
  tb_body.appendChild(row2);
  tb.appendChild(tb_body);
}
window.onload = function() {
  display_intro();

  var d1 = document.querySelector('#drink1');
  d1.addEventListener('click', display_d1);

  var d2 = document.querySelector('#drink2');
  d2.addEventListener('click', display_d2);

  var d3 = document.querySelector('#drink3');
  d3.addEventListener('click', display_d3);

  var d4 = document.querySelector('#drink4');
  d4.addEventListener('click', display_d4);

  var d5 = document.querySelector('#drink5');
  d5.addEventListener('click', display_d5);

  var f1 = document.querySelector('#food1');
  f1.addEventListener('click', display_f1);

  var f2 = document.querySelector('#food2');
  f2.addEventListener('click', display_f2);

  var f3 = document.querySelector('#food3');
  f3.addEventListener('click', display_f3);

  var f4 = document.querySelector('#food4');
  f4.addEventListener('click', display_f4);

  var s1 = document.querySelector('#dessert1');
  s1.addEventListener('click', display_s1);

  var s2 = document.querySelector('#dessert2');
  s2.addEventListener('click', display_s2);

  var s3 = document.querySelector('#dessert3');
  s3.addEventListener('click', display_s3);
};
