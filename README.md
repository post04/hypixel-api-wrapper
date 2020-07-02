### What is this? 

> This is an api wrapper for the hypixel.net api, the docs for this api can be found [here](https://github.com/HypixelDev/PublicAPI/tree/master/Documentation), for the documentation for this package, continue reading!

### How do I use this?

Very simple, follow this guide:

```js
//To start this wrapper you need to use the .setKey function like so.
let package = require('hypixel-api-wrapper')
package.setKey("Your hypixel api key!")

//This package has two ways of using it

//like this
async function doSomething(){
let data = await package.keyInfo()
console.log(data)
}

//or like this
package.keyInfo().then(data => {
console.log(data)
})

//every use of this package
async function everyUse(){

    //every normal function and how to use it
    console.log(await package.getWatchdogStats())

    console.log(await package.boosters())

    console.log(await package.findGuild("method", "uuid or name depending on method used"))

    console.log(await package.friends("UUID for user"))

    console.log(await package.gameCounts())

    console.log(await package.guild("method", "name or uuid or id"))

    console.log(await package.keyInfo())

    console.log(await package.leaderboards())

    console.log(await package.player("UUID for user"))

    console.log(await package.playerCount())

    console.log(await package.recentGames("UUID for user"))

    console.log(await package.resources("resource"))

    console.log(await package.status("UUID for user"))

    //All skyblock functions and how to use them
    console.log(await package.skyblock.auction("method", "UUID, auction_id, or player_id"))

    console.log(await package.skyblock.auctions("Leave empty or supply page number"))

    console.log(await package.skyblock.bazaar())

    console.log(await package.skyblock.news())

    console.log(await package.skyblock.profile("profile_id"))

    console.log(await package.skyblock.profiles("UUID for user"))

}
```
