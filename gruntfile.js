
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task
      dist: {                            // Target
        options: {
          style: 'compressed',
          loadPath: [
            require('node-bourbon').includePaths,
            require('node-neat').includePaths]
        },
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      js: {
        files: [
          'js/src/utils/*',
          'js/src/Main.js' ],
        tasks: ['concat', 'uglify']
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'js/src/main.js' ],
        dest: 'js/port25.js',
      }
    },
    uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'js/port25.min.js': ['js/port25.js']
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');



  // Default task(s).
  grunt.registerTask('default', ['sass']);

};