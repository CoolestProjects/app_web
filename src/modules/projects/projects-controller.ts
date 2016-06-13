
import {IHttpPromiseCallbackArg} from 'angular';
import {IProjectsService, IProject} from './';

angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 250);

export default class ProjectsController {

	public $inject: string[] = ['projectsService'];
	public projects: IProject[];
	public displayed: number;

	private projectsService: IProjectsService;

	constructor(projectsService: IProjectsService) {
		this.projectsService = projectsService;
		this.getAllProjects();
		this.displayed = 50;
	}

	public getAllProjects(): void {
		this.projectsService.getAll()
			.then((res: IHttpPromiseCallbackArg<IProject[]>) => {
				this.projects = res.data;
			});
	}

	public displayMore(increaseBy: number = 50): void {
		this.displayed += increaseBy;
	}

}
