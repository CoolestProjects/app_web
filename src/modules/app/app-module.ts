
/**
 * Core Angular
 */
require('angular');
require('angular-animate');
require('angular-aria');
require('angular-cookies');
require('angular-messages');
require('angular-ui-router');
require('angular-i18n/en-ie.js');

/**
 * 3rd Party Angular
 */
require('angular-material');
require('angular-material-data-table');
require('angular-material-data-table/dist/md-data-table.css');

/**
 * App Modules
 */
require('config');
require('../nav/nav-module.ts');
require('../utils/utils-module.ts');
require('../projects/projects-module.ts');

/**
 * Imports
 */
import AppConfig from './app-config';
import AppController from './app-controller';

angular.module('App', [
	'ngAnimate', 'ngAria', 'ngMessages', 'ngLocale', 'ngCookies',
	'ngMaterial', 'ui.router', 'md.data.table',
	'App.Config', 'App.Nav', 'App.Utils',
	'App.Projects'
])
	.config(AppConfig)
	.controller('AppController', AppController);

window.onload = function (): void {
	angular.bootstrap(document, ['App']);
};
