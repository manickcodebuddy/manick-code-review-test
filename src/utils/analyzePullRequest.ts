import axios from "axios";

const analyzePullRequest = async (pullRequest: any) => {
  const { owner, repo } = pullRequest.base.repo;
  const pullNumber = pullRequest.number;

  const response = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}/files`,
    {
      headers: {
        Authorization: `Bearer YOUR_GITHUB_TOKEN`,
      },
    }
  );

  const files = response.data;
  //   await analyzeFiles(files);
};
