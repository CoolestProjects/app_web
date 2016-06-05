
import projectsConfig from './projects-config';
import projectsController from './projects-controller';

angular.module('App.Projects', [])
	.config(projectsConfig)
	.controller('ProjectsController', projectsController);
