angular.module('Projeto01').controller('ListController', function ($scope) {

    $scope.list = [];

    $scope.addDescricao = function addDescricao() {

        $scope.list.push($scope.descricao);
        $scope.descricao = "";

    }
});

angular.module('Projeto01').controller('DeleteController', function ($scope) {


    $scope.deleteDescricao = function deleteDescricao() {
        if ($scope.checkedbox = true) {
            delete $scope.descricao;
        }
    }

});

angular.module('Projeto01').controller('EditController', function ($scope) {

    $scope.editDescricao = function editDescricao() {


    }

})
//criacao do controller etapa 01
//vinculacao do modulo com controller etapa 02