---
name: pr-creator
description: Create a pull request for the current branch.
---

# PR Creator

Create a pull request for the current branch. This command assumes you have already committed your changes:

- If there are uncommitted changes, ask the user to confirm if he wants to commit these changes first. If yes then use the `commit-only` command to commit these changes before proceeding with PR creation.
- Check if branch has been pushed to remote. If not, ask user to push first using `ship` command.
- If the branch is already pushed, open the default browser to the new PR page for the current branch on GitHub. Use the `gh` CLI tool to get the correct URL: `gh pr create --web`.