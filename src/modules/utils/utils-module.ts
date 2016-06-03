
import DatetimeUtilService from './datetime-util-service';

require('./flash/flash-module.ts');

angular.module('App.Utils', [
	'Utils.Flash'
])
	.service('datetimeUtil', DatetimeUtilService);
