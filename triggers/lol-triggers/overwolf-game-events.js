import * as messages from "../../Constants/lol/TestMessages/messages.js";
import { sendMessages } from "../../services/osc-service.js";

export default async function filterEvents(event) {
    var eventName = event["events"][0]["name"];
    
    switch (eventName) {
        case 'kill':
            var eventData = event["events"][0]["data"];
            killType(JSON.parse(eventData)["label"]);
            break;
        case 'death':
            sendMessages([
                messages.BARON_OFF,
                messages.ELDER_OFF,
                messages.KILL_OFF,
                messages.DOUBLE_KILL_OFF,
                messages.TRIPPLE_KILL_OFF,
                messages.QUADRA_KILL_OFF,
                messages.PENTA_KILL_OFF,
                messages.DEATH_ON
            ]);
            break;
        case 'respawn':
            console.log("RESPWN TRIGGER");
            sendMessages([
                messages.DEATH_OFF
            ]);
            break;
    }
}

async function killType(data) {
    switch (data) {
        case 'kill':
            console.log("it is kill");
            sendMessages([
                messages.KILL_ON
            ]);
            setTimeout(() => {
                sendMessages(
                    [
                        messages.KILL_OFF
                    ]
                );
            }, 8000);
            break;
        case 'double_kill':
            sendMessages([
                messages.KILL_OFF,
                messages.DOUBLE_KILL_ON
            ]);
            setTimeout(() => {
                sendMessages(
                    [
                        messages.DOUBLE_KILL_OFF
                    ]
                );
            }, 8000);
            break;
        case 'triple_kill ':
            sendMessages([
                messages.DOUBLE_KILL_OFF,
                messages.TRIPPLE_KILL_ON
            ]);
            setTimeout(() => {
                sendMessages(
                    [
                        messages.TRIPPLE_KILL_OFF
                    ]
                );
            }, 8000);
            break;
        case 'quadra_kill ':
            sendMessages([
                messages.TRIPPLE_KILL_OFF,
                messages.QUADRA_KILL_ON
            ]);
            setTimeout(() => {
                sendMessages(
                    [
                        messages.QUADRA_KILL_OFF
                    ]
                );
            }, 8000);
            break;
        case 'penta_kill':
            sendMessages([
                messages.QUADRA_KILL_OFF,
                messages.PENTA_KILL_ON
            ]);
            setTimeout(() => {
                sendMessages(
                    [
                        messages.PENTA_KILL_OFF
                    ]
                );
            }, 8000);
            break;
    }
}