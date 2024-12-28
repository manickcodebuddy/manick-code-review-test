export interface GitHubPullRequest {
  number: number;
  title: string;
  body: string;
  html_url: string;
  head: {
    ref: string;
    sha: string;
  };
  base: {
    ref: string;
    sha: string;
  };
}

export interface GitHubWebhookPayload {
  action: string;
  pull_request: GitHubPullRequest;
}
