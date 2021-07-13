//SpongeBed Was Here...
module.exports = {
    PlayerInfo: async function(nickname) {
        var fetch = require("node-fetch")
        var cheerio = require("cheerio")
        if (!nickname) throw new TypeError("Please Specify A Nickname To Search!")
        return fetch("https://hypixel.net/player/" + nickname).then(async (body) => {
            var source = await body.text()
            const $ = cheerio.load(source)

            const test = $('.generalStats')
            const levelcheerio = $('.level')
            var text = test.text()
            var kes = text.replace("\n\n", "\n")
            var kes2 = kes.replace("\n\n\n", "\n")
            const arr = kes2.toString().replace(/\r\n/g, '\n').split('\n');
            var karma = null
            var parkours = null
            var friends = null
            var lastlogin = null
            var generalachi = null
            var achipoint = null
            var guild = null
            var sayı = 0
            for (element of arr) {
                sayı++
                if (element === "Karma") {
                    karma = arr[sayı]
                }
                if (element === "Parkours Completed") {
                    parkours = arr[sayı]
                }
                if (element === "Friends") {
                    friends = arr[sayı]
                }
                if (element === "Last Login") {
                    lastlogin = arr[sayı + 1]
                }
                if (element === "General Achievements") {
                    generalachi = arr[sayı]
                }
                if (element === "Achievement Points") {
                    achipoint = arr[sayı + 1]
                }
                if (element === "Guild") {
                    guild = arr[sayı + 1]
                }
            }


            var jsonret = {
                karma: karma,
                level: levelcheerio.text(),
                parkours_Completed: parkours,
                friends: friends,
                last_Login: lastlogin,
                general_Achievements: generalachi,
                achievement_Points: achipoint,
                guild: guild
            }
            return jsonret
        })
    },

    GuildInfo: async function(guildname) {
        var guildlevel = null
        var createdat = null
        var guildmaster = null
        var members = null
        var memberarray = []
        const hooman = require('hooman');
        var cheerio = require("cheerio")
        if (!guildname) throw new TypeError("Please Specify A Guild Name To Search!")
        const response = await hooman.get(`https://hypixel.net/guild/${guildname}/members`);
        const $ = cheerio.load(response.body)
        const test = $('.medals')
        const test2 = $('.extraInfo')
        guildlevel = test.text().replace("Guild Level", "").split("\n").join(" ").replace(/ /g, "")
        const memberlist = $('.guildMemberList').text().slice(1)
        const memberlistarr = memberlist.replace(/\r\n/g, '\n').split('\n');
        for (let element of memberlistarr) {
            function reverse(s) {
                return s.split("").reverse().join("");
            }
            var slicing = element.slice(1)
            var reverseleme = reverse(slicing)
            var indexalmaişlemi = slicing.indexOf(" ")
            var substringişlemi = reverseleme.substring(0, reverseleme.length - indexalmaişlemi)
            var gerireverseleme = reverse(substringişlemi)
            var gerireverselengthal = gerireverseleme.length
            var substringyapgenebruh = slicing.substring(0, slicing.length - gerireverselengthal)
            if (substringyapgenebruh !== "") {
                memberarray[memberarray.length] = substringyapgenebruh
            }
        }
        var test2text = test2.text()
        const arr = test2text.replace(/\r\n/g, '\n').split('\n');
        createdat = arr[3]
        guildmaster = arr[7]
        members = arr[11]
        var jsonret = {
            created_At: createdat,
            guild_Master: guildmaster,
            member_Count: members,
            guild_Level: guildlevel,
            members: memberarray
        }
        return jsonret

    }
}
