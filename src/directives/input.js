import angular from "angular";

const appModule = angular.module("app.directives", []);

appModule.directive('customInput', function () {
    var config = {
        template: require("./input.html"),
        link: link,
        require: 'ngModel',
        scope: {
            field: '=',
            options: '='
        }
    };

    function link($scope, $element, $attrs, ngModel) {
        $scope.data = {};

        $scope.change = function () {
            console.log($scope.data);
            ngModel.$setViewValue($scope.data[$scope.field.name]);
        };
    }

    return (config);
});

module.exports = appModule;