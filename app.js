const login = require("facebook-chat-api");

// Create simple echo bot
login({email: "pgq82705@mziqo.com", password: "bomb14017"}, (err, api) => {
    if(err) return console.error(err);

    api.listen((err, message) => {
        api.sendMessage(message.body, message.threadID);
    });
});