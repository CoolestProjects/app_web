
import {IHttpPromiseCallbackArg} from 'angular';
import {ISpeakersService, ISpeaker} from './';

export default class SpeakersController {

	public $inject: string[] = ['speakersService'];
	public speakers: ISpeaker[];

	private speakersService: ISpeakersService;

	constructor(speakersService: ISpeakersService) {
		this.speakersService = speakersService;
		this.getAllSpeakers();
	}

	public getAllSpeakers(): void {
		this.speakersService.getAll()
			.then((res: IHttpPromiseCallbackArg<ISpeaker[]>) => {
				this.speakers = res.data;
			});
	}
	
}
