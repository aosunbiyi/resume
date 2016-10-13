module.exports = function( grunt ) {
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'assets/css/main.css': 'assets/css/src/main.scss'
				}
			}
		},
		watch: {
			css: {
				files: 'assets/css/src/main.scss',
				tasks: [ 'sass' ]
			}
		}
	});
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.registerTask( 'default', [ 'sass' ] );
};
