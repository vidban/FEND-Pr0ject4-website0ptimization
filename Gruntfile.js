/*global module:false*/

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    uglify: {
      options: {
        mangle: false
      },
      my_target:{
        files: {
          'views/dest/js/main.min.js' : 'views/src/js/main.js'
        }
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['views/src/js/main.js']
      }
    },
    inline: {
        dist: {
          options:{
            inlineTagAttributes:{
              css: 'data-inlined="true"'
            }
          },
          src: 'index.html',
          dest: 'index.html'
        }
    },
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
                    name: 'large',
                    width: '640'
                  },
                  {
                    name: 'medium',
                    width: '320'
                  },
                  {
                    name: 'small',
                    height: '130'
                  },
                  {
                    name: 'smaller',
                    width: '115'
                  }
            ]
        },
        files: [{
          expand: true,
          cwd: 'views/src/images/',
          src: ['pizzeria.jpg', 'pizza.png'],
          dest: 'views/dest/images/'
        }]
      }
    },
    imagemin: {
      dynamic: {
        files: [
        {
          expand: true,
          cwd: 'views/dest/images/',
          src: ['pizzeria-small.jpg'],
          dest: 'views/dest/images/min/'
        }]
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'views/dest/css/style.min.css': ['views/src/css/style.css', 'views/src/css/bootstrap-grid.css']
        }
      }
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task.
  grunt.registerTask('default', ['jshint']);

};
