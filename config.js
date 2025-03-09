const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU23KqSBT9l36NOYIIilWpGlAEFS9cFHDqPDTQQCs3oUEh5b9PEZNKHuZkMm9dfVl79Vpr71eQZrhEK9SAySvIC1xDgrolaXIEJkCsggAVoAd8SCCYAGctH3KRmmo+Y+Wqv9yNL6tpdLgodS7QxnY8o2/eVr3EtO29gHsP5JUbY+8bQMnwrsV22de3zcm63gZ13d7YYF9tizYmh+NlFq2ejAwnSBy+gHuHCHGB01DKI5SgAsYr1OwgLn5GP5mdqmMgb8P2aXQW6yPNhav9biFQNLPmKfqqV5JyOlpuONd+Rn9NbMuQyE5w1Npj1fFKneqQSrhWY/tRv5RXND4NaXGaMOcH/RKHKfIXPkoJJs2PdQ/nhcGww+SYUhvWy+m0fQr56XDlsWkznmmxU1CbsGbn/pn6GfFoPdr3N9Z+4+wkyhd4qHg5drylUFbczp8ry3YoBsaOw9T6K/Fd8ZGV8//RXZaygJdO+sCD44MdneSF2O4NPJxNg91wECjG0pwrpMwCefwz+tYoMVxei8WVu0cn5Zwk9vQ6cgd8UCDDutiWuW+v5saTTe2TPiRV8R1LhDSZVpXKTK212UQK6R/Xshk1TuvzI8NPaAtK9Gou3NDuEB9bXB+iapZk55PwtNnFiRji25oetaXF2H1XPaTKbO2ehJe3H51Rs/DBhL73QIFCXJICEpyl3R5L9QD0awN5BSJv6gLzPLJuhnCSm0u2PR9cW6cuzsp4UoYmF0oq3y6Yvjg0fTfXXkAP5EXmobJEvoJLkhXNGpUlDFEJJn//7oEU3cjDt64aQ/dAgIuS7NMqjzPof5j6cQg9L6tSYjSpN+0WqAAT6nMbEYLTsOxkrFJYeBGu0TSCpASTAMYluveAj2rsoQ4PWEdGm7tcpamNnKNRzZu70TbsKEdZ+rjCet6YcynqmWHZ8fPQZYJnyFGDZxRAj+Ncynd9CHoAv7dM9+aPDlZ0P5/aJ6yzmhFuDg57a5QCOQK9eIyjh/SoQD6YkKJCPeBC71zlZnZG6Te4V1khY3Q0RfWKFUdudG6pK6FUtkX2BfdhKZi8fo6paeZ3eAdFtNWRzoEeSN4SiLufD1iW45nBYMAwgwk9+Kv8de2EhHn+K0UE9EAKu9tASJKGtF2ddxM6BB8RiOMSTMB081SN2b0obdNFpQ5lWdiHwjQUwKdpH+F/pGsR6ZVNWL1/ydjKodBJtBNevYWVZEGWdYhE9bdNHs5cevzyLyCdHpLBaqelmNtH3dalGWOKZ/a62u7VUsJ+spiSuVSgWb1y+DhTN5aur92x7RyYp9sGX+15WtB2uj4Koe6YkhYzTbTZi9pLV+0Rnq/F1qboHusz73hZS2FOyh3TWVP1oV6F1SbLimUIs77Oe4K7peY3eSu62JMdjeBElGVhSTllOyLL4eqqWu5CPh5uPqVH7235Nhbi93GM3zrm9T1qAUZv0+3dhP806zP11L33BeN9Xv4hWaKx2LvxCO0D7rJ1k42SXQ9sbYwdNZonFbJUfbNry4sjDPgA3O+/eyCPIQmyIgETUCZu1xoxLInw2bUmTlBJYJKDCT0a0iw34Pnx/R/r9+eZ6gcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

