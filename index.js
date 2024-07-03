const core = require('@actions/core');
const { Octokit } = require("@octokit/rest");

async function run() {
    try {
        const token = core.getInput('token');
        const repo = core.getInput('repo');
        const base = core.getInput('base');
        const head = core.getInput('head');
        const title = core.getInput('title');
        let body = core.getInput('body');

        const [owner, repoName] = repo.split('/');

        const octokit = new Octokit({ auth: token });

        // If the body input is not provided, set it to an empty string
        body = body || '';

        const response = await octokit.rest.pulls.create({
            owner,
            repo: repoName,
            base,
            head,
            title,
            body
        });

        core.setOutput('pull_request_url', response.data.html_url);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
