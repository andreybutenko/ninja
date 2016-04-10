// from https://gist.github.com/jshawl/6225945

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options:{
                    style: 'compressed',
                    trace:true
                },
                files: {
                    'assets/css/styles.css' : 'assets/sass/main.scss'
                }
            }
        },
        autoprefixer:{
            dist:{
                files:{
                    'assets/css/styles.css': 'assets/css/styles.css'
                }
            }
        },
        watch: {
            css: {
                files: ['assets/sass/*.scss', 'assets/sass/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default',['watch']);
}
