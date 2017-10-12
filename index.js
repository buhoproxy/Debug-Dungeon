var game = angular.module('DebugDun', ['ngMaterial']);

game.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .dark();
});

game.controller('gameController', function($scope, $mdDialog){
    $scope.player = {
        name: null,
        level: 1,
        healthPoints: 100,
        hitPoints: 1,
        equipment: {
            head: {},
            body: {},
            legs: {},
            leftArm: {},
            rightArm: {}
        },
        inventory: {},
        position: null
    }
    var player = $scope.player;

    $scope.randomName = function(){        
        var names = [
            "Gandalf",
            "Frodo",
            "Sam",
            "Gimli",
            "Golum",
            "Legolas",
            "Aragorn",
            "Sauron",
            "Saruman",
            "Bilbo"
        ];
        var result = names[Math.floor(Math.random() * 10)];
        return result;
    };

    $scope.promptPlayer= function(){
        
        var chooseName = $mdDialog.prompt()
            .title('Elige tu nombre aventurero')
            .textContent('Ingresa tu nombre para empezar la aventura')
            .placeholder('Nombre del personaje')
            .ok('Listo')
            .cancel('Ponme un nombre aleatorio');

            $mdDialog.show(chooseName).then(function(result){
                $scope.player.name = result;
            }, function(){
                $scope.player.name = $scope.randomName();
            });
    };
    if($scope.player.name == null){
        $scope.promptPlayer();
    }
});