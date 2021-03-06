'use strict';

/* Controllers */

angular.module('html5cop.controllers', [])

    .controller('NinjaListCtrl', function($scope, Ninja) {
        $scope.ninjas = Ninja.query();
        $scope.orderProp = 'lastname';
    })

    .controller('NinjaCtrl', function($scope, $routeParams, Ninja, NinjaStorage) {

        $scope.editMode = false;

        Ninja.get({ninjaName: $routeParams.ninjaName}, function(ninja){
            $scope.ninja = NinjaStorage.get(ninja);
        });

        $scope.save = function(ninja){
            NinjaStorage.put(ninja);
        };

        $scope.switchMode = function(editMode){
            $scope.editMode = !editMode;
        }
    });

