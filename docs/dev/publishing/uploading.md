---
prev: true
next: true
description: Uploading your package to Thunderstore
---

# Uploading

For this step you will need that API token you got in [first steps](/dev/publishing/packaging#using-tcli).
You have 2 options for how to store it:
- Set `TCLI_AUTH_TOKEN` environmental variable (e.g for GitHub Actions)
- Pass it as a parameter: `tcli publish --token tss_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

For now, we will use the 2nd option.

Simply run `tcli publish --token tss_your_token --package-version MAJOR.MINOR.PATCH`

![tcli publish output](/images/publishing/uploading/tcli_publish.webp){width="1596" height="1288"}

If you're output looks similar to this then congratulations on your mod upload!

If you see any yellow/red colors in output, check your `thunderstore.toml`, if you're still not sure why,
you can ask in [`#modding`](https://discord.com/channels/1162162389295304756/1384310683058966669) channel on [Mycopunk Discord](https://discord.com/invite/F8cJ2ePRej). 