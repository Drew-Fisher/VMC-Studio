export default function lcdHandler(info) {
    switch (info) {
        case info["info"]["live_client_data"]:
            lcdEvents(info["info"]["live_client_data"]);
            break;
    }
}

function lcdEvents(data) {
    switch (data) {
        case data["events"]:
            lcdLastEvent(data["events"]);
            break;
        case data[""]:
            break;
    }
}

function lcdLastEvent(data) {
    switch (data) {
        case data["Events"]:
            var last = data["Events"];
            eventType(last[last.length - 1]);
            break;
    }
}

function eventType(data) {
    switch (data["EventName"]) {
        case "BaronKill":
            console.log("BaronKill");
            break;
        case "DragonKill":
            console.log("DragonKill");
            break;
    }
}