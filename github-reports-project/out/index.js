"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var svc = new GithubApiService_1.GithubApiService();
console.log(process.argv);
if (process.argv.length < 3) {
    console.log("Please pass the user name as an argument");
}
else {
    var username_1 = process.argv[2];
    svc.getUserInfo(username_1, function (user) {
        // Calling getRepos in the callback function
        svc.getRepos(username_1, function (repos) {
            user.repos = repos;
            console.log(user);
        });
    });
}
