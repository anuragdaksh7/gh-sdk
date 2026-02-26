export class GitHubError extends Error {
  status: number
  documentationUrl?: string

  constructor(
    message: string,
    status: number,
    docUrl?: string
  ) {
    super(message)
    this.name = "GitHubError"
    this.status = status
    this.documentationUrl = docUrl
  }
}