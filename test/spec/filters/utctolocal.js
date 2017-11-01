'use strict';

describe('Filter: utcToLocal', function () {

  // load the filter's module
  beforeEach(module('myArticleApp'));

  // initialize a new instance of the filter before each test
  var utcToLocal;
  beforeEach(inject(function ($filter) {
    utcToLocal = $filter('utcToLocal');
  }));

  it('should return the input prefixed with "utcToLocal filter:"', function () {
    var text = 'angularjs';
    expect(utcToLocal(text)).toBe('utcToLocal filter: ' + text);
  });

});
