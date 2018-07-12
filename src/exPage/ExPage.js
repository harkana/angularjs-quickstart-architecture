import angular from "angular";
import "./ExPage.css";

const exPageModule = angular.module("root.exPage", [
    require("@uirouter/angularjs").default
]);

exPageModule.controller('exCtrl', ($scope) => {
    $scope.message = "Ex Page";

    $scope.submit = function (p) {
        console.log(p);
    };

    $scope.change = function () {
        console.log($scope.info);
    };
});

exPageModule.config(($stateProvider) => {
    $stateProvider.state({
        name: 'ex-page',
        url: '/ex',
        template: require("./ExPage.html"),
        controller: 'exCtrl'
    });
});

module.exports = exPageModule;