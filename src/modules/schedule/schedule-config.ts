
import {IState, IStateProvider} from 'angular-ui-router';

let scheduleTemplate: string = require('./schedule-template.html');
let scheduleState: IState = {
	name: 'App.Nav.Schedule',
	url: 'schedule',
	template: scheduleTemplate,
	controller: 'ScheduleController as scheduleCtrl'
};

export default function ScheduleConfig($stateProvider: IStateProvider): void {
	$stateProvider.state(scheduleState);
}
ScheduleConfig.$inject = ['$stateProvider'];
