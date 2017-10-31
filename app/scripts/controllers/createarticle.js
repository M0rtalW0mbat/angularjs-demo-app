/**
 * @ngdoc function
 * @name myArticleApp.controller:CreateArticleCtrl
 * @description
 * # CreateArticleCtrl
 * Controller of the myArticleApp
 */
(function() {
    'use strict';

    angular
        .module('myArticleApp')
        .controller('CreateArticleCtrl', CreateArticleCtrl);

    CreateArticleCtrl.$inject = ['articlesFactory', '$location'];

    function CreateArticleCtrl(articlesFactory, $location) {
        var vm = this;

        vm.article = {};

        activate();

        ////////////////

        function activate() {
            vm.createArticle = createArticle;
        }

        function createArticle() {
            articlesFactory
                .create(vm.article)
                .$promise.then(function() {
                    $location.path('/');
                });
        }
    }
})();