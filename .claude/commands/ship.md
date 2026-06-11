Stage all changes, generate a commit message, commit, and push to the current remote branch.

## Steps

1. Run `git status` to see what has changed. If there is nothing to commit, tell the user and stop.
2. Run `git diff HEAD` to understand what changed.
3. Based on the diff, write a concise conventional-commit message (type: short description). Types: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`. One line only — no body.
4. Stage all changes: `git add -A`
5. Commit with the generated message (use a HEREDOC to avoid shell quoting issues).
6. Push to the current branch's remote: `git push`
7. Report the commit hash and message to the user.

## Rules

- Never amend an existing commit.
- Never force-push.
- If the push fails because the remote has changes, tell the user to pull first — do not rebase or merge automatically.
