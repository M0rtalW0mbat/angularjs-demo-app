/**
 * @ngdoc function
 * @name myArticleApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the myArticleApp
 */

(function() {
    'use strict';
    angular
        .module('myArticleApp')
        .controller('ArticlesCtrl', ArticlesCtrl);

    ArticlesCtrl.$inject = [];

    function ArticlesCtrl() {
        var vm = this;

        vm.articles = [{
            id: 1,
            title: 'Mars colonization program',
            creationDate: '2017.10.27'
        }];

        activate();

        ////////////////

        function activate() {
            vm.getArticles = getArticles;
            vm.createArticle = createArticle;
            vm.editArticle = editArticle;
            vm.deleteArticle = deleteArticle;
        };

        function getArticles() {
            // TODO factory
        };

        function createArticle() {
            // TODO
        };

        function editArticle(id) {
            // TODO
        };

        function deleteArticle(id) {
            // TODO
        };
    };
})();