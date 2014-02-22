'use strict'

module.exports = (grunt) ->
  grunt.initConfig
    coffee:
      options:
        bare: true
      glob_to_multiple:
        expand: true
        cwd: 'coffee/lib/game/'
        src: ['**/*.coffee']
        dest: 'lib/game/'
        ext: '.js'

    watch:
      scripts:
        files: ['coffee/**/*.coffee']
        tasks: ['coffee']

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.registerTask 'default', ['watch']
