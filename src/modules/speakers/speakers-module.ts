
import speakersConfig from './speakers-config';
import speakersController from './speakers-controller';

angular.module('App.Speakers', [])
	.config(speakersConfig)
	.controller('SpeakersController', speakersController);
