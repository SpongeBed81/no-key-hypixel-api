var api = require("./index")

async function apitest() {
    var data = await api.GuildInfo("technoclan")
    console.log(data)
}

apitest()