/**
 * AppConfig
 */

import {IStateProvider, IState} from 'angular-ui-router';
import {material, IHttpProvider} from 'angular';
import * as moment from 'moment';

let appTemplate: string = require('./app-template.html');
let appState: IState = {
	name: 'App',
	abstract: true,
	url: '',
	template: appTemplate
};

export default function AppConfig(
	$stateProvider: IStateProvider,
	$mdThemingProvider: material.IThemingProvider,
	$mdDateLocaleProvider: material.IDateLocaleProvider,
	$httpProvider: IHttpProvider
): void {
	$stateProvider.state(appState);
	$mdThemingProvider.definePalette('Coolest-Projects-Palette', {
		'50': '#d0ebff',
		'100': '#84cbff',
		'200': '#4cb3ff',
		'300': '#0495ff',
		'400': '#0084e5',
		'500': '#000000',
		'600': '#0060a7',
		'700': '#004f89',
		'800': '#003d6a',
		'900': '#002c4c',
		'A100': '#d0ebff',
		'A200': '#84cbff',
		'A400': '#0084e5',
		'A700': '#004f89',
		'contrastDefaultColor': 'light',
		'contrastDarkColors': '50 100 200 A100 A200'
	});
	$mdThemingProvider.theme('default').primaryPalette('Coolest-Projects-Palette');
	$mdDateLocaleProvider.formatDate = function(date: Date): string {
		return moment(date).format('L');
	};
}
AppConfig.$inject = [
	'$stateProvider', '$mdThemingProvider',
	'$mdDateLocaleProvider', '$httpProvider'
];
