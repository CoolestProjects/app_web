
import speakersConfig from './speakers-config';
import {SpeakersService} from './speakers-service';
import speakersController from './speakers-controller';

angular.module('App.Speakers', [])
	.config(speakersConfig)
	.service('speakersService', SpeakersService)
	.controller('SpeakersController', speakersController);
