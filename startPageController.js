var starPage = angular.module('startPage', []);

starPage.controller('startPageController', ['$scope', '$compile', startPageController]);

function startPageController($scope, $compile) {
    $.getJSON("levels.json", function (data) {
        $scope.levels = data;
    });

    $scope.showLevels = function () {
        var levels = "<div class='col-md-6 text-center'"
            + " ng-repeat='level in levels.levels'>"
            + "<p class='levelBlock' ng-click='goToLevel(level);'>{{level}}</p>"
            + "</div>";
        $('#subTitle').html(
            $compile(levels)($scope)
        );
    }

    $scope.goToLevel = function (level) {
        console.log('loading level ' + level);
        $.get('levels/level' + level + '.html', 
        function(data){
            $('#view').html(data);
        });
    }
}