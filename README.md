urljoin
========
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Support us][gittip-image]][gittip-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Build status][appveyor-image]][appveyor-url] [![Built with Grunt][grunt-image]][grunt-url]

Join the urls like joining the paths


usage
========

    var urljoin = require('urljoin');

    //http://yanni4night.com/static/index/main.css
    urljoin("http://yanni4night.com", 'static/css', '../index', 'main.css');
    //http://yanni4night.com/static/css/main.css
    urljoin("http://yanni4night.com/", '/static/css/', '/main.css');
    //http://yanni4night.com/static/css/main.css?aa=60
    urljoin("http://yanni4night.com?aa=60", 'static/css', '', 'main.css');
    //http://yanni4night.com/static/css/main.css?aa=60
    urljoin("http://yanni4night.com", 'static/css', '', 'main.css?aa=60');
    ///static/css/search/main.css?aa=60&bb=70&cc=80&dd=90
    urljoin("/?aa=60", 'static?bb=70', 'css?cc=80', 'main.css?dd=90'));
    //static/css/main.css?aa=60
    urljoin('static/css','main.css','?aa=60');
    //http://yanni4night.com/static/build
    urljoin('http://yanni4night.com/static','http://google.com/build')


 - Only the **protocol/port/host** in the first part will be saved
 - Get parameters will be **all** saved

author
========

 - yanni4night@gmail.com


[gittip-url]: https://www.gittip.com/yanni4night/
[gittip-image]: http://img.shields.io/gittip/yanni4night.svg

[downloads-image]: http://img.shields.io/npm/dm/urljoin.svg
[npm-url]: https://npmjs.org/package/urljoin
[npm-image]: http://img.shields.io/npm/v/urljoin.svg

[travis-url]: https://travis-ci.org/yanni4night/urljoin
[travis-image]: http://img.shields.io/travis/yanni4night/urljoin.svg

[coveralls-url]: https://coveralls.io/r/yanni4night/urljoin
[coveralls-image]: http://img.shields.io/coveralls/yanni4night/urljoin/master.svg

[grunt-url]:http://gruntjs.com/
[grunt-image]: http://img.shields.io/badge/BUILT%20WITH-GRUNT-yellow.svg

[appveyor-image]:https://ci.appveyor.com/api/projects/status/ildoo8h6ewphy8we?svg=true
[appveyor-url]:https://ci.appveyor.com/project/yanni4night/urljoin
