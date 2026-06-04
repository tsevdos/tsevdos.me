---
title: Getting started with Changesets
date: "2026-04-01"
category: Tutorial
tags:
  - npm
  - package
  - changesets
  - opensource
---

[**Changesets**](https://github.com/changesets/changesets) is the best way to manage, version, and publish your packages. It works great both on standard repositories and monorepos, it integrates easily with your workflows (more on that in a future post), and most importantly, it makes sense! Below is a quick tutorial on how to set up [**Changesets**](https://github.com/changesets/changesets) and how it works. I'm also planning to write a follow up post on how to automate the publishing process using [**GitHub actions**](https://docs.github.com/en/actions), so stay tuned for that.

## Installation

First things first, you must definitely have a look at the official [changesets documentation](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md). Below, I'll show you how to install and use the basics of **Changesets**. First of all, we need to set up and initialize **Changesets** in our project.

```bash
npx @changesets/cli init
```

This command will create a `.changeset` directory in the root of your project, with the following two files:

- `README.md`
- `config.json`

In most cases the defaults are fine, but my `config.json` file has the following configuration (I'm using **GitHub's changelog generator** [@changesets/changelog-github](https://www.npmjs.com/package/@changesets/changelog-github)):

```json
{
  "$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
  "changelog": ["@changesets/changelog-github", { "repo": "tsevdos/elUtils" }],
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": []
}
```

## Creating a Changeset

The next step is to actually create a changeset. Again, have a look at the [**Changesets official CLI**](https://github.com/changesets/changesets/blob/main/packages/cli/README.md). The core idea of Changesets is that you can create a "changeset file" at any point that describes your changes, such as the addition of a new feature, a bug fix, etc. After **committing** the changeset, Changesets will handle the **versioning** and the **changelog** of your project. Keep in mind that you can create multiple changesets before committing (they stack on top of each other), and you can also create changesets for multiple packages if you are working on a monorepo. Here is how you can create a changeset:

```bash
npx changeset
```

You'll be prompted to describe your changes using the [semantic versioning specification (semver)](https://semver.org) and a description of your change. The output looks like something like this:

```bash
🦋  What kind of change is this for repo?
❯ major (breaking change)
  minor (new feature)
  patch (bug fix)
```

This will create a random file in the `.changeset` directory (ex. `.changeset/brave-garlics-pump.md`) with the description and the semver type you chose.

```md
---
"@tsevdos/el-utils": minor
---

new feature added
```

## Versioning and publishing

When you're ready to release a new version of your package and apply the changeset(s) you've created, simply run the following command:

```bash
npx @changesets/cli version
```

The above command will take care two things:

1. Update the version of the `package.json` file (ex. `"version": "1.12.3"`)
2. Update the `CHANGELOG.md` file to reflect your changes

After that, you can **commit** and **push** the changes to your repository and finally **publish the package to the npm registry** using the following command:

```bash
npx @changesets/cli publish
```

Personally, I prefer to have all these commands available in the `scripts` section of the `package.json` file for easier access:

```json
{
  "scripts": {
    "changeset": "npx changeset",
    "version": "npx @changesets/cli version",
    "publish": "npx @changesets/cli publish"
  }
  ...
}
```

And that’s it for the basics of [**Changesets**](https://github.com/changesets/changesets)! You should now have a solid foundation for managing versioning and releases in your projects. In the next post, we’ll take things a step further and automate the entire process using [**GitHub actions**](https://docs.github.com/en/actions), so stay tuned.
