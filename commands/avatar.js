module.exports = {
    name: 'avatar',
    description: "Display's User's Avatar",
    execute(message, args){
        const user = message.author;
         message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
	}
    }
        
 