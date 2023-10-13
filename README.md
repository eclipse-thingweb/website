<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/eclipse-thingweb/website/master/misc/thingweb_logo_for_dark_bg.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/eclipse-thingweb/website/master/misc/thingweb_logo.svg">
  <img title="ThingWeb" alt="Thingweb logo" src="" width="300px">
</picture>


## Website

Rendered version: <https://www.thingweb.io>

## How to contribute

- We use Hugo static site generator: https://gohugo.io/getting-started/quick-start/
- In order to add new content, you can use `hugo new posts/my-first-post.md` or `hugo new single01.md`

You can see the content in different ways locally:
- Start the Hugo server with drafts enabled: `hugo server -D`
- Build Hugo website  in `/public`: `hugo`
- Build Hugo website with drafts enabled in `/public`: `hugo -D`

## Hugo Versions

Until we find a solution, it is recommended to use version 0.79.0 of Hugo.
For convenience, you can find the Linux binary under [binaries](./binaries/) folder.
