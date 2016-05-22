## WatchDom

*WatchDom* is a **MutationObserver** chainable library dom observer.


## Install

**npm**

````
$ npm install watchdom
````

**bower**

`````
$ bower install watchdom
`````

## Usage

`````
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
	// do something
} );

....

watcher.stop();

`````
