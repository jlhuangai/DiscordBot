module.exports = {
    name: 'power',
    description: "Grants people mod power",
    execute(message, args){
        let role = message.guild.roles.cache.find(r => (r.name === "Mod" || r.name === "Moderator"));
        if(message.member.roles.cache.some(role => role.name === 'Mod' || role.name === "Moderator")) {
          message.channel.send( 'Welcome to the mod team: ');}
        
        else {
            message.channel.send('Unfortunately you do not have permissions to use this command');
            message.channel.send("Let me add it for you");
            message.member.roles.add(role);
            message.channel.send("--------------")
            message.channel.send("Now you have mod, try command again");
            

        }
    
    }
       
}