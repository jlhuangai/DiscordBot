module.exports = {
    name: 'ping',
    description: "This command pings people!",
    execute(message, args){
        message.channel.send("Ping Test");
    }
}