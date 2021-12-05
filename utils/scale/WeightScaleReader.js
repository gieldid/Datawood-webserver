const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

module.exports = {
  /**
   * Gets the weight from the scale by using the rs232 port.
   */
  async getWeight(){
    try {
      const port = new SerialPort('/dev/ttyUSB0', {
        baudRate: 9600,
        dataBits: 8,
        stopBits: 1,
        parity: "none"
      },function(err){
        if(err){
          return "Failed to connect to rs232 device";
        }
      }); 

      const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

      parser.on('data', function (data){
        if(data.includes("W:+")){
          data = data.replace('W:+','');
          data = data.replace('kg','');
          var weightInGrams = data.replace('.','');
          if(weightInGrams != 000){
  
            console.log(weightInGrams);
            port.close(function (err) {
              return weightInGrams;
            })
          }
        }
      }) 

    } catch (error) {
      throw new Error("Failed to connect to rs232 device");
    }
  }
}
