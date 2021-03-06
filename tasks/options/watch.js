module.exports = {
    options: {
        livereload: true,
    },
    scripts: {
        files: ['dev/js/*.js'],
        tasks: ['jshint', 'uglify', 'wiredep'],
        options: {
            spawn: false,
        }
    },
    css: {
        files: ['dev/sass/*.scss'],
        tasks: ['sass', 'wiredep'],
        options: {
            spawn: false,
        }
    },
    images: {
        files: ['dev/images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
            spawn: false,
        }
    },
    html: {
        files: ['./dev/**/*.html'],
        tasks: [],
        options: {
            spawn: false
        }
    },
    wiredep: {
        files: ['bower_components/**', 'dev/css/**'],
        tasks: ['wiredep'],
        options: {
            spawn: false,
        }
    }
}
