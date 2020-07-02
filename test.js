require('./index').setKey("your key here")
async function test(){
    let data = await require('./index').keyInfo().catch(err => {console.log(err)})
    console.log(data)
}
test()