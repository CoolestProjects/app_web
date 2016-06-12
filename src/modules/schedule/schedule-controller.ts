
import {IHttpPromiseCallbackArg} from 'angular';
import {IScheduleService, ISummit} from './';

export default class ScheduleController {

	public $inject: string[] = ['scheduleService'];
	public summits: ISummit[];

	private scheduleService: IScheduleService;

	constructor(scheduleService: IScheduleService) {
		this.scheduleService = scheduleService;
		this.getAllSummits();
	}

	public getAllSummits(): void {
		this.scheduleService.getAll()
			.then((res: IHttpPromiseCallbackArg<ISummit[]>) => {
				this.summits = res.data;
			});
	}
	
}
