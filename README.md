# FOSSCET Website

The [FOSSCET website](https://fosscet.codeberg.page) documents all events conducted by the club. We also keep member profiles and op-ed blog posts.

## Quick how-tos
- [Add your member card](#add-your-member-card)
- [Create a new form](#create-a-new-form)
- [Create a new event entry](#create-a-new-form)
- [Create a blog post](#create-a-new-form)
- [Build and test the site locally](#build)

## Add your member card

- Create a file `<yourname>.md` in `src/content/members/`.  
Example: If you want your username to be `nik`, create file `src/content/members/nik.md`.  

- Fill out the fields that you want in the frontmatter section (between the triple hyphens).  

- To upload an avatar, put the image in `./public/images/myavatar.png`, and fill the form like so: `avatar: /public/images/myavatar.png`.  

- Add more detailed content after the frontmatter.

### Member card format:

Everything except name and avatar is optional.

```markdown
---
name: <Your name>
pronouns: <Your pronouns>
avatar: <Link to an avatar image>
bio: <A quick, short bio>
website: <Link to your personal website>
github: <Link to your github profile>
codeberg: <Link to your codeberg profile>
linkedin: <Link to your linkedin profile>
instagram: <Link to your instagram profile>
mail: <You email address>
---

Detailed bio text. This is a really good space to introduce yourself. 

This can be considerably longer than the `bio` field in the frontmatter.
```

## Create a new form

- Create a file `my-form-id.md` in `src/content/forms/`.  
- See the sample in `src/content/forms/test.mdx` for more info.

## Create a new event entry

- Create a file `event-name.md` in `src/content/events/`.  
- See the sample in `src/content/events/event_zero.mdx` for more info.


## Create a blog post

- Create a file `post-name.md` in `src/content/blog/`.  
- See the sample in `src/content/blog/shortening-of-the-way/index.mdx` for more info.
- Remember to remove `draft: true` in the frontmatter before publishing.

## Build

You need the following installed to get started:

- [Node.js](https://nodejs.org/en)  and [pnpm](https://pnpm.io)

OR 

- [bun](https://bun.sh)


### Clone and set up the repo

```bash
git clone https://codeberg.org/fosscet/website-src
cd website-src
pnpm i # or bun install
```

### Run the dev server

```bash
pnpm run dev # or bun run dev
```

### Build the site

```bash
pnpm run build # or bun run build
```
