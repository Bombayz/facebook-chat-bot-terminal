const login = require("facebook-chat-api");
var cmd = require('node-cmd');

login({
    email: "pgq82705@mziqo.com",
    password: "bomb14017"
}, (err, api) => {
    if (err) return console.error(err);

    let ssh_open_system = false
    let ssh_init = false


    api.listen((err, message) => {
        let mes = message.body
        var expression = /ssh/gi;

        if (mes.match(expression)) {

            // && ssh_open_system == false
            
            ssh_open_system = !ssh_open_system
            cmd.get(
                'pwd',
                function (err, data, stderr) {
                    let ask = `ระบบ ssh ทำงาน ~`
                    api.sendMessage(ask, message.threadID, function () {
                        let callback_ask = `ท่านเบย์กำลังอยู่ไดเรคทอรี่ : ${data}`
                        api.sendMessage(callback_ask, message.threadID);
                    });
                }
            );
        }

        // if(mes.match(expression)){
        //     if(ssh_open_system)
        //         ssh_open_system = !ssh_open_system      
        //         let deny_ask = `ปิดระบบ ssh แล้วค้าา ~`
        //         ssh_init = !ssh_init
        //         api.sendMessage(deny_ask, message.threadID);      
        //     }

        // }

        //  else {
        //     api.sendMessage(message.body, message.threadID)
        // }

        if(ssh_open_system){
            if(ssh_init){
                cmd.get(
                    message.body,
                    function (err, data, stderr) {
                        api.sendMessage(data, message.threadID, function () {});
                    }
                );
            }else{
                
            }
        }
        // try {
        //     if (ssh_open_system) {

        //         if (ssh_init) {
        //             // cmd.get(
        //             //     'ls',
        //             //     function (err, data, stderr) {
        //             //         api.sendMessage(data, message.threadID, function () {
        //             //         });
        //             //     }
        //             // );
        //         } else {
        //             cmd.get(
        //                 'pwd',
        //                 function (err, data, stderr) {
        //                     let ask = `ระบบ ssh ทำงาน ~`
        //                     api.sendMessage(ask, message.threadID, function () {
        //                         let callback_ask = `ท่านเบย์กำลังอยู่ไดเรคทอรี่ : ${data}`
        //                         api.sendMessage(callback_ask, message.threadID);
        //                     });
        //                 }
        //             );
        //             ssh_init = !ssh_init

        //         }

        //     } else {
        //         let deny_ask = `ปิดระบบ ssh แล้วค้าา ~`
        //         ssh_init = !ssh_init
        //         api.sendMessage(deny_ask, message.threadID);
        //     }
        // } catch (error) {
        //     console.log(error);
        // }

        // api.sendMessage(ask, message.threadID);

        // if(mes.macth(/ssh/gi)){
        //     console.log('T')
        // }else{
        //     console.log('F')
        // }
        // api.sendMessage(message.body, message.threadID);
    });
});