const os = require('os')
const crypto = require('crypto')

exports = module.exports = function getSwarmKey(){
    const buf = crypto.randomBytes(32); 
    return `/key/swarm/psk/1.0.0/${os.EOL}/base16/${os.EOL}${buf.toString('hex')}`;
}
