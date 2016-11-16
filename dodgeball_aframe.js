AFRAME.registerComponent('scale-on-click', {
	schema: {
		to: {default: '2 2 2'}
	},
	init: function () {
		var data = this.data;
		this.el.addEventListener('click', function () {
			this.setAttribute('scale', data.to);
		});
	}
});

var qs = document.querySelector.bind( document );

document.querySelector( 'a-assets' ).addEventListener( 'loaded', () => console.log( 'a-assets loaded' ) );
document.querySelector( 'a-assets' ).addEventListener( 'timeout', () => console.log( 'a-assets timed out' ) );

console.log( document.querySelector( '#dirt' ) );
document.querySelector( '#dirt' ).addEventListener( 'load', () => console.log( 'dirt loaded' ) );
// document.querySelector( '#goats' ).addEventListener( 'load', function () { console.log( 'goats loaded' ) } );
