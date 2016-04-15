var app = angular.module('myPortfolio');
app.directive('navDirective', function(){
  return{
    templateUrl: 'navDirective/navDirectiveTmpl.html',
    link: function (scope, element, attribute) {
                element.find('a').css('color', '#9ea9b0');
            }
  }

});
