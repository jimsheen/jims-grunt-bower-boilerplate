var fs = require('fs-extra')

fs.mkdirs('css/', function(err) {
    if (err) console.error(err)
});

bowercc_config = JSON.stringify({
    "scripts": {
        "postinstall": "wiredep -s dev/index.html"
    }
});

fs.writeFile(".bowerrc", bowercc_config, function(err) {
    if (err) {
        return console.log(err);
    }
})


fs.ensureFile('dev/js/libs/custom.js', function(err) {
    if (err) {
        console.log(err) // => null
    }

})

fs.ensureFile("dev/css/global.scss", function(err) {
    if (err) {
        return console.log(err);
    }
});

fs.ensureDir('build/css/', function(err) {
    if (err) {
        return console.log(err);
    }
});

fs.ensureDir('build/js/', function(err) {
    if (err) {
        return console.log(err);
    }
})