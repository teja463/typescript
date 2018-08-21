"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var _ = __importStar(require("lodash"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var GITHUB_API_ENDPOINT = 'https://api.github.com/users/';
var proxyRequest = request.defaults({ 'proxy': "http://10.87.231.29:80" });
var OPTIONS = {
    headers: {
        "User-Agent": 'request'
    },
    json: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (userName, callback) {
        proxyRequest.get(GITHUB_API_ENDPOINT + userName, OPTIONS, function (error, response, body) {
            var user = new User_1.User(body);
            callback(user);
        });
    };
    GithubApiService.prototype.getRepos = function (userName, callback) {
        proxyRequest.get(GITHUB_API_ENDPOINT + userName + '/repos', OPTIONS, function (error, response, body) {
            var repos = body.map(function (repo) { return new Repo_1.Repo(repo); });
            var sortedRepos = _.sortBy(repos, [function (repo) { return repo.forkCount * -1; }]);
            var filteredRepos = _.take(sortedRepos, 5);
            callback(filteredRepos);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
