---
prev: true
next: true
description: Basics of mod creation
---

# Starting making a mod

## Setting up your project {#project-setup}

::: warning
Please make sure you did all the required steps in **[Prerequisites](/dev/prerequisites)**.
:::

### Using the repository template {#repo-template}

Currently, the only available template is [funlennysub's template](https://github.com/funlennysub/MycopunkModTemplate).
To set up your project using it you can follow the steps listed there.

### Make sure your setup is correct {#check-mod-setup}

Open the `.csproj` file with the same name as your project name. You can use template's `.csproj` as your guide.

- Check if your `TargetFramework` attribute is set to `net48`
- Check if your `AssemblyName`, `Description` and `Version` are set correctly

## Building your mod {#build-with-ide}

Once you set up everything you can now try and build your mod to see if everything works, to do that it's recommended to use an IDE,
but if you're familiar with command line you can use that. 

Build button is placed differently in every IDE

::: details Rider
![Rider's build button](/images/mod-setup/rider_build.webp){width="804" height="238"}
:::

Once mod is built, you now are able to test it game, but you need to do a few more things.
You can go to your project directory (e.g. `MyFirstMod`): `MyFirstMod/bin/(Release or Debug)/net48/`,
find the file with the same name as your project, in our case it will be `MyFirstMod.dll`.

Now you can just copy it and paste into `BepInEx/plugins` folder.

::: info
Depending on how you installed BepInEx during [setup](/dev/prerequisites#bepinex-setup), it will be different.
:::