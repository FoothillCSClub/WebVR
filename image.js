var qs = document.querySelector.bind( document );

// console.log( qs( '#field' ) );
qs( '#field' ).addEventListener( 'load', () => console.log( 'field load' ) );

// qs( '#field' ).addEventListener( 'loaded', () => console.log( 'field loaded' ) );
