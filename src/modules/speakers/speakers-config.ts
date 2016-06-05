
import {IState, IStateProvider} from 'angular-ui-router';

let speakersTemplate: string = require('./speakers-template.html');
let projectsState: IState = {
	name: 'App.Nav.Speakers',
	url: 'speakers',
	template: speakersTemplate,
	controller: 'SpeakersController as speakersCtrl'
};

export default function SpeakersConfig($stateProvider: IStateProvider): void {
	$stateProvider.state(projectsState);
}
SpeakersConfig.$inject = ['$stateProvider'];
