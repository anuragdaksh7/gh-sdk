import { BaseClient } from "../client/BaseClient"

export class IssuesService {
  constructor(private client: BaseClient) {}

  list(owner: string, repo: string) {
    return this.client.request(
      "GET",
      `/repos/${owner}/${repo}/issues`
    )
  }

  create(owner: string, repo: string, data: {
    title: string
    body?: string
  }) {
    return this.client.request(
      "POST",
      `/repos/${owner}/${repo}/issues`,
      data
    )
  }
}