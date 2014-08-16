urljoin
========

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


 - Only the **protocol/port/host** will be saved
 - Get parameters will be **all** saved

author
========

 - yanni4night@gmail.com