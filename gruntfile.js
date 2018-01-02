
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded',
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
          'js/src/Main.js' ],
        dest: 'js/port25.js',
      }/*,
      dist: {
        src: [
          'js/src/utils/YextShare.js',
          'js/src/ontour/utils/*',
          'js/src/ontour/ontour-main.js'],
        dest: 'js/ontour.js',
      },*/
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



  // Default task(s).
  grunt.registerTask('default', ['sass']);

};