module.exports = {
    name: 'ping',
    description: "This command pings people!",
    execute(message, args){
        message.channel.send( `${message.author} Stop asking me to ping you simp `);
    }
}