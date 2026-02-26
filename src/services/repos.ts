import type { BaseClient } from "../client/BaseClient";

export class ReposService {
  constructor(private client: BaseClient) {}

  listUserRepos() {
    return this.client.request('GET', '/user/repos')
  }

  getRepo(owner: string, repo: string) {
    return this.client.request('GET', `/repos/${owner}/${repo}`)
  }
}