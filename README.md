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

##### Browser

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

...

watcher.stop();

`````

##### npm

`````
import WatchDom from 'watchdom';

let watcher = WatchDom();
watcher.observe( myElement, params );
watcher.notify( ( mutation ) => {
	// do something
} );

...

watcher.stop();


``````