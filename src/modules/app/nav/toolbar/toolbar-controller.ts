
import {material} from 'angular';
import {IStateService} from 'angular-ui-router';

export default class AdminToolbarController {

	public static $inject: string[] = ['$mdSidenav', '$state'];

	private $mdSidenav: material.ISidenavService;
	private $state: IStateService;

	constructor(
		$mdSidenav: material.ISidenavService,
		$state: IStateService
	) {
		this.$mdSidenav = $mdSidenav;
		this.$state = $state;
	}

	public toggleSidenav(): void {
		this.$mdSidenav('sidenav').toggle();
	}
	
}
