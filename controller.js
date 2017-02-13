angular.module('Projeto01').controller('ListController', function ($scope) {

    $scope.list = [];
    $scope.status = false;

    $scope.addDescricao = function addDescricao() {

        $scope.item = {
            name: $scope.descricao,
            boolean: $scope.status
        };
        $scope.list.push($scope.item);
        console.log($scope.descricao);
        console.log($scope.status);
        console.log($scope.list);
        $scope.descricao = "";

    }

    $scope.excluirDescricao = function excluirDescricao() {

        console.log($scope.filterTrue);

    }

    $scope.verificarDescricao = function verificarDescricao() {


        $scope.selecionados = function () {
            return $scope.list.item.boolean === 'true'
        }

        $scope.filterTrue = $scope.list.filter($scope.selecionados);

    }

});
//criacao do controller etapa 01
//vinculacao do modulo com controller etapa 02