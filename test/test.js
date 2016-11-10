var qs = document.querySelector.bind( document );

// A-Frame 'loaded' event, because <a-assets> is an A-Frame node
qs( 'a-assets' ).addEventListener( 'loaded', () => console.log( 'a-assets loaded' ) );

// Standard DOM 'load' event, because #field is an <img>
qs( '#field' ).addEventListener( 'load', () => console.log( '#field loaded' ) );
