# Create Pull Request Action

This GitHub Action allows you to create a pull request.


## Inputs

| Name   | Description                                      | Required |
|--------|--------------------------------------------------|----------|
| `token`  | GitHub Token.                                    | Yes      |
| `repo`   | Repository name in the form `owner/repo`.        | Yes      |
| `base`   | The base branch to create the pull request against. | Yes   |
| `head`   | The branch that contains the changes.            | Yes      |
| `title`  | Title of the pull request.                       | Yes      |
| `body`   | Body of the pull request.                        | No       |

## Outputs

| Name             | Description                          |
|------------------|--------------------------------------|
| `pull_request_url` | The URL of the created pull request. |

## Usage

To use this action, create a workflow in your GitHub repository with the following content:

```yaml
name: Create Pull Request

on: [push]

jobs:
  create-pull-request:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Create Pull Request
        uses: vivek-kk-ragavan/github-actions-create-pull-request@main
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          repo: '<your-username>/<your-repo>'
          base: 'main'
          head: 'feature-branch'
          title: 'My new feature'
          body: 'This pull request adds a new feature.'
      - name: Print Pull Request URL
        run: |
          echo "Pull request created: ${{ steps.create-pull-request.outputs.pull_request_url }}"
```
