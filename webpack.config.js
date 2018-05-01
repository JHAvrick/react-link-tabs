const webpack = require('webpack');
const path = require('path');

const componentName = 'react-link-tabs';
const appDir = path.resolve(__dirname, 'src');
const buildDir = path.resolve(__dirname, 'build');
const testAppDir = path.resolve(__dirname, 'test', 'app');
const testBuildDir = path.resolve(__dirname, 'test', 'build');

module.exports = [
    /*
     * This is the main build for the component.
     */
	{
        name: componentName,
        entry: path.resolve(appDir, 'index.jsx'),
        output: {
                path: buildDir,
                filename: componentName.concat('.js'),
                library: 'LinkTabs',
                libraryTarget: 'umd'
        },
        module : {
            rules : [
                {
                    test : /\.jsx?/,
                    use : 'babel-loader'
                }
            ]
        },
        externals: {
            'react': 'react',
            'react-dom' : 'reactDOM', // Case matters here 
            'styled-components': 'styled-components'
        }
    },

    /*
     * This is the test build, which imports the component (built first) into a
     * simple test page.
     */
	{
        name: componentName,
        entry: path.resolve(testAppDir, 'test.jsx'),
        output: {
                path: testBuildDir,
                filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.jsx?/,
                use: 'babel-loader'
            }]
        }
	}
];