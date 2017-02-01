angular.module('Projeto01').controller('ListController', function($scope){

    var list = { description : "" };
    $scope.Enter = function Enter(event) {

        if (event.keyCode == 13) {

            $scope.description = $scope.descricao;
            console.log($scope.descricao);
            document.getElementById('afazeres').value='';
        }

    }
});
//criacao do controller etapa 01
//vinculacao do modulo com controller etapa 02