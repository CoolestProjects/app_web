
import scheduleConfig from './schedule-config';
import {ScheduleService} from './schedule-service';
import scheduleController from './schedule-controller';

angular.module('App.Schedule', [])
	.config(scheduleConfig)
	.service('scheduleService', ScheduleService)
	.controller('ScheduleController', scheduleController);
