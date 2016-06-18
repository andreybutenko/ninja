var Metalsmith = require('metalsmith');
var templates = require('metalsmith-templates');
var markdown = require('metalsmith-markdown');
var collections = require('metalsmith-collections');
var permalinks  = require('metalsmith-permalinks');

var serve = require('metalsmith-serve');

var Handlebars = require('handlebars');
var fs = require('fs');

Handlebars.registerPartial('pre-head', fs.readFileSync(__dirname + '/templates/partials/util/pre-head.hbt').toString());
Handlebars.registerPartial('post-head', fs.readFileSync(__dirname + '/templates/partials/util/post-head.hbt').toString());
Handlebars.registerPartial('foot', fs.readFileSync(__dirname + '/templates/partials/util/foot.hbt').toString());

Metalsmith(__dirname)
    .source('./src')
    .destination('./build')

    .use(templates('handlebars'))
    .use(markdown())
    .use(collections({
        pages: {
            pattern: 'content/portfolio/*.md'
        }
    }))
    .use(permalinks({
        pattern: ':collection/:title'
    }))
    .use(serve())

    .build(function(err) {
        if(err) {
            console.log(err);
        }
        else {
            console.log('Build completed without fail');
        }
    })
