/**
 * project constants
 */
var appDir = __dirname + '/../';

module.exports = {
    constants: {
        absoluteAppDir: appDir,
        buildDir: appDir + 'build/',
        jsDir: appDir + 'js/',
        appFiles: {
            js: '<%= constants.jsDir %>*.js',
            scss: '<%= constants.absoluteAppDir %>**/*.scss'
        }
    }
};