Stage all changes, generate a commit message, commit.

## Steps

1. Run `git status` to see what has changed. If there is nothing to commit, tell the user and stop.
2. Run `git diff HEAD` to understand what changed.
3. Based on the diff, write a concise conventional-commit message (type: short description - max 50 characters). Types: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`. One line only — no body. If possible take commit type from branch name if branch name follows pattern: type/description.
4. Stage all changes: `git add -A`
5. Commit with the generated message (use a HEREDOC to avoid shell quoting issues).
7. Report the commit hash and message to the user.

## Rules

- Never amend an existing commit.
