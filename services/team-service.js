var activePlayerTeam = null
var order = [];
var chaos = [];

function decode(data) {
    return decode(data)
}

export function isPlayerTeam(data) {
    if (activePlayerTeam.includes(data)) {
        console.log("is player team");
        return true;
    }
    return false;
}

export function getPlayers(data) {
    if (order.length == 0 && chaos.length == 0) {
        data = JSON.parse(data);
        data.forEach(element => {
            if (element["team"] == "CHAOS") {
                chaos.push(element["summonerName"]);
            }
            if (element["team"] == "ORDER") {
                order.push(element["summonerName"]);
            }
        });
        console.log(order, chaos);
    }

}

export function setActivePlayer(data) {
    if (order.length > 0 || chaos.length > 0) {
        console.log("in first if");
        if (order.includes(data)) {
            console.log("is order");
            activePlayerTeam = order;
        }
        else if (chaos.includes(data)) {
            activePlayerTeam = chaos;
        }
    }
}