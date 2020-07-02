let https = require('axios').default
let key;

function sendError(err){
    return {"error": true, "reason": err}
}

function sendSuccess(){
    return {"error": false}
}

function request(path, trufalse, extraquere){
    return new Promise((res, rej) => {
        let resp;
        let extra;
        if(trufalse == true){
            if(extraquere){
                extra = extraquere + "&key="+ key
            }else{
                extra = "?key=" + key
            }
        }else{
            if(extraquere){
                extra = extraquere + "?key="+ key
            }else{
                extra = "?key=" + key
            }
        }
        
        console.log(`https://api.hypixel.net${path}${extra}`)
        https.get(`https://api.hypixel.net${path}${extra}`).then(res => {
            if(res.data){
                resp = res.data
            }
        }).catch(err => {
            rej(sendError(`Request failed`))
        }).finally(function () {
            res(resp)
          });  
    })
        
    }

function setKey(key1){
    if(!key1) return sendError("Please give an api key to set to!")
    key = key1
    return sendSuccess()
}

async function getWatchdogStats(){
    return request("/watchdogstats", false)
}

async function boosters(){
    return request('/boosters', false)
}

async function findGuild(method, nameoruuid){
    let methods = ["name", 'uuid']
    if(!method || !methods.includes(method.toLowerCase())) return sendError("Couldn't find that method! Methods are " + methods.join(', '))
    if(!nameoruuid) return sendError(`No name or uuid provided!`)
    if(method.toLowerCase() === "name"){
        return request(`/findGuild`, true, `?byName=${nameoruuid}`)
    }else{
        return request('/findGuild', true, `?byUuid=${nameoruuid}`)
    }
}

async function friends(uuid){
    if(!uuid) return sendError(`You must supply a UUID to search for!`)

    return request('/friends', true, `?uuid=${uuid}`)
}

async function gameCounts(){
    return request(`/gameCounts`, false)
}

async function guild(method, param){
    let methods = ["id", "name", "player"]
    if(!method || !methods.includes(method.toLowerCase())) return sendError("Couldn't find that method! Methods are " + methods.join(', '))
    if(!param) return sendError(`No name or uuid or id provided!`)
    if(method.toLowerCase() === "name"){
        return request('/guild', true, `?name=${param}`)
    }else if(method.toLowerCase() === "player"){
        return request('/guild', true, `?player=${param}`)
    }else{
        return request('/guild', true, `?id=${param}`)
    }
}

async function keyInfo(){
    return request('/key', false)
}

async function leaderboards(){
    return request('/leaderboards', false)
}

async function player(param){
    if(!param) return sendError(`Please provide a UUID to search!`)
    return request("/player", true, `?uuid=${param}`)
}

async function playerCount(){
    return request("/playerCount", false)
}

async function recentGames(param){
    if(!param) return sendError(`Please provide a UUID to search!`)
    return request("/recentGames", true, `?uuid=${param}`)
}

async function resources(param){
    let options = ["achievements", "challenges", "quests", "guilds/achievements", "guilds/permissions", "skyblock/collections", "skyblock/skills"]
    if(!param || !options.includes(param.toLowerCase())) return sendError(`Please provide a reasource to find! Options: ${options.join(', ')}`)
    return request(`/resources`, false, `/${param}`)
}

async function status(param){
    if(!param) return sendError(`Please provide a UUID to search!`)
    return request("/status", true, `?uuid=${param}`)
}

async function auction(method, param){
    let methods = ["uuid", "auction_id", "player"]
    if(!method || !methods.includes(method.toLowerCase())) return sendError(`Please provide a method to use! Options: ${methods.join(', ')}`)
    if(!param) return sendError(`Please provide an UUID, auction_id, or player to search!`)
    if(method.toLowerCase() === "uuid"){
        return request('/skyblock/auction', true, `?uuid=${param}`)
    }else if(method.toLowerCase() === "player"){
        return request(`/skyblock/auction`, true, `?player=${param}`)
    }else{
        return request('/skyblock/auction', true, `?profile=${param}`)
    }
}

async function auctions(page){
    if(!page) return request(`/skyblock/auctions`, false)
    return request('/skyblock/auctions', true, `?page=${page}`)
}

async function bazaar(){
    return request('/skyblock/bazaar', false)
}

async function news(){
    return request('/skyblock/news', false)
}

async function profile(param){
    if(!param) return sendError(`Please provide a profile to search!`)
    return request('/skyblock/profile', true, `?profile=${param}`)
}

async function profiles(param){
    if(!param) return sendError(`Please provide a UUID to search!`)
    return request('/skyblock/profiles', true, `?uuid=${param}`)
}

module.exports.skyblock = {
    auction, auctions, bazaar, news, profiles
}

module.exports = {
    status, resources, recentGames, playerCount, player, leaderboards, keyInfo, guild, gameCounts, friends, findGuild, boosters, setKey, getWatchdogStats
}