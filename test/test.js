/* globals document, describe, domWatcher, chai */
//var expect = (chai && chai.expect) || require('chai').expect;

describe('domWatcher Tests', function() {

    var params = {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
    };

    before(function() {
        var example = document.createElement('div');
        var body = document.getElementsByTagName('body');
        example.id = 'example';
        body[0].appendChild(example);
    });

    it('mutableObserver', function(done) {
            var myElement = document.getElementById('example');
            var watcher = domWatcher();
            watcher.observe(myElement, params);
            watcher.notify(function(mutation) {
                expect(mutation.type).to.equal('childList');
                watcher.stop();
                done();
            });
            var myNewElement = document.createElement('div');
            myNewElement.innerHTML = 'test';
            myElement.appendChild(myNewElement);
        });

});
