'use strict';

describe('Service: article', function () {

  // load the service's module
  beforeEach(module('myArticleApp'));

  // instantiate service
  var article;
  beforeEach(inject(function (_article_) {
    article = _article_;
  }));

  it('should do something', function () {
    expect(!!article).toBe(true);
  });

});
