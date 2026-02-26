import { GitHubError } from "../errors/GitHubErrors"

export class BaseClient {
  private baseUrl = 'https://api.github.com'
  private token: string

  constructor(token: string) {
    this.token = token
  }

  async request<T>(
    method: string,
    path: string,
    body?: any,
  ): Promise<T> {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/vnd.github+json',
        "X-GitHub-Api-Version": "2022-11-28",
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    })

    if (!res.ok) {
      const error = await res.json()
      throw new GitHubError(
        error.message,
        res.status,
        error.documentation_url
      )
    }

    return res.json()
  }
}