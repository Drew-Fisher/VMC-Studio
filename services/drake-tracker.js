import * as types from "../Constants/lol/Events/live-client-types.js"
import * as messages from "../Constants/lol/TestMessages/messages.js"
import { sendMessages } from "./osc-service.js";

var total = 0;
var total_taken = 0;

var soul_type = null;

function checksoulType(data) {
    if (total == 3) {
        soul_type = data;
    }
}

function checkSoul(data) {
    if (total_taken == 4) {
        switch (data) {
            case "Fire":
                sendMessages([
                    messages.INFERNAL_SOUL_ON
                ]);
                break;
            case "Water":
                sendMessages([
                    messages.OCEAN_SOUL_ON
                ]);
                break;
            case "Earth":
                sendMessages([
                    messages.MOUNTAIN_SOUL_ON
                ]);
                break;
            case "Air":
                sendMessages([
                    messages.CLOUD_SOUL_ON
                ]);
                break;
        }
    }
    return false;
}

function incrementDragonCount(data) {
    total += 1;
}

function incrementTaken() {
    total_taken += 1;
}

export {
    incrementDragonCount,
    checkSoul,
    checksoulType,
    incrementTaken
};