export function twitchService() {
    const clientId = "";
    const secret = "";
    const token = "";

    const connectToken = {
        version: "1",
        type: "channel.follow",
        "condition": {
            "broadcaster_user_id": "12826"
        },
        "transport": {
            "method": "webhook",
            "callback": "https://example.com/webhooks/callback",
            "secret": "abcdefghij0123456789"
        }
    }

    async function getToken() {

    }



    async function login() {

    }
    async function logout() {

    }
}