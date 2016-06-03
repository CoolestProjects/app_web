
import {material} from 'angular';

import {IFlashContent, IFlashService} from '../../../data';

export default class FlashService implements IFlashService {

	public static $inject: string[] = ['$mdToast'];

	private $mdToast: material.IToastService;

	constructor($mdToast: material.IToastService) {
		this.$mdToast = $mdToast;
	}

	public display(content: IFlashContent): void {
		
		console.log('Displaying flash', content);
		
		let toastController: Function = function ($mdToast: material.IToastService): void {
			this.content = content;
			this.dismiss = function (): void {
				$mdToast.hide();
			};
		};
		toastController.$inject = ['$mdToast'];

		this.$mdToast.show({
			hideDelay: 3000,
			position: 'bottom right',
			template:
				'<md-toast>\
					<span class="md-toast-text" flex>{{flashCtrl.content.message}}</span>\
					<md-button class="md-highlight" ng-click="flashCtrl.dismiss()">\
						Okay\
					</md-button>\
				</md-toast>',
			controller: toastController ,
			controllerAs: 'flashCtrl',
		});
		
	}
	
}
