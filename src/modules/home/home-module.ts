
import homeConfig from './home-config';
import homeController from './home-controller';

angular.module('App.Home', [])
	.config(homeConfig)
	.controller('HomeController', homeController);
