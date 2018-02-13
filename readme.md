This file exhibits the build issue I am having with riot and jspm 0.17 beta. However, this branch indicates the use of a possible fix PR, except that I don't know how to put the config in the package.json for JSPM correctly, and also riot isn't meant to be installed from github, just npm.

After cloning:
```
npm install jspm@beta
jspm install
jspm install github:michael-simon/riot\@JSPM17Upgrade.json -f -o ./riot\@JSPM17Upgrade.json
jspm run test.js
```
