import angular from "angular";
import "./App.css";

const root = angular.module("root", [
    require("@uirouter/angularjs").default,
    require("./gridPage/GridPage.js").name,
    require("./exPage/ExPage").name
]);

const appCtrl = root.controller('appCtrl', ["$scope", "$state", ($scope, $state) => {
    $scope.message  = "Hello world - Root Page";
    $scope.page = (name) => {
        $state.go(`${name}-page`);
    };
}]);

appCtrl.directive('app', () => {
    return {
        template : require("./App.html"),
        controller : 'appCtrl'
    };
});

angular.element(() => {
    angular.bootstrap(document, ["root"]);
});