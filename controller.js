angular.module('Projeto01').controller('ListController', function ($scope) {

    var list = [];

    $scope.addDescricao = function addDescricao() {

        list.push($scope.descricao);
        console.log($scope.descricao);
        console.log(list);
        $scope.descricao = "";

        /*
        MANEIRA IDIOTA
        document.getElementById("IDList").innerHTML = list;
        */

        /*
        var text, LLen, i;
        LLen = list.length;
        text = "<ul>";
        for (i = 0; i < LLen; i++) {
            text += "<li>" + list[i] + "</li>";
        }
        text += "</ul>";
        document.getElementById("IDList").innerHTML = text;
        MANEIRA FULL JAVASCRIPT
        */

    }
});
//criacao do controller etapa 01
//vinculacao do modulo com controller etapa 02