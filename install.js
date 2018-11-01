const os = require('os');
const spawn = require('cross-spawn');
if (os.platform() === 'darwin') {
    spawn.sync('npm', ['run', 'native_install'], {
        input: 'MacOS detected. Building native module.',
        stdio: 'inherit'
    });
}
