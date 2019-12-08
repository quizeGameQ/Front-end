var starPage = angular.module('startPage', []);

starPage.controller('startPageController', ['$scope', startPageController]);

function startPageController($scope) {
    $.getJSON("levels.json", function (data) {
        $scope.levels = data;
    });

    $scope.showLevels = function () {
        console.log($scope.levels.levels);
        $('#subTitle').html("<div>" + $scope.levels.levels + "</div>");
    }
}