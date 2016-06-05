
import {material} from 'angular';
import {IStateService} from 'angular-ui-router';

export default class AdminSidenavController {

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

	public isSidenavOpen(): boolean {
		return this.$mdSidenav('sidenav').isOpen();
	}

	public closeSidenav(): void {
		if (this.isSidenavOpen()) { this.$mdSidenav('sidenav').close(); }
	}

	public goToHomeState(): void {
		this.$state.go('App.Nav.Home');
		this.closeSidenav();
	}

	public goToProjectsState(): void {
		this.$state.go('App.Nav.Projects');
		this.closeSidenav();
	}

}
