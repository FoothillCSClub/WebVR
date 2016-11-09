//
'use strict';

var url = require('url');
var path = require('path');
var fs = require('fs');
var http = require('http');
var express = require('express');

var host = '';
var port = 80;

var app = express();

// const args = require( 'command-line-parser' )();

// const port = args.port;

// const {
// 	// v,
// 	// debug = false,
// 	// host = 'default.com',
// 	port = '80'
// 	// _args: freeArgs = []
// } = require( 'command-line-parser' )();

function log( req, res, next ) {
	req.time = Date.now();
	console.log( req.time + ' ' + req.method + ' ' + req.url );
	next();
}

app.use( log );
app.use( express.static( __dirname, { index: 'dodgeball.html' } ) );
// app.use( express.static( '../client', { index: 'diffindex.html' } ) );
//app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder

// app.get( '/', function( req, res ){
// 	res.send( 'get received' );
// } );

// app.post( '/', function ( req, res ) {
// 	res.send("post received")
// });

app.listen( port, function () {
	console.log("Example app listening on port " + port); // fix, real port
	//host?
});
