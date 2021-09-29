"use strict";

var canvas;
var gl;
var points = [];
var colors = [];

var axis = 0;
var theta = [ 0, 0, 0 ];

var flag = false;

var thetaLoc;

window.onload = function init() {
    canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL isn't available");
    }

}
