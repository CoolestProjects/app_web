
import {IDatetimeUtilService} from './';

export default class DatetimeUtilService implements IDatetimeUtilService {

	public removeTimeFromDate(date: Date): Date {
		let newDate: Date = new Date(date.getTime() - date.getTimezoneOffset());
		newDate.setUTCMilliseconds(0);
		newDate.setUTCSeconds(0);
		newDate.setUTCMinutes(0);
		newDate.setUTCHours(0);
		return newDate;
	}
	
}
