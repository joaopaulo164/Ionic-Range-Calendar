/*
Incluir directiva.
Copiar archivos del lib e incluirlos en el index.
*/

angular.module('starter.directives', [])
.directive('dateSelect', function() {
          return {
              restrict: 'A',
              link: function(scope, ele, attrs){
                $(ele).rangeCalendar(scope.$eval(attrs.dateSelect));
              }
          };
      });