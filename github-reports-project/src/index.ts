import { GithubApiService } from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GithubApiService();
console.log(process.argv);
if(process.argv.length <3){
    console.log("Please pass the user name as an argument");
}else{
    let username = process.argv[2];
    svc.getUserInfo(username, (user: User) => {
    
        // Calling getRepos in the callback function
        svc.getRepos(username, (repos: Repo[]) => {
            user.repos = repos;
            console.log(user);
        });
    });

}    
