module.exports = function ( grunt ) {
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),
		jsbeautifier: {
			files: ['dist/**/*.js'],
			options: {
				js: {
					indentWithTabs: true,
					indentSize: 4,
					keepArrayIndentation: true,
					maxPreserveNewlines: 2,
					spaceInParen: true
				},
			}
		},
		jsdoc: {
			dist: {
				src: ['src/**/*.js'],
				options: {
					destination: 'docs',
					readme: 'README.md'
				}
			}
		},
		jshint: {
			files: ['Gruntfile.js', 'src/**/*.js'],
			options: {}
		},
		copy: {
			main: {
				files: [
					// makes all src relative to cwd
					{expand: true, flatten: true, src: ['src/*.js'], dest: 'dist/', filter: 'isFile'},
				],
			}
		},
		uglify:{
			options: {
				compress: true,
				mangle: true,
				sourceMap: true,
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
				}
			}
		},
		watch: {
			files: ['<%= jshint.files %>', 'README.md'],
			tasks: ['jsdoc']
		}
	} );

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-jsbeautifier');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'jsbeautifier',
		'jsdoc',
		'jshint',
		'copy',
		'uglify'
	]);
};