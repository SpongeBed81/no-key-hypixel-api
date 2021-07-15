var api = require("./index")

async function apitest() {
    var data = await api.PlayerInfo("spongebed")
    console.log(data)
}

apitest()