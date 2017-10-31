/**
 * @ngdoc service
 * @name myArticleApp.articleFactory
 * @description
 * # articleFactory
 * Factory in the myArticleApp.
 */
(function() {
    'use strict';

    angular
        .module('myArticleApp')
        .factory('articleFactory', articleFactory);

    articleFactory.$inject = ['$resource'];

    function articleFactory($resource) {
        // TODO remove api url in config
        return $resource('http://localhost:25447/api/Articles/:Id', {}, {
            get: {
                method: 'GET'
            },
            update: {
                method: 'PUT',
                params: {
                    Id: '@Id'
                }
            },
            delete: {
                method: 'DELETE',
                params: {
                    Id: '@Id'
                }
            }
        });
    }
})();