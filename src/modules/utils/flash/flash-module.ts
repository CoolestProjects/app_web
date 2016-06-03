
import FlashController from './flash-controller';
import FlashService from './flash-service';

angular.module('Utils.Flash', [])
	.controller('FlashController', FlashController)
	.service('flashService', FlashService);
