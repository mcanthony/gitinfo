var expect = require('chai').expect,
    Gitinfo = require('../src/gitinfo.js');

describe('gitinfo', function () {
    var gitinfo;
    beforeEach(function () {
        gitinfo = Gitinfo();
    });
    describe('.username()', function () {
        it('returns the username of the repository author', function () {
            expect(gitinfo.username()).to.equal('gajus');
        });
    });
    describe('.name()', function () {
        it('returns name of the repository including the username of the author', function () {
            expect(gitinfo.name()).to.equal('gitinfo');
        });
    });
});