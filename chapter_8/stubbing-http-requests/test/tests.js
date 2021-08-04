const test = require('tape');
const sinon = require('sinon');
const github = require('../github');
const octokitUserData = require('./octokitUserData');
test('Get GitHub user by username', async (t) =>{
  t.plan(3);
  // this stub replaces a real response from the GitHub API with a fixed response.
  sinon.stub(github, 'getGitHubUser').returns(octokitUserData);
  const gitHubUser = await github.getGitHubUser('octokit');
  t.equal(gitHubUser.id, 3430433);
  t.equal(gitHubUser.login, 'octokit');
  t.equal(gitHubUser.name, 'Octokit');
});
