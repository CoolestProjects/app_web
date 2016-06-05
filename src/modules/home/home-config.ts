
import {IState, IStateProvider, IUrlRouterProvider} from 'angular-ui-router';

let homeTemplate: string = require('./home-template.html');
let homeState: IState = {
	name: 'App.Nav.Home',
	url: 'home',
	template: homeTemplate,
	controller: 'HomeController as homeCtrl'
};

export default function HomeConfig(
	$stateProvider: IStateProvider,
	$urlRouterProvider: IUrlRouterProvider
): void {
	$stateProvider.state(homeState);
	$urlRouterProvider.when('/', '/home');
}
