module.exports = {
    name: 'ping',
    description: "This command pings people!",
    execute(message, args){
        var ping_messages = [`${message.author} Stop asking me to ping you simp `, `${message.author} What does singing from the heart mean? `, `${message.author} You are special to me :) `]
        var ping_message = Math.floor(Math.random() * ping_messages.length);
        message.channel.send(ping_messages[ping_message]);
    }
}