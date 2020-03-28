const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base.js');

  it('entry', () => {
    assert.equal(baseConfig.entry.index, '/Users/harryyin/Documents/fe-workspace/webpack-test/builder-webpack/test/smoke/template/src/index/index.js');
    assert.equal(baseConfig.entry.search, '/Users/harryyin/Documents/fe-workspace/webpack-test/builder-webpack/test/smoke/template/src/search/index.js');
  });
});
