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

    shell:
      target:
        command: "php tools/bake.php lib/impact/impact.js lib/game/main.js game.min.js"


  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-shell'
  grunt.registerTask 'default', ['watch']
  grunt.registerTask 'bake', ['shell']
