import $ from 'jquery'

import "./css/1.less"
// import 'css/1'
// import 'css/1'

$(function () {
  $('li:odd').css('backgroundColor', 'blue')
  $('li:even').css('backgroundColor', 'lightblue')
})
