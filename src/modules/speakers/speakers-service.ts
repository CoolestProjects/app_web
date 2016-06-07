
import {IHttpService, IHttpPromise} from 'angular';
import {IEndpointsConstant} from '../config';

export interface ISpeaker {
	name: string;
	description: string;
	summit: string;
	summitTimes: string;
	photoUrl: string;
}

export interface ISpeakersService {
	getAll(): IHttpPromise<ISpeaker[]>;
}

export class SpeakersService implements ISpeakersService {
	
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
	
	public getAll(): IHttpPromise<ISpeaker[]> {
		return this.$http.get(`${this.ENDPOINTS.CoolestProjectsFirebase}/speakers.json`);
	}
	
}
