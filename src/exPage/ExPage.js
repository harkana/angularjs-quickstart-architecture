import angular from "angular";
import "./ExPage.css";

const exPageModule = angular.module("root.exPage", [
    require("angular-route")
]);

exPageModule.controller('exController', ($scope) => {
    $scope.message = "Ex Page";
});

exPageModule.config(($routeProvider) => {
    $routeProvider.when('/exPage', {
        controller : 'exController',
        template: require("./ExPage.html") 
    });
});

module.exports = exPageModule;