var cleanConfig = require('./grunt/clean.json'),
    concatConfig = require('./grunt/concat.json'),
    copyConfig = require('./grunt/copy.json'),
    jasmine = require('./grunt/jasmine.json'),
    jshintConfig = require('./grunt/jshint.json'),
    uglifyConfig = require('./grunt/uglify.json'),
    watch = require('./grunt/watch.json');

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: cleanConfig,
        concat: concatConfig,
        copy: copyConfig,
        jasmine_nodejs: jasmine,
        jshint: jshintConfig,
        uglify: uglifyConfig,
        watch: watch
    });

    /* Load grunt task adapters */

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jasmine-nodejs');

    /* Register composite grunt tasks */

    grunt.registerTask('test', ['clean', 'concat', 'jshint', 'jasmine_nodejs']);
    grunt.registerTask('build', ['clean', 'concat', 'jshint', 'jasmine_nodejs', 'uglify']);
    grunt.registerTask('build-watch', ['build', 'watch']);

    grunt.registerTask('default', ['build']);
};
