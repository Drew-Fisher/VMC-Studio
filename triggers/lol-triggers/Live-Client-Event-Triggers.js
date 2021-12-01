import { sendMessages } from "../../services/osc-service.js";
import * as messages from "../../Constants/lol/TestMessages/messages.js";
import * as drakeTracker from '../../services/drake-tracker.js';
import { isPlayerTeam } from "../../services/team-service.js";

export default async function sortEvents(event) {
    switch (event["EventName"]) {
        case "BaronKill":
            console.log("Baron check "+ isPlayerTeam(event["KillerName"]));
            if (isPlayerTeam(event["KillerName"])) {
                console.log("in");
                sendMessages(
                    [
                        messages.BARON_ON
                    ]
                );
                setTimeout(() => {
                    sendMessages(
                        [
                            messages.BARON_OFF
                        ]
                    );
                }, 180000);
            }
            break;
        case "DragonKill":
            drakeTracker.incrementDragonCount();
            drakeTracker.checksoulType();
            if (isPlayerTeam(event["KillerName"])) {
                drakeTracker.incrementTaken();

                switch (event["DragonType"]) {
                    case "Fire":
                        drakeTracker.checkSoul("Fire");
                        sendMessages(
                            [
                                messages.INFERNAL_ON
                            ]
                        );
                        setTimeout(() => {
                            sendMessages(
                                [
                                    messages.INFERNAL_OFF
                                ]
                            );
                        }, 2000);
                        break;
                    case "Water":
                        drakeTracker.checkSoul("Water");
                        sendMessages(
                            [
                                messages.OCEAN_ON
                            ]
                        );
                        setTimeout(() => {
                            sendMessages(
                                [
                                    messages.OCEAN_OFF
                                ]
                            );
                        }, 2000);
                        break;
                    case "Earth":
                        drakeTracker.checkSoul("Earth");
                        sendMessages(
                            [
                                messages.MOUNTAIN_ON
                            ]
                        );
                        setTimeout(() => {
                            sendMessages(
                                [
                                    messages.MOUNTAIN_OFF
                                ]
                            );
                        }, 2000);
                        break;
                    case "Air":
                        drakeTracker.checkSoul("Air");
                        sendMessages(
                            [
                                messages.CLOUD_ON
                            ]
                        );
                        setTimeout(() => {
                            sendMessages(
                                [
                                    messages.CLOUD_OFF
                                ]
                            );
                        }, 2000);
                        break;
                    case "Elder":
                        console.log("Elder");
                        sendMessages(
                            [
                                messages.ELDER_ON
                            ]
                        );
                        setTimeout(() => {
                            sendMessages(
                                [
                                    messages.ELDER_OFF
                                ]
                            );
                        }, 150000);
                        break;
                }
            }

            console.log(event["DragonType"]);
            break;
    }
}
