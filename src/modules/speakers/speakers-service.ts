
import {IFirebaseService} from '../firebase';

export interface ISpeaker {
	name: string;
	description: string;
	summit: string;
	summitTimes: string;
	photoUrl: string;
}

export interface ISpeakersService {
	getAll(): AngularFireArray;
}

export class SpeakersService implements ISpeakersService {
	
	public $inject: string[] = ['firebaseService', '$firebaseArray'];
	
	private $firebaseArray: AngularFireArrayService;
	private ref: Firebase;
	
	constructor(
		firebaseService: IFirebaseService,
		$firebaseArray: AngularFireArrayService
	) {
		this.ref = firebaseService.speakersRef;
		this.$firebaseArray = $firebaseArray;
	}
	
	public getAll(): AngularFireArray {
		return this.$firebaseArray(this.ref);
	}
	
}
