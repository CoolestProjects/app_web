/**
 * NavConfig
 */

import {IState, IStateProvider, IUrlRouterProvider} from 'angular-ui-router';

let sidenavTemplate: string = require('./sidenav/sidenav-template.html');
let toolbarTemplate: string = require('./toolbar/toolbar-template.html');
let navState: IState = {
	name: 'App.Nav',
	abstract: true,
	url: '/',
	views: {
		'sidenav': {
			template: sidenavTemplate,
			controller: 'SidenavController',
			controllerAs: 'sidenavCtrl'
		},
		'toolbar': {
			template: toolbarTemplate,
			controller: 'ToolbarController',
			controllerAs: 'toolbarCtrl'
		},
		'content': {
			template: '<ui-view/>'
		}
	}
};

export default function NavConfig(
	$stateProvider: IStateProvider,
	$urlRouterProvider: IUrlRouterProvider
): void {
	$urlRouterProvider.when('', '/');
	$stateProvider.state(navState);
}
NavConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
