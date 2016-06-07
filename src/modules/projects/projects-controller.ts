
import {IHttpPromiseCallbackArg} from 'angular';
import {IProjectsService, IProject} from './';

export default class ProjectsController {

	public $inject: string[] = ['projectsService'];
	public projects: IProject[];

	private projectsService: IProjectsService;

	constructor(projectsService: IProjectsService) {
		this.projectsService = projectsService;
		this.getAllProjects();
	}

	public getAllProjects(): void {
		this.projectsService.getAll()
			.then((res: IHttpPromiseCallbackArg<IProject[]>) => {
				this.projects = res.data;
				console.log('Projects', this.projects);
			});
	}
	
}
