const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KiSBT8l3rVHgG5GtERC4jiDcUbwsY8FFBgyR0KETv89w3a7ph+2Jnt5amiisqTlZnnvIE0wxVaoBaM3kBe4iskqFuSNkdgBJQ6CFAJ+sCHBIIR6E2TQ74znBLi4sTc6y2b1JZP87EtqPFKKS5MceYKr+BO0St49EFeuzH2/gAoU1l9vzX5eVqwMJsKrDHE7i6DwRgvjvNmQpyU3a5Pc3ZPvYJHhwhxidNQy88oQSWMF6jdQFx+j/5qtrYT3VkkWzhRFYG9KNP7xLAYS8cRpShLVY2MbNpcF8k36V/DIIsyvvaSmx/tZR/pQ2F+EqmBaaYbLMnMrSqLm7C9jcMn/QqHKfJnPkoJJu23dY82bW8T0UP7vI3seDbVPGhE3JyE/nqSmPZKmViQsr3tnNa+R/wg9FbiWL2N5dNUZxXr6MwSejDoFWpzzLfblpgqEhfJ1D3aX4lvys+sRP9H93B6vWw15CuGdVsz2toJYNzqCscbNrnPZjm/PR+rBe0Iw/B79Ddy5MYZ1pvlJOFroaEPtbq5xhdTk0XHvmM/mHF0fD0UqviLPiR1+SeW2qyueXS/uDvmat7n2ebK+JM1JQlQ1eaCnHuqZTELQ7I2/MKZL2x0bhodwi2cNHYzc4p7FnnHo708ODYpl5cwTvmbIr++vyhC7cwHI/rRByUKcUVKSHCWvu+xbB9A/7pDXonIu7zAgYd1VkZDWZKaC5Wgxqhof8wPWEsPubtmeTdB3Q/ko8Zlr6AP8jLzUFUhX8cVycp2haoKhqgCo79/9kGKbuRpXFduSPdBgMuKHNI6jzPof7r6eQg9L6tTsmtTT+0WqAQj6tc2IgSnYdXpWKew9M74itQzJBUYBTCu0KMPfHTFHurwgMVtk4u+MneGOi9FZkhYjnPljvI5S5+/8K4vcZwQvEAXuS+s67ovkujyLxxkGcn1ES+ICPQB/uiZ7s5vLVSWK+EScxWeNJdLq3sDjO+7sxRtPoL11B6VyAcjUtaoD1zoRXW+zyKU/gF3vO4J84HunAIv2K4Wibl3dkqZCtdU/oL79BSM3n7NKTXzO7yNcuLGqxML+iB5jyDuXi7RvERJEkdxIjPiub+qH00nJMzzHykiHe6H6N0NHxGI4wqMgLoIcNOyJnfdba6hbY93sryQ5S4InyZ9pv2Zpoa2SuZg0cWcosTQYQ5oEhg1uzQFn8u0eR0rmD7huLcZ2/8G0jWwjSvVaQPaJW2Dk3bdm56svXWKJ7Kv29qEOe+SXSJEZtw20mGSRFV2ETU/dMd3wTDIMjCTdexJxWAvnjT+nC9C6joOX7tqz7B8LVaxG1kydNtdzbcin2TKDJNoXmmazBTLuwMrfC9M83IKUXDkgnvhL+mhSPSplVbnfQ97GCbaHttmObumqrFWqAtnjc1nH77Pgfhj/uL3Dnn7iFaA0fs4S2Fn0X+Z8zXl1KP/BeNjQP4uoZ5xLKR4QiD2jc1s6sf6+XR3a5VaDxFUVDc3bXJk8+DSMODx+NkHeQxJkJUJGAGY+mWGfdAHMayI/KtR9zhBFYFJDka0wFKixIsi0wdJK+f5jkDy2d9A7r7lZgke/wAc+pBO+wcAAA==',
    PREFIXE: process.env.PREFIX || ",",
    OWNER_NAME: process.env.OWNER_NAME || "◄⏤͟͞➸⃝❥͜͡𝑆𝛩𝑈𝑅𝛥𝐽𝛪𝑇➸⃝⚡",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "◄⏤͟͞➸⃝❥͜͡𝑆𝛩𝑈𝑅𝛥𝐽𝛪𝑇➸⃝⚡",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/y16skc.jpg',
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

