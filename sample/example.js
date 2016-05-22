// Use
var myElement = document.getElementById( "example" );

var params = {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
};

var watcher = domWatcher();
watcher.observe( myElement, params );
watcher.notify( function( mutation ) {
  console.log( "mutation", mutation );
  watcher.stop();
} );
