var calcExports = require('./calc.js');

var v1obj = document.getElementById("v1");
var v2obj = document.getElementById("v2");
var btobj = document.getElementById("bt");
var resobj = document.getElementById("res");

btobj.onclick = function () {
    res.value = (v1obj.value-0) + (v2obj.value-0);
}