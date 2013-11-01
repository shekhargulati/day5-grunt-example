module.exports = function(grunt) {

  
  grunt.initConfig({
    uglify: {
      build: {
        src: ['js/app.js'],
        dest: 'js/app.min.js'
      }
    },
    markdown: {
    all: {
      files: [
        {
          expand: true,
          src: '*.md',
          dest: 'docs/html/',
          ext: '.html'
        }
      ]
    }
  }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-markdown');
  
  grunt.registerTask('default', ['uglify','markdown']);
};