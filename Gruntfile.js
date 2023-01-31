module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    sass: {
      dist: {
        options: {
          sourcemap: 'none',
          livereload: {
            options: {
              open: 'http://mel.local:80',
            },
            host: 'http://mel.local/',
            port: 80,
          }
        },

        files: [
          {
            expand: true,
            cwd: "assets/scss",
            src: ["*.scss"],
            dest: "assets/css",
            ext: ".css",
          }
        ],
      },
    },
    watch: {
      css: {
        files: "assets/**/*.scss",
        tasks: ["sass", "cssmin"],
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/css',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.registerTask("default", ["sass"]);
  grunt.registerTask("build", ["sass, cssmin"]);
};
