
import {IState, IStateProvider} from 'angular-ui-router';

let projectsTemplate: string = require('./projects-template.html');
let projectsState: IState = {
	name: 'App.Nav.Projects',
	url: 'projects',
	template: projectsTemplate,
	controller: 'ProjectsController as projectsCtrl'
};

export default function ProjectsConfig($stateProvider: IStateProvider): void {
	$stateProvider.state(projectsState);
}
ProjectsConfig.$inject = ['$stateProvider'];
