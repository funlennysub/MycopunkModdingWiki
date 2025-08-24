---
prev: true
next: true
description: Learn how to pack your mod
---

# Using [tcli](https://github.com/thunderstore-io/thunderstore-cli) {#using-tcli}

Before anything, you have to install the `tcli`, this can be done with `dotnet tool install -g tcli`.

Now to use the CLI, you have to create an API token.
This can be done by going to your account `Teams` and selecting the team you created
in the [previous step](/dev/publishing/prerequisites#create-team).

![Selecting your team](/images/publishing/packaging/team_settings.png)

Now press `Serivce Accounts` and click on `Add service account` button.

![Adding a service account](/images/publishing/packaging/create_service_account_1.png)

Give it a name you can easily recognize (e.g. `tcli` or `thunderstore-cli`) and now click `Add service account` below
the input field.

![Naming the service account](/images/publishing/packaging/create_service_account_2.png)

One last step is to copy the token and store it somewhere for now.

::: danger
Don't share this token anywhere because it can be used to upload mods under your name.
:::

![Copying the API token](/images/publishing/packaging/create_service_account_3.png)

## Setting up environment for CLI {#tcli-env-setup}

::: tip
If you used [funlennysub's template](https://github.com/funlennysub/MycopunkModTemplate/) you can skip
to [Configuring tcli](/dev/publishing/packaging#tcli-config)
:::

In order for tcli to work it needs `thunderstore.toml`.
To create it and other important files, simply run `tcli init` in your project root.

This will create several files:

<ul class="no-bullet">
    <li><div class="i-catppuccin:image"></div> <code>icon.png</code> - used for your mod icon on Thunderstore</li>
    <li><div class="i-catppuccin:markdown"></div> <code>README.md</code> - readme of your mod to be shown on the Thunderstore webpage</li>
    <li><div class="i-catppuccin:toml"></div> <code>thunderstore.toml</code> - configuration file for your package</li>
</ul>

## Configuring `tcli` {#tcli-config}

Before publishing, you have to make a few changes to the generated `thunderstore.toml`.

```toml
[config]
schemaVersion = "0.0.1"

[package]
# Enter the name of your Thunderstore team name instead of AuthorName
namespace = "AuthorName"
# Replace PackageName with your mod name
name = "PackageName"
# Remove versionNumber because it will be provided during build/publish
versionNumber = "0.0.1" // [!code --]
description = "Example mod description"
# Usually websiteUrl is set to your mod github repository url
websiteUrl = "https://thunderstore.io"
containsNsfwContent = false

[package.dependencies]
AuthorName-PackageName = "0.0.1" // [!code --]
# Add dependency to BepInEx package
BepInEx-BepInExPack_Mycopunk = "5.4.2403" // [!code ++]

[build]
icon = "icon.png"
readme = "README.md"
outdir = "build"

[[build.copy]]
source = "./dist" // [!code --]
target = "" // [!code --]
# Replace PackageName with your DLL name.
# P.S. For target you can just use 'plugins/PackageName.dll', but keeping BepInEx makes manually installing mods easier.
source = "bin/Release/net48/PackageName.dll" // [!code ++]
target = "BepInEx/plugins/PackageName.dll" // [!code ++]

[publish]
repository = "https://thunderstore.io"
communities = [ "riskofrain2", ] // [!code --]
# Since you're modding Mycopunk you have to set the community to mycopunk
communities = [ "mycopunk", ] // [!code ++]

[publish.categories]
riskofrain2 = [ "items", "skills", ] // [!code --]
# This also goes for categories
mycopunk = [ "client", ] // [!code ++]
```

::: tip
List of available categories can be read
from [here](https://thunderstore.io/api/experimental/community/mycopunk/category/).
Value under `slug` field is what should be used
:::

At this point you're almost ready to publish your mod to Thunderstore and all you have to do now is build your mod.
To do so, just build it [from IDE](/dev/setup#build-with-ide) or using `dotnet build -c Release` from project root.
Once the project is built successfully you're now able to publish your mod.

## Testing {#testing-pkg}

However, before publishing it's recommended to make sure you set up everything correctly,
in order to do that you can run `tcli build --package-version MAJOR.MINOR.PATCH`,
this should output a `.zip` inside `build` folder.

### Check your package structure

If you unzip your package it should look like this:

<ul class="no-bullet" style="padding-left: 0">
    <li><div class="i-catppuccin:folder-open"></div> <code>AuthorName-PackageName-x.y.z</code></li>
    <li>
        <ul class="no-bullet">
            <li><div class="i-catppuccin:folder-open"></div> <code>BepInEx</code></li>
            <li>
                <ul class="no-bullet">
                    <li><div class="i-catppuccin:folder-open"></div> <code>plugins</code></li>
                    <li>
                        <ul class="no-bullet">
                            <li><div class="i-catppuccin:binary"></div> <code>PackageName.dll</code></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li><div class="i-catppuccin:image"></div> <code>icon.png</code></li>
    <li><div class="i-catppuccin:json"></div> <code>manifest.json</code></li>
    <li><div class="i-catppuccin:markdown"></div> <code>README.md</code></li>
    <li><div class="i-catppuccin:markdown"></div> <code>CHANGELOG.md</code> (Optional)</li>
</ul>

::: tip
If you want to know more about how to structure your package, you can use
[this guide](https://github.com/ebkr/r2modmanPlus/wiki/Structuring-your-Thunderstore-package) and
[this one](https://wiki.thunderstore.io/mods/creating-a-package).
:::

### Test locally

To test if your package got built correctly you can open up [r2modmanPlus](https://github.com/ebkr/r2modmanPlus),
select `Mycopunk` in game list, go to `Settings` and scroll down until you find `Import local mod`

![Importing local mod](/images/publishing/packaging/importing_local_mod_1.png)

There you will have to click `Select file` button and select the `.zip` file `tcli` produced.

![Selecting a local mod](/images/publishing/packaging/importing_local_mod_2.png)

After you selected your package, you will be shown a screen on which you can make sure data is correct,
if it is - click `Import local mod`,
if not - check your `thunderstore.toml` and re-import again.

![Checking fields](/images/publishing/packaging/importing_local_mod_3.png)

Once you import your mod, you should be able to see it in the list of installed mods

![Installed local mod](/images/publishing/packaging/importing_local_mod_4.png)

::: tip
Don't forget to uninstall it after, in case you plan on using your published version.
:::

