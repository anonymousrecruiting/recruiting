var app = angular.module('Recruiting', ['ngRoute']);

/* CONFIGURATION */

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/news.html',
            controller: 'newsController',
            css: 'stylesheets/news.css'
        })
        .when('/news', {
            templateUrl: 'views/news.html',
            controller: 'newsController'
        })
        .when('/profile',{
            templateUrl: 'views/profile.html',
            controller: 'profileController'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);

/* CONTROLLERS */

app.controller('newsController', ['$scope', '$routeParams', function($scope, $routeParams){

    /*

        FETCH THE POSTS TO DISPLAY ON THE NEWS PAGE.
        -OFFICIAL NEWS FROM US
        -DOTA NEWS
        -CONFIRMED SCRIMS
        -FINISHED SCRIMS
        -NEW TEAMS MADE & POPULATED
        -SHIFTS IN TOP 3 TEAMS ON RANKINGS

     */

}]);

/* FACTORIES */

/* DIRECTIVES */

app.directive('head', ['$rootScope','$compile',
    function($rootScope, $compile){
        return {
            restrict: 'E',
            link: function(scope, elem){
                var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
                elem.append($compile(html)(scope));
                scope.routeStyles = {};
                $rootScope.$on('$routeChangeStart', function (e, next, current) {
                    if(current && current.$$route && current.$$route.css){
                        if(!angular.isArray(current.$$route.css)){
                            current.$$route.css = [current.$$route.css];
                        }
                        angular.forEach(current.$$route.css, function(sheet){
                            delete scope.routeStyles[sheet];
                        });
                    }
                    if(next && next.$$route && next.$$route.css){
                        if(!angular.isArray(next.$$route.css)){
                            next.$$route.css = [next.$$route.css];
                        }
                        angular.forEach(next.$$route.css, function(sheet){
                            scope.routeStyles[sheet] = sheet;
                        });
                    }
                });
            }
        };
    }
]);