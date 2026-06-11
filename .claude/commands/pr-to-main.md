Create a pull request from the current branch targeting `main`.

## Steps

1. Run `git status` to check for uncommitted changes.
   - If there are uncommitted changes, ask the user whether to commit them first.
   - If yes, use the `commit-only` command, then continue.
   - If no, continue without committing.

2. Run `git log origin/main..HEAD --oneline` to check for commits ahead of main.
   - If there are no commits, tell the user there is nothing to PR and stop.

3. Check if the branch has been pushed to remote: `git log origin/<branch>..HEAD --oneline 2>&1`
   - If the remote branch does not exist or there are unpushed commits, push first: `git push -u origin HEAD`

4. Gather PR content from commits since main:
   - Run `git log origin/main..HEAD --pretty=format:"%s"` to get commit subjects.
   - Run `git diff origin/main...HEAD --stat` to get changed files.
   - Derive a concise PR title (max 72 chars) from the commits — use the single commit subject if there is only one, or a short summary if there are many.
   - Write a short PR body (2–4 bullet points) describing what changed and why.

5. Create the PR with `gh pr create`:
   ```
   gh pr create --base main --title "<title>" --body "<body>"
   ```
   Use a HEREDOC for the body to avoid quoting issues.

6. Report the PR URL to the user.

## Rules

- Always target `--base main`.
- Never force-push.
- If `gh pr create` fails because a PR already exists for this branch, report the existing PR URL to the user.
- Keep the PR title and body concise — summarise intent, not implementation detail.
