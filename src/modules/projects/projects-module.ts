
import projectsConfig from './projects-config';
import {ProjectsService} from './projects-service';
import projectsController from './projects-controller';

angular.module('App.Projects', ['infinite-scroll'])
	.config(projectsConfig)
	.service('projectsService', ProjectsService)
	.controller('ProjectsController', projectsController);
