
import {IHttpService, IHttpPromise} from 'angular';
import {IEndpointsConstant} from '../config';

export type ProjectCategory =
	'Scratch' | 'Mobile' | 'Hardware' | 'Evolution' | 'Websites' | 'Games + Web Games';

export interface IProject {
	name: string;
	description: string;
	category: ProjectCategory;
	deskNumber: number;
}

export interface IProjectsService {
	getAll(): IHttpPromise<IProject[]>;
}

export class ProjectsService implements IProjectsService {

	public $inject: string[] = ['$http', 'ENDPOINTS'];

	private $http: IHttpService;
	private ENDPOINTS: IEndpointsConstant;

	constructor(
		$http: IHttpService,
		ENDPOINTS: IEndpointsConstant
	) {
		this.$http = $http;
		this.ENDPOINTS = ENDPOINTS;
	}

	public getAll(): IHttpPromise<IProject[]> {
		return this.$http.get(`${this.ENDPOINTS.CoolestProjects}project/summary`);
	}
	
}
