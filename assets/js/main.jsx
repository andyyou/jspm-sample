import $ from 'jquery';
import React from 'react';

import Cat from './lib/Cat';
import Dog from './components/Dog.jsx!'

var cat = new Cat("Mily");

$(function() {
  $(".animal").text(cat.yell());
});

React.render(<Dog name="Wally"/>, document.getElementById("dog"));
/* 警告: Warning: `require("react").render` is deprecated. Please use `require("react-dom").render` instead.*/
