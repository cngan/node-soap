var https = require('https')
  , fs = require('fs');

var options = module.exports.options = {
  strictSSL: true,
  //ca: [ fs.readFileSync('./cert/etub.pem') ],
  ca: fs.readFileSync('./cert/etub.pem'),
  //ciphers: 'AES256-SHA',
  secureProtocol: 'SSLv3_method',
  rejectUnauthorized: true,
};

options.agent = new https.Agent(options);