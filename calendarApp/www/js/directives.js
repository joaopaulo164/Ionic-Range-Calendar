/*
Incluir archivo en el proyecto.
Copiar archivos a lib/js:
 jquery.min.js
 jquery-ui.min.js
 jquery.ui.touch-punch.min.js
 moment+langs.min.js
 jquery.rangecalendar.js
 
e incluirlos.
*/

angular.module('starter.directives', []);

.directive('dateSelect', function() {
          return {
              restrict: 'A',
              link: function(scope, ele, attrs){
                $(ele).rangeCalendar(scope.$eval(attrs.dateSelect));
              }
          };
      });