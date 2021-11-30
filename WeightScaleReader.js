const bindings = require("@serialport/bindings");

/**
 * Get a list of available serial ports. 
 * @param {boolean} verbose - Log results if true. 
 * @returns {{status: string, data: array|object}} - 'ok' or 'fail' with details to handle elsewhere. 
 */
const listPorts = async (verbose) => {
  let result;
  try {
    const portList = await bindings.list();
    if (verbose) console.table(portList); // Print out the array if desired.
    result = { status: "ok", data: portList };
  } catch (err) {
    if (verbose) console.log(err); // To see what the error is, if desired.
    result = { status: "fail", data: err };
  }
  return result;
};

// Run the command.
const { portStatus, portList } = listPorts(true);
// If portStatus is 'ok' then portsList is ready to use. 
