
import {ISpeakersService} from './';

export default class SpeakersController {

	public $inject: string[] = ['speakersService'];
	public speakers: AngularFireArray;

	private speakersService: ISpeakersService;

	constructor(speakersService: ISpeakersService) {
		this.speakersService = speakersService;
		this.getAllSpeakers();
	}

	public getAllSpeakers(): void {
		this.speakers = this.speakersService.getAll();
		console.log('Speakers', this.speakers);
	}
	
}
