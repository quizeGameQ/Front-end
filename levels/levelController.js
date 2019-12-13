var level = angular.module('level', []);

level.controller('levelController', ['$scope', '$compile', levelController]);

function levelController($scope){
    $scope.gates = [];
    $scope.selectedGate;

    $scope.selectGate = function(gateNumber){
        $scope.selectedGate = gateNumber;
        console.log(gateNumber);
    }

    $scope.updateGates = function(choice){
        console.log(choice);
        console.log('updating gates');
        console.log(typeof($scope.selectedGate));
        $scope.gates[0] = choice;
        console.log($scope.gates[$scope.selectedGate]);
        console.log($scope.gates[0]);
    }
}