var server = require( 'http' ).createServer();
var url = require( 'url' );
var ws = require( 'ws' );
var wsServer = new ws.Server( { server: httpServer } );
var express = require( 'express' );
var app = express();

const port = 4080;

app.use( function ( request, response ) {
	response.send( { message: "hello" } );
} );

wsServer.on('connection', function connection( socket ) {
	var location = url.parse( socket.upgradeReq.url, true );
	// you might use location.query.access_token to authenticate or share sessions
	// or ws.upgradeReq.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

	socket.on( 'message', function incoming( message ) {
		console.log( 'received: %s', message );
	} );

	socket.send( 'something' );
} );

httpServer.on( 'request', app );
httpServer.listen(port, function () { console.log('Listening on ' + httpServer.address().port) });
