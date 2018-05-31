import angular from "angular";
import "./GridPage.css";

const gridModule = angular.module('root.gridPage', [
    require("angular-route")
]);

const gridController = gridModule.controller('gridCtrl', ($scope) => {
    $scope.gridOptions = {
        properties : ['firstname', 'lastname', 'age'],
        data : [
            {
                'firstname': 'Thomas',
                'lastname': 'Simoes',
                'age': 22
            },
            {
                'firstname': 'Naruto',
                'lastname': 'Uzumaki',
                'age': 12
            },
            {
                'firstname': 'Ichigo',
                'lastname': 'Kurosaki',
                'age': 17
            }
        ]
    };
    $scope.message = "Grid Page";
});

gridModule.config(($routeProvider) => {
    $routeProvider.when("/grid", {
        template : require("./GridPage.html"),
        controller : 'gridCtrl' 
    });
});

module.exports = gridModule;