
var _plugin2 = null;
overwolf.extensions.current.getExtraObject('simple-test-plugin', (result) => {
    if (result.status === 'success') {
        _plugin2 = result.object;
        _plugin2.connect();
    }
});

export async function sendMessages(data) {
    console.log("Sent message");
    console.log(data);
    var data = data;
    _plugin2.sendMessage(JSON.stringify(data));
    setTimeout(() => {
        _plugin2.sendMessage(JSON.stringify(data));
    }, 50);
}
