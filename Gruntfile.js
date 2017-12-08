/**
 * Created by JC
 */
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        wiredep: {
            task: {
                src: ['src/index.html']
            }
        },
        includeSource: {
            options: {
                basePath: "src"
            },
            mytarget: {
                files: {
                    'src/index.html': 'src/index.html'
                }
            }
        },
        watch: {
            js: {
                files: [
                        'src/components/**/*.js',
                        'src/modules/**/*.js',
                        'src/components/**/*.css',
                        'src/modules/**/*.css',
                        'bower.json'
                    ],
                tasks: ['develop'],
                options: {
                    event: ['added', 'deleted'],
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('develop', ['wiredep', 'includeSource']);
    grunt.registerTask('developWatch', ['watch']);
};