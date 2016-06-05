
import {IEndpointsConstant} from '../config';

export interface IFirebaseService {
	baseRef: Firebase;
	speakersRef: Firebase;
}

export class FirebaseService implements IFirebaseService {

	public $inject: string[] = ['Endpoints'];
	public baseRef: Firebase;
	public speakersRef: Firebase;
	
	private ENDPOINTS: IEndpointsConstant;

	constructor(ENDPOINTS: IEndpointsConstant) {
		this.ENDPOINTS = ENDPOINTS;
		this.baseRef = new Firebase(ENDPOINTS.CoolestProjectFirebase);
		this.speakersRef = this.baseRef.child('speakers');
	}
	
}
