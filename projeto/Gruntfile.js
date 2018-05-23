module.exports = function(grunt) {
   grunt.initConfig({
        copy: {
              public: {
                   cwd: 'public', 
                   src: '**', 
                   dest: 'dist', 
                   expand: true
              }
         }
  });
    
  grunt.loadNpmTasks('grunt-contrib-copy');
};