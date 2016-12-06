//
'use strict';

var url = require( 'url' );
var path = require( 'path' );
var fs = require( 'fs' );
var http = require( 'http' );
var express = require( 'express' );
var args = require( 'minimist' )( process.argv.slice( 2 ), { string: [ 'p', 'port' ] } );

var app = express();

console.log( typeof args.p, typeof args.port, typeof 8080 );

var port = args.p || args.port || 8080;

// add in cli port, hostname, etc

function log( req, res, next ) {
	req.time = Date.now();
	console.log( req.time + ' ' + req.method + ' ' + req.url );
	next();
}

app.use( log );
app.use( express.static( __dirname + '/' ) );

app.get( '/', function( req, res ){
	res.send( 'get received' );
} );

app.listen( port, function () {
	console.log("Example app listening on port " + port); // fix, real port
	//host?
} );
