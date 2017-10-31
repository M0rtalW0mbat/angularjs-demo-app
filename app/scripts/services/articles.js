/**
 * @ngdoc service
 * @name myArticleApp.articlesFactory
 * @description
 * # articlesFactory
 * Factory in the myArticleApp.
 */

(function() {
    'use strict';

    angular
        .module('myArticleApp')
        .factory('articlesFactory', articlesFactory);

    articlesFactory.$inject = ['$resource'];

    function articlesFactory($resource) {
        // TODO remove api url in config
        return $resource('http://localhost:25447/api/Articles', {}, {
            query: {
                method: 'GET',
                isArray: true
            },
            create: {
                method: 'POST'
            }
        });
    }
})();