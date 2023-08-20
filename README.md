# Node Project Template

This is a starter template for a node project.

## Features

Project includes following features:

- Automatic Prettier formatting
- Automatic linting
- Recommends extensions used in projects

## First Steps

Clone the project and make it your own.

- **[my-project-name]** should be the name of your project

```
https://github.com/jorgecarmona/npm-project-template.git my-project-name
```

## Set up Your Repository

When you clone this project, this will still point to my repository.

The next steps are to change it to save to your repository.

To do this:

1. Check which account the current repository points to.
2. Change repository to point to your own account.
3. Create a develop branch.
4. Add all the new files, commit and push them to your repo.

### 1. Check Current Repository Path

In your terminal, copy/paste the command below.

```
git remote -v
```

The terminal will show the following repository. This means that files/changes you create will still go our repository not yours!

```
origin  https://github.com/jorgecarmona/npm-project-template.git (fetch)
origin  https://github.com/jorgecarmona/npm-project-template.git (push)
```

### 2. Change Repository to Point to Your Own Account

If you have not done so, create a new repository on your personal github.com account.

Add new origin to point this code base to your personal repository so that all new files can be pushed to it.

The url address should be the one for your new created repository.

```
git remote add origin https://github.com/<your-repository>/<your-project-name>.git
```

### 3. Create a Develop Branch

Github by default creates a branch called Main. In our learning we use develop instead.

To rename it, use the following code:

```
git branch -M develop
```

The `-M` command is a shortcut for `--move --force`

### 4. Add Files to Your Personal Repository

To add all the initial files from our repo to yours, perform the normal git workflow:

Add all modified files to staging area.

```
git add .
```

Commit all files.

```
git commit -m "initial commit"
```

Do first push to your new develop branch

```
git push -u origin develop
```

Note: After first push, you only need to do `git push` since your local repo is synchronized with your github.com repo.
