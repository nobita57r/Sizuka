module.exports = {
  config: {
    name: "top",
    aliases: ["tp" , "yeager" ],
    version: "1.0",
    author: "xos Eren",
    role: 0,
    shortDescription: {
      en: "Top 15 Rich Users"
    },
    longDescription: {
      en: "Displays the top 30 richest users in terms of money with formatted values"
    },
    category: "group",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ api, args, message, event, usersData }) {
    function formatMoney(amount) {
      if (amount >= 1e9) return `${(amount / 1e9).toFixed(2)} B💰`;
      if (amount >= 1e6) return `${(amount / 1e6).toFixed(2)} M💸`;
      if (amount >= 1e3) return `${(amount / 1e3).toFixed(2)} K💰`;
      return amount.toString();
    }

    const allUsers = await usersData.getAll();
    const topUsers = allUsers.sort((a, b) => b.money - a.money).slice(0, 15);
    const topUsersList = topUsers.map(
      (user, index) => `${index + 1}.𝐏𝐥=  ${user.name}    ☢️                                              𝐁𝐚𝐥 >     ${formatMoney(user.money)} 💵`
    );
    const messageText = `𝐑𝐈𝐜𝐡𝐞𝐬𝐭 𝐏𝐥𝐚𝐲𝐞𝐫 𝐂𝐨𝐮𝐧𝐭𝐞𝐝       =        \n 𝐏𝐥𝐚𝐲𝐞𝐫 => 𝐓𝐨𝐩 15 \n${topUsersList.join('\n \n')}\n\n  🔁 𝐂𝐨𝐧𝐭𝐢𝐧𝐮𝐞 𝐄𝐫𝐧𝐢𝐧𝐠 𝐭𝐨 𝐈𝐦𝐩𝐫𝐨𝐯𝐞 𝐘𝐨𝐮𝐫 𝐑𝐚𝐧𝐤 𝐒𝐜𝐨𝐫𝐞 💰`;
    message.reply(messageText);
  }
};
