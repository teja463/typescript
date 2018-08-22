import * as request from 'request';
import * as _ from 'lodash';

import { User } from './User';
import { Repo } from './Repo';

const GITHUB_API_ENDPOINT = 'https://api.github.com/users/';
const OPTIONS: any = {
    headers: {
        "User-Agent": 'request'
    },
    json: true
}

export class GithubApiService {

    getUserInfo(userName: string, callback: (user: User) => any) {
        request.get(GITHUB_API_ENDPOINT + userName, OPTIONS, (error: any, response: any, body: any) => {
            let user = new User(body);
            callback(user);
        })
    }

    getRepos(userName: string, callback: (repos: Repo[]) => any) {
        request.get(GITHUB_API_ENDPOINT + userName + '/repos', OPTIONS, (error: any, response: any, body: any) => {
            let repos = body.map((repo: any) => new Repo(repo));
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
            let filteredRepos = _.take(sortedRepos, 5);
            callback(filteredRepos);
        })
    }
}