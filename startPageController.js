var starPage = angular.module('startPage', []);

starPage.controller('startPageController', ['$scope', '$compile', startPageController]);

function startPageController($scope, $compile) {
    $.getJSON("levels.json", function (data) {
        $scope.levels = data;
    });

    $scope.showLevels = function () {
        var levels = "<div class='col-md-6 text-center'"
            + " ng-repeat='level in levels.levels'>"
            + "<p class='levelBlock'>{{level}}</p>"
            + "</div>";
        $('#subTitle').html(
            $compile(levels)($scope)
        );
        $('.levelBlock').click(function () {
            console.log('levelBlock clicked');
        });
    }

    $scope.goToLevel = function (source) {
        console.log(source)
    }
}