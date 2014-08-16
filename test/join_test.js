'use strict';

var grunt = require('grunt');
var join = require('../index');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.url_join = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  join: function(test) {
    test.deepEqual('', join(), 'Empty argument');
    test.deepEqual('http://yanni4night.com/static/index/main.css', join("http://yanni4night.com", 'static/css', '../index', 'main.css'), '../');
    test.deepEqual('http://yanni4night.com/static/css/main.css', join("http://yanni4night.com/", '/static/css/', '/main.css'), '/');
    test.deepEqual('http://yanni4night.com/static/css/main.css?aa=60', join("http://yanni4night.com?aa=60", 'static/css', '', 'main.css'), 'Empty ignored');
    test.deepEqual('http://yanni4night.com/static/css/main.css?aa=60', join("http://yanni4night.com", 'static/css', '', 'main.css?aa=60'), 'Query');
    test.deepEqual('/static/css/search/main.css?aa=60&bb=70&cc=80&dd=90', join("/?aa=60", 'static/css?bb=70', 'search?cc=80', 'main.css?dd=90'), 'Multiple queries');
    test.deepEqual('static/css/main.css?aa=60',join('static/css','main.css','?aa=60'),'single get');
    test.done();
  }
};