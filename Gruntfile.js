module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			scss: {
				files: ['source/scss/**/*.scss'],
				tasks: ['sass:dev', 'autoprefixer:dev']
			},

			javascript: {
				files: ['source/js/**/*.js'],
				tasks: ['jshint:dev']
			},

			styles: {
				files: ['source/css/styles.css', 'source/**/*.html', 'source/js/**/*.js'],
				options : {
					livereload: true
				}
			}
		},

		sass: {
			dev: {
				files: {
					'source/css/styles-unprefixed.css': 'source/scss/styles.scss'
				}
			}
		},

		autoprefixer: {
			dev: {
				src: 'source/css/styles-unprefixed.css',
				dest: 'source/css/styles.css'
			}
		},

		clean: {
			dist: {
				src: ['dist']
			},
			stuff: {
				src: ['dist/scss', 'dist/js', 'dist/css']
			}
		},

		copy: {
			options: {
				noProcess: ['source/scss']
			},
			dist: {
				files: [
					{expand: true, cwd: 'source/', src: ['**'], dest: 'dist/'}
				]
			}
		},

		usemin: {
			html: 'dist/index.html'
		},

		cssmin: {
			dist: {
				files: {
					'dist/css/styles.min.css': ['source/css/styles.css']
				}
			}
		},

		uglify: {
			dist: {
				src: [
					'source/js/*.js'
				],
				dest: 'dist/js/app.min.js'
			}
		},

		jshint: {
			dev: ['source/js/**/*.js']
		}

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Default task(s).
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['jshint:dev', 'clean:dist', 'copy', 'clean:stuff', 'usemin','uglify:dist', 'sass:dev', 'autoprefixer:dev', 'cssmin:dist']);
};