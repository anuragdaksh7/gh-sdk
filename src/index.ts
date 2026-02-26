import { BaseClient } from "./client/BaseClient";
import { IssuesService } from "./services/issues";
import { ReposService } from "./services/repos";

export class GitHub {
  repos: ReposService
  issues: IssuesService

  constructor(token: string) {
    const client = new BaseClient(token)
    this.repos = new ReposService(client)
    this.issues = new IssuesService(client)
  }
}