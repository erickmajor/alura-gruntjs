module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            public: {
                cwd: 'public', 
                src: '**', 
                dest: 'dist', 
                expand: true
            }
        }, 
        clean: {
            dist: {
                src: 'dist'
            }
        },
        useminPrepare: {
            html: 'dist/**/*.html'
        },
        usemin: {
            html: 'dist/**/*.html'
        }
    });

    grunt.registerTask('dist', ['clean', 'copy']);
    // registrando task para minificação
    grunt.registerTask('minifica', ['useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin']);
    grunt.registerTask('default', ['dist']);

    // carregando tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
};