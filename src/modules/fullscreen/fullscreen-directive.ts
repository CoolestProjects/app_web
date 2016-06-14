import {IDirective, IScope, IAugmentedJQuery} from 'angular';

interface IFullscreenScope extends IScope {
	active: boolean;
}

export function FullscreenDirective(): IDirective {
	return {
		scope: {
			active: '='
		},
		link: function (scope: IFullscreenScope, elem: IAugmentedJQuery): void {
			scope.$watch('active', function (): void {
				console.log('Toggle fullscreen', scope.active);
				if (!scope.active) {
					if (document.exitFullscreen) {
						document.exitFullscreen();
					} else if (document.webkitExitFullscreen) {
						document.webkitExitFullscreen();
					}
				} else {
					if (elem[0].requestFullscreen) {
						elem[0].requestFullscreen();
					} else if (elem[0].webkitRequestFullscreen) {
						elem[0].webkitRequestFullscreen();
					}
					elem.addClass('fullscreen');
				}
			});
		}
	};
}
