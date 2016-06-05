
import {material} from 'angular';

import {IFlashContent} from './';

export default class FlashController {

	public static $inject: string[] = ['$mdToast'];
	public content: IFlashContent;

	private $mdToast: material.IToastService;

	constructor($mdToast: material.IToastService, message: string) {
		this.$mdToast = $mdToast;
		console.log('Constructing flash', message, $mdToast);
	}

	public dismiss(): void {
		this.$mdToast.hide();
	}
	
}
