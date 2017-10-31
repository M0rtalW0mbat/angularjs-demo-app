/**
 * @ngdoc function
 * @name myArticleApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the myArticleApp
 */

// TODO try/catch?
// TODO rename factories
// TODO moment.js for Date format and tz offset(utc date on back-end)
// TODO docs

(function() {
    'use strict';
    angular
        .module('myArticleApp')
        .controller('ArticlesCtrl', ArticlesCtrl);

    ArticlesCtrl.$inject = ['articlesFactory', 'articleFactory', '$location'];

    function ArticlesCtrl(articlesFactory, articleFactory, $location) {
        var vm = this;

        // TODO loading screen?
        // TODO move to onLoad? move to activate?
        vm.articles = articlesFactory.query();

        activate();

        ////////////////

        function activate() {
            vm.createArticle = createArticle;
            vm.editArticle = editArticle;
            vm.deleteArticle = deleteArticle;
        }

        function createArticle() {
            $location.path('/create');
        }

        function editArticle(Id) {
            $location.path('/edit/' + Id); //TODO explicitly specify routeParams
        }

        function deleteArticle(Id) {
            articlesFactory.delete({
                Id: Id
            }).$promise.then(function(result) {
                vm.articles = articlesFactory.query();
            });
        }
    }
})();