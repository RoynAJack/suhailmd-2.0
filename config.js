const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="roynajack303@gmail.com"
global.location="Harare,Zimbabwe."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Harare/Zimbabwe";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo😎👽" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263774918784";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_18_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNixcbiAgICAgICAgOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDY3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk2LFxuICAgICAgICA3OCxcbiAgICAgICAgNjksXG4gICAgICAgIDg3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzLFxuICAgICAgICAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyLFxuICAgICAgICAxODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk5LFxuICAgICAgICAyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI3LFxuICAgICAgICA1OSxcbiAgICAgICAgNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNixcbiAgICAgICAgMTI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZLenF1SGI1T2RBSDhnQlVDRkp5YkJRRER1aDZOV0lkZjg3QzlSdjRTa289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhjbUxwNnM0UXhpVXc1WmRra3RxVndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGI4MWRlMjAtMDY0NC00NmNlLTk0MzQtOTAzOWM5MzE3NDE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDI1MyxcbiAgICAgIDE4MixcbiAgICAgIDE0MCxcbiAgICAgIDIyOCxcbiAgICAgIDEwNSxcbiAgICAgIDUsXG4gICAgICAyMDUsXG4gICAgICA0OSxcbiAgICAgIDEzMyxcbiAgICAgIDQxLFxuICAgICAgNTgsXG4gICAgICAyNCxcbiAgICAgIDI0MCxcbiAgICAgIDc5LFxuICAgICAgMjgsXG4gICAgICAxMCxcbiAgICAgIDkxLFxuICAgICAgNjQsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICAzOSxcbiAgICAgIDI0NSxcbiAgICAgIDExOSxcbiAgICAgIDEwLFxuICAgICAgMjMyLFxuICAgICAgODIsXG4gICAgICAyMzMsXG4gICAgICAxODYsXG4gICAgICAxOTgsXG4gICAgICA5LFxuICAgICAgMTIwLFxuICAgICAgMTQyLFxuICAgICAgMTUwLFxuICAgICAgNjYsXG4gICAgICA5NSxcbiAgICAgIDIzMCxcbiAgICAgIDE2MCxcbiAgICAgIDgyLFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJBNzE0R0hYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzQ5MTg3ODQ6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4ODY1MjUxMjYxMjU0MjoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZUM1OVVFRUwvTDA3b0dHQTBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdwOEZiNG5Ca1N0M0xzM0ZIMm9xRTluWHgvUlNDN0kyeTZmTXpPeVFqRTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia09FWHM2QU52RjRGbUIyLzY1RXlJc1FGOVp0VVl1UFNZb1ZxVEg2R00yOWdPcFJlZzBOR0lQYUlReXZjVVYxa3VJREdYOWQxc2drUVp5Y25xdlhCQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZm9aZXViTi9OV3NnUG53N1E2b0VkVGpVUGlNZ1BjcGUxVGVSMktUcGlmVXA4M2RvRWprU2x5UFpOV0J1ZExIN0Z3S2M4cnpkWnUyR1FpeVl5bmxhZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzc0OTE4Nzg0OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNjE3MDkxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".","+",",","*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "The Bosses😎👽 ",
  packname: process.env.PACK_NAME || "Suhail XMD😎👽",
  botname : process.env.BOT_NAME  || "Suhail-XMD👽😎",
  ownername:process.env.OWNER_NAME|| "Mabhosiedu RAJ👽😎",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL👽😎"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
