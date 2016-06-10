
import {IScope, IRootScopeService, ILocaleService} from 'angular';
import {IStateService, IStateParamsService} from 'angular-ui-router';
import * as moment from 'moment';

export default class AppController {

	public static $inject: string[] = ['$rootScope', '$scope', '$state', '$stateParams', '$locale'];
	
	public contentLoaded: boolean;

	private $rootScope: IRootScopeService;	
	private $scope: IScope;
	private $state: IStateService;
	private $stateParams: IStateParamsService;
	private $locale: ILocaleService;

	constructor(
		$rootScope: IRootScopeService,
		$scope: IScope,
		$state: IStateService,
		$stateParams: IStateParamsService,
		$locale: ILocaleService
	) {

		this.$rootScope = $rootScope;		
		this.$scope = $scope;
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.$locale = $locale;

		moment.locale(this.$locale.id);

	}
	
} 
