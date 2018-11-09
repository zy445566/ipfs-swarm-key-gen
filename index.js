const os = require('os')
exports = module.exports = function getSwarmKey(){
    const buf = Buffer.allocUnsafe(32);
    return `/key/swarm/psk/1.0.0/${os.EOL}/base16/${os.EOL}${buf.toString('hex')}`;
}
