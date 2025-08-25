---
prev: true
next: true
---

# Manually modding the game

If for whatever reason you don't want to use a mod manager, you can manually install mods.

## Locating the game

Before installing mods you will need to find your game directory, the best way to locate is using Steam.

From your steam library, press right click on Mycopunk -> `Manage` -> `Browse local files`.
This will open up a folder where `Mycopunk` binary is located.

![Locating game root](/images/installation/manual/locating_game_folder.webp){width="922" height="633"}

## Installing BepInEx

BepInEx is a plugin / modding framework for Unity and required for modding your game.

To get started first you have to download it from [here](https://thunderstore.io/c/mycopunk/p/BepInEx/BepInExPack_Mycopunk/).

1. Click on `Manual Download` which will download a file named `BepInEx-BepInExPack_Mycopunk-5.4.2403.zip`

![Downloading BepInEx](/images/installation/manual/downloading_bie.webp){width="1110" height="568"}

2. Extract its contents.

You should see a structure like this:

![Extracting BepInEx](/images/installation/manual/extracting_bie.webp){width="850" height="514"}

3. Move contents of `BepInExPack_Mycopunk` to the game folder.

After this your game folder has to look like this:

![End result](/images/installation/manual/end_structure.webp){width="562" height="570"}

4. Launch the game once, for BepInEx to create everything, once you get to main menu you can close it.
5. Find a mod you want to install, if you're downloading from [Thunderstore](https://thunderstore.io/c/mycopunk/)
you can use `Manual Download` button.
6. Unzip the file you downloaded
    - If it has a `BepInEx` folder, move the whole folder to the game root folder
    - If it only has a `.dll` you can move it to `BepInEx/plugins` folder
7. Mod should be installed now and you can start the game from steam.