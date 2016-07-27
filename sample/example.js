// controls
var myElement = document.getElementById( "example" );
var add = $('#add');
var clean = $('#clean');

add.click(function(e) {
  e.preventDefault();
  var element = document.createElement('div');
  element.innerHTML = 'new element';
  myElement.appendChild(element); 
});

clean.click(function(e) {
  e.preventDefault(); 
  myElement.innerHTML = ''; 
});

// usage
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
} );
