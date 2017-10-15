var game = angular.module('DebugDun', ['ngMaterial']);

game.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .dark();
});

game.controller('gameController', function($scope, $mdDialog, $mdSidenav){
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
        position: null,
    };
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
            .textContent('Ingresa tu nombre para empezar la aventura: (Si no eliges uno, se te asignara aleatoriamente)')
            .placeholder('Nombre del personaje')
            .ok('Listo');

            $mdDialog.show(chooseName).then(function(result){
                if(result != null || undefined){                    
                    $scope.player.name = result;
                }else{
                    $scope.player.name = $scope.randomName();
                }
            }, function(){
                $scope.player.name = $scope.randomName();
            });
    };
    if($scope.player.name == null){
        $scope.promptPlayer();
    }

    $scope.inventoryManager = {
        open: function(){
            $mdSidenav("inventory").toggle();
        },
        close: function(){
            $mdSidenav("inventory").close();
        }
    };

    var map = {
        rooms: {},
        paths: {},
        difficulty: ""
    }
    
    var mapGenerator = function(){

    };;
});