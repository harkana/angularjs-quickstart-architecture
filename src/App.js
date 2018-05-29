import angular from "angular";
import "./App.css";

const root = angular.module("root", [
    require("angular-route"),
    require("./gridPage/GridPage.js").name,
    require("./exPage/ExPage").name
]);

const appCtrl = root.controller('appCtrl', ["$scope", "$location", ($scope, $location) => {
    $scope.message  = "Hello world - Root Page";
    $scope.page = (name) => {
        $location.path("/" + name);
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