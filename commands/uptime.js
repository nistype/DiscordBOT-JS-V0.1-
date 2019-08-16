const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  let cMS = convertMS(client.uptime);
  let uptime =
    cMS.d +
    " jours : " +
    cMS.h +
    " heures : " +
    cMS.m +
    " minutes : " +
    cMS.s +
    " secondes ";

  const uptimeEmbed = new Discord.RichEmbed()
    .setColor("#f76227")
    .addField(`🐍 ┇ Le bot est en ligne depuis:`, `${uptime}`)
    .setTimestamp()
    .setFooter('Nistype', 'https://i.imgur.com/gtBOpRE.jpg');

  message.channel.send(uptimeEmbed);
  message.delete();
};

function convertMS(ms) {
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return {
    d: d,
    h: h,
    m: m,
    s: s
  };
}

module.exports.help = {
  name: "uptime",
};
