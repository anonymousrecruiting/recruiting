var app = angular.module('Recruiting', ['ngRoute', 'angularUtils.directives.dirPagination']);

/* CONFIGURATION */

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $routeProvider
        .when('/news', {
            templateUrl: 'views/news.html',
            controller: 'newsController',
            css: 'stylesheets/news.css'
        })
        .when('/profile',{
            templateUrl: 'views/profile.html',
            controller: 'profileController',
            css: 'stylesheets/profile.css'
        })
        .when('/recruiting', {
            templateUrl: 'views/recruiting.html',
            controller: 'recruitingController',
            css: 'recruiting.css'
        })
        .otherwise({
            redirectTo: '/news'
        });

}]);

/* CONTROLLERS */

app.controller('globalController', ['$scope', '$location', function($scope, $location){
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}])

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

app.controller('profileController', ['$scope', '$routeParams', function($scope, $routeParams){

    $scope.user = {

        name: 'Nick Corin',
        alias: '1337',
        gender: 'Male',
        email: 'nickcorin@gmail.com',
        age: '22',
        country: 'South Africa',
        city: 'Cape Town'

    };

}]);

app.controller('recruitingController', ['$scope', '$routeParams', function($scope, $routeParams){

    /*

        -FETCH USERS LOOKING TO BE RECRUITED
        -FILTER TABLE BASED ON SEARCH OPTIONS AND KEYWORD

     */

    $scope.recruits = [

        { alias : 'a1337', name : 'Nick Corin', role : 'Solo Mid', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'ng-repeat', name : 'Sean Curtis', role : 'Carry', current_team : 'N/A', previous_team : 'Super Derp Gaming', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Peanutbutter', name : 'JP Matthee', role : 'Hard Support', current_team : 'Super Derp Gaming', previous_team : 'Sounds Legit', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Crunk Daddy', name : 'Luke Boniface', role : 'Offlane', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'FuNkY StArFiSh', name : 'Tristan Peters', role : 'Carry', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : '1337', name : 'Nick Corin', role : 'Solo Mid', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'ng-repeat', name : 'Sean Curtis', role : 'Carry', current_team : 'N/A', previous_team : 'Super Derp Gaming', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Peanutbutter', name : 'JP Matthee', role : 'Hard Support', current_team : 'Super Derp Gaming', previous_team : 'Sounds Legit', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Crunk Daddy', name : 'Luke Boniface', role : 'Offlane', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'FuNkY StArFiSh', name : 'Tristan Peters', role : 'Carry', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : '1337', name : 'Nick Corin', role : 'Solo Mid', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'ng-repeat', name : 'Sean Curtis', role : 'Carry', current_team : 'N/A', previous_team : 'Super Derp Gaming', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Peanutbutter', name : 'JP Matthee', role : 'Hard Support', current_team : 'Super Derp Gaming', previous_team : 'Sounds Legit', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Crunk Daddy', name : 'Luke Boniface', role : 'Offlane', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'FuNkY StArFiSh', name : 'Tristan Peters', role : 'Carry', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : '1337', name : 'Nick Corin', role : 'Solo Mid', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'ng-repeat', name : 'Sean Curtis', role : 'Carry', current_team : 'N/A', previous_team : 'Super Derp Gaming', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Peanutbutter', name : 'JP Matthee', role : 'Hard Support', current_team : 'Super Derp Gaming', previous_team : 'Sounds Legit', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Crunk Daddy', name : 'Luke Boniface', role : 'Offlane', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'FuNkY StArFiSh', name : 'Tristan Peters', role : 'Carry', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },

        { alias : 'b1337', name : 'Nick Corin', role : 'Solo Mid', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'ng-repeat', name : 'Sean Curtis', role : 'Carry', current_team : 'N/A', previous_team : 'Super Derp Gaming', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Peanutbutter', name : 'JP Matthee', role : 'Hard Support', current_team : 'Super Derp Gaming', previous_team : 'Sounds Legit', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Crunk Daddy', name : 'Luke Boniface', role : 'Offlane', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'FuNkY StArFiSh', name : 'Tristan Peters', role : 'Carry', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : '1337', name : 'Nick Corin', role : 'Solo Mid', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'ng-repeat', name : 'Sean Curtis', role : 'Carry', current_team : 'N/A', previous_team : 'Super Derp Gaming', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Peanutbutter', name : 'JP Matthee', role : 'Hard Support', current_team : 'Super Derp Gaming', previous_team : 'Sounds Legit', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Crunk Daddy', name : 'Luke Boniface', role : 'Offlane', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'FuNkY StArFiSh', name : 'Tristan Peters', role : 'Carry', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : '1337', name : 'Nick Corin', role : 'Solo Mid', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'ng-repeat', name : 'Sean Curtis', role : 'Carry', current_team : 'N/A', previous_team : 'Super Derp Gaming', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Peanutbutter', name : 'JP Matthee', role : 'Hard Support', current_team : 'Super Derp Gaming', previous_team : 'Sounds Legit', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Crunk Daddy', name : 'Luke Boniface', role : 'Offlane', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'FuNkY StArFiSh', name : 'Tristan Peters', role : 'Carry', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : '1337', name : 'Nick Corin', role : 'Solo Mid', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'ng-repeat', name : 'Sean Curtis', role : 'Carry', current_team : 'N/A', previous_team : 'Super Derp Gaming', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Peanutbutter', name : 'JP Matthee', role : 'Hard Support', current_team : 'Super Derp Gaming', previous_team : 'Sounds Legit', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Crunk Daddy', name : 'Luke Boniface', role : 'Offlane', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'FuNkY StArFiSh', name : 'Tristan Peters', role : 'Carry', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town'},

        { alias : 'c1337', name : 'Nick Corin', role : 'Solo Mid', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'ng-repeat', name : 'Sean Curtis', role : 'Carry', current_team : 'N/A', previous_team : 'Super Derp Gaming', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Peanutbutter', name : 'JP Matthee', role : 'Hard Support', current_team : 'Super Derp Gaming', previous_team : 'Sounds Legit', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Crunk Daddy', name : 'Luke Boniface', role : 'Offlane', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'FuNkY StArFiSh', name : 'Tristan Peters', role : 'Carry', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : '1337', name : 'Nick Corin', role : 'Solo Mid', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'ng-repeat', name : 'Sean Curtis', role : 'Carry', current_team : 'N/A', previous_team : 'Super Derp Gaming', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Peanutbutter', name : 'JP Matthee', role : 'Hard Support', current_team : 'Super Derp Gaming', previous_team : 'Sounds Legit', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Crunk Daddy', name : 'Luke Boniface', role : 'Offlane', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'FuNkY StArFiSh', name : 'Tristan Peters', role : 'Carry', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : '1337', name : 'Nick Corin', role : 'Solo Mid', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'ng-repeat', name : 'Sean Curtis', role : 'Carry', current_team : 'N/A', previous_team : 'Super Derp Gaming', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Peanutbutter', name : 'JP Matthee', role : 'Hard Support', current_team : 'Super Derp Gaming', previous_team : 'Sounds Legit', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Crunk Daddy', name : 'Luke Boniface', role : 'Offlane', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'FuNkY StArFiSh', name : 'Tristan Peters', role : 'Carry', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : '1337', name : 'Nick Corin', role : 'Solo Mid', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'ng-repeat', name : 'Sean Curtis', role : 'Carry', current_team : 'N/A', previous_team : 'Super Derp Gaming', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Peanutbutter', name : 'JP Matthee', role : 'Hard Support', current_team : 'Super Derp Gaming', previous_team : 'Sounds Legit', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Crunk Daddy', name : 'Luke Boniface', role : 'Offlane', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'FuNkY StArFiSh', name : 'Tristan Peters', role : 'Carry', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },

        { alias : 'd1337', name : 'Nick Corin', role : 'Solo Mid', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'ng-repeat', name : 'Sean Curtis', role : 'Carry', current_team : 'N/A', previous_team : 'Super Derp Gaming', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Peanutbutter', name : 'JP Matthee', role : 'Hard Support', current_team : 'Super Derp Gaming', previous_team : 'Sounds Legit', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Crunk Daddy', name : 'Luke Boniface', role : 'Offlane', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'FuNkY StArFiSh', name : 'Tristan Peters', role : 'Carry', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : '1337', name : 'Nick Corin', role : 'Solo Mid', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'ng-repeat', name : 'Sean Curtis', role : 'Carry', current_team : 'N/A', previous_team : 'Super Derp Gaming', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Peanutbutter', name : 'JP Matthee', role : 'Hard Support', current_team : 'Super Derp Gaming', previous_team : 'Sounds Legit', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Crunk Daddy', name : 'Luke Boniface', role : 'Offlane', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'FuNkY StArFiSh', name : 'Tristan Peters', role : 'Carry', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : '1337', name : 'Nick Corin', role : 'Solo Mid', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'ng-repeat', name : 'Sean Curtis', role : 'Carry', current_team : 'N/A', previous_team : 'Super Derp Gaming', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Peanutbutter', name : 'JP Matthee', role : 'Hard Support', current_team : 'Super Derp Gaming', previous_team : 'Sounds Legit', country : 'South Africa', city : 'Cape Town' },
        { alias : 'Crunk Daddy', name : 'Luke Boniface', role : 'Offlane', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' },
        { alias : 'FuNkY StArFiSh', name : 'Tristan Peters', role : 'Carry', current_team : 'Super Derp Gaming', previous_team : 'N/A', country : 'South Africa', city : 'Cape Town' }

    ];

    $scope.current_page = 1;
    $scope.page_size = 20;


}])

/* FACTORIES */

/* DIRECTIVES */

/* 1. Dynamic CSS */

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

/* 2. Setting active navbar links */

app.directive('classOnActiveLink', [function() {
    return {
        link: function(scope, element, attrs) {

            var anchorLink = element.children()[0].getAttribute('ng-href') || element.children()[0].getAttribute('href');
            anchorLink = anchorLink.replace(/^#/, '');

            scope.$on("$routeChangeSuccess", function (event, current) {
                if (current.$$route.originalPath == anchorLink) {
                    element.addClass(attrs.classOnActiveLink);
                }
                else {
                    element.removeClass(attrs.classOnActiveLink);
                }
            });

        }
    };
}]);

/* FILTERS */

app.filter('filterRecruits', function(){
    return function(recruits) {

    }
});