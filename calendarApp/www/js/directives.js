/*
Incluir directiva.
Copiar archivos del lib e incluirlos en el index.
*/

angular.module('starter.directives', [])
.directive('rangeCal', function() {
    return {
        restrict: 'E',
        scope: false,
        link: function(scope, element, attrs) {
            $(element).rangeCalendar({
            	lang: attrs.lang,
                theme: attrs.theme,
                start: attrs.start,
                startRangeWidth: parseInt(attrs.startRangeWidth),
                minRangeWidth: parseInt(attrs.minRangeWidth),
                maxRangeWidth: parseInt(attrs.maxRangeWidth),
                changeRangeCallback: function( el, cont, dateProp ) {
                    scope.safeApply(function() {
                        console.log(scope[attrs.ngModel]+attrs.ngModel);
                        scope[attrs.ngModel] = cont.start;
                    });
                }
            });
        }
    };
});