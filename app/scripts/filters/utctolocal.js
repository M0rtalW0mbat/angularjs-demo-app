/**
 * @ngdoc filter
 * @name myArticleApp.filter:utcToLocal
 * @function
 * @description
 * Stealed from http://jasonwatmore.com/post/2016/03/31/angularjs-utc-to-local-date-time-filter
 * Filter in the myArticleApp.
 */
(function() {
    'use strict';

    angular
        .module('myArticleApp')
        .filter('utcToLocal', utcToLocal);

        function utcToLocal($filter) {
            return function (utcDateString, format) {
                if (!utcDateString) {
                    return;
                }
                if (utcDateString.indexOf('Z') === -1 && utcDateString.indexOf('+') === -1) {
                    utcDateString += 'Z';
                }
                return $filter('date')(utcDateString, format);
            };
        }
})();