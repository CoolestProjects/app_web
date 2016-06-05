
import navConfig from './nav-config';
import sidenavController from './sidenav/sidenav-controller';
import toolbarController from './toolbar/toolbar-controller';

angular.module('App.Nav', [])
	.config(navConfig)
	.controller('SidenavController', sidenavController)
	.controller('ToolbarController', toolbarController);
