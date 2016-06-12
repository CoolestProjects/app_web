
import {IHttpService, IHttpPromise} from 'angular';
import {IEndpointsConstant} from '../config';
import {ISpeaker} from '../speakers/speakers-service';

export interface ISummit {
	summit: string;
	speakers: ISpeaker[];
}

export interface IScheduleService {
	getAll(): IHttpPromise<ISummit[]>;
}

export class ScheduleService implements IScheduleService {
	
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
	
	public getAll(): IHttpPromise<ISummit[]> {
		return this.$http.get(`${this.ENDPOINTS.CoolestProjectsFirebase}/summits.json`);
	}
	
}
