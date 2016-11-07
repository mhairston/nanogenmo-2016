module.exports = function(grunt) {
  grunt.initConfig({

    pug: {
      node: {
        files: {
          'index.html': ['pages/*.pug']
        },
        options: {
          wrap: 'node'
        }
      }
    },

    clean: {
      build: {
        src: [ 'dest' ]
      },
    },

    watch: {
      pug: {
        files: 'pages/**/*.pug',
        tasks: [ 'build' ]
      }
    },

  });

  grunt.loadTasks['tasks'];
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('default',['build']);

  // define the tasks
  grunt.registerTask(
    'build', 
    'Compiles all of the assets and copies the files to the public directory.', 
    [ 'clean', 'pug' ]
  );

}
