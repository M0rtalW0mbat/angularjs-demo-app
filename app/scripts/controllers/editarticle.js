/**
 * @ngdoc function
 * @name myArticleApp.controller:EditArticleCtrl
 * @description
 * # EditArticleCtrl
 * Controller of the myArticleApp
 */
(function() {
    'use strict';

    angular
        .module('myArticleApp')
        .controller('EditArticleCtrl', EditArticleCtrl);

    EditArticleCtrl.$inject = ['articleFactory', '$location', '$routeParams'];

    function EditArticleCtrl(articleFactory, $location, $routeParams) {
        var vm = this;

        vm.article = articleFactory.get({
            Id: $routeParams.Id
        });

        activate();

        ////////////////

        function activate() {
            vm.saveChanges = saveChanges;
            vm.cancelChanges = cancelChanges;
        }

        function saveChanges() {
            articleFactory.update(vm.article).$promise.then(function() {
                $location.path('/');
            });
        }

        function cancelChanges() {
            $location.path('/');
        }
    }
})();