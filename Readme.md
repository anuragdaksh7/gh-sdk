# Github SDK

## Routes

Auth
```http
GET /user
```

Repositories (Core)
```http
GET    /user/repos
GET    /orgs/{org}/repos
GET    /repos/{owner}/{repo}
POST   /user/repos
DELETE /repos/{owner}/{repo}
```

Repositories (Conf.)
```http
PUT    /repos/{owner}/{repo}/topics
GET    /repos/{owner}/{repo}/contributors
```

Issues
```http
GET    /repos/{owner}/{repo}/issues
GET    /repos/{owner}/{repo}/issues/{issue_number}
POST   /repos/{owner}/{repo}/issues
PATCH  /repos/{owner}/{repo}/issues/{issue_number}
```

Issues (Labels)
```http
GET    /repos/{owner}/{repo}/issues/{issue_number}/labels
POST   /repos/{owner}/{repo}/issues/{issue_number}/labels
DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}
```

Labels
```http
GET    /repos/{owner}/{repo}/labels
POST   /repos/{owner}/{repo}/labels
PATCH  /repos/{owner}/{repo}/labels/{name}
DELETE /repos/{owner}/{repo}/labels/{name}
```

Pull Requests (Lifecycle)
```http
GET    /repos/{owner}/{repo}/pulls
GET    /repos/{owner}/{repo}/pulls/{pull_number}
POST   /repos/{owner}/{repo}/pulls
PATCH  /repos/{owner}/{repo}/pulls/{pull_number}
```

Pull Requests (Actions)
```http
GET    /repos/{owner}/{repo}/pulls/{pull_number}/files
POST   /repos/{owner}/{repo}/pulls/{pull_number}/reviews
PUT    /repos/{owner}/{repo}/pulls/{pull_number}/merge
```

Comments (Issue)
```http
GET    /repos/{owner}/{repo}/issues/{issue_number}/comments
POST   /repos/{owner}/{repo}/issues/{issue_number}/comments
```

Comments (PR)
```http
GET    /repos/{owner}/{repo}/pulls/{pull_number}/comments
POST   /repos/{owner}/{repo}/pulls/{pull_number}/comments
```

Workflows
```http
GET    /repos/{owner}/{repo}/actions/workflows
GET    /repos/{owner}/{repo}/actions/workflows/{workflow_id}
POST   /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches
```

Workflows (Runs)
```http
GET    /repos/{owner}/{repo}/actions/runs
GET    /repos/{owner}/{repo}/actions/runs/{run_id}
```

Branch Prot.
```http
GET    /repos/{owner}/{repo}/branches/{branch}/protection
PUT    /repos/{owner}/{repo}/branches/{branch}/protection
```

Analytics
```http
GET /repos/{owner}/{repo}/stats/contributors
GET /repos/{owner}/{repo}/stats/commit_activity
GET /repos/{owner}/{repo}/stats/punch_card
```

## Mapping

```
gh
 ├── auth
 ├── repos
 ├── issues
 ├── labels
 ├── pullRequests
 ├── comments
 ├── workflows
 └── analytics
```

