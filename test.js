'use strict';

var should = require('should');
var hasModule = require('./');

it('should successfuly resolve mocha', function() {
  hasModule('mocha').should.equal(true);
});

it('should not resolve foobar-module', function() {
  hasModule('foobar-module').should.equal(false);
});
