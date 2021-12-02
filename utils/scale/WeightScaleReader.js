const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')

module.exports = {
  async getWeight(){
    const port = new SerialPort('/dev/ttyUSB0', {
      baudRate: 9600,
      dataBits: 8,
      stopBits: 1,
      parity: "none"
    })

    // port.on('readable', function () {
    //   console.log('Data:', port.read())
    // })

    // // Switches the port into "flowing mode/"
    // port.on('data', function (data) {
    //   console.log('Data:', data)
    // })

    // Pipe the data into another stream (like a parser or standard out)
    const parser = port.pipe(new Readline({ delimiter: '\r\n' }));
    parser.on('data', function (data){
      if(data.includes("W:+")){
        data = data.replace('W:+','')
        data = data.replace('kg','')
        var weightInGrams = data.replace('.','')
        if(weightInGrams != 000){

          console.log(weightInGrams)
          port.close(function (err) {
            return weightInGrams
          })
        }
      }
    })
  }
}
