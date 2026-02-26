import { GitHub } from "./src";

const gh = new GitHub(process.env.GH_TOKEN || '');

console.log(await gh.repos.listUserRepos());