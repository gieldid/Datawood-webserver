# Datawood-webserver
Nodejs webserver for the datawood project

http://raspberrypiscale.local/weight/last
User:pi
Password raspberry: robotlab


Result is in json and looks like this:

{"weight":320}


## Start the server
To start the api server run the following commands when shelled into the pi (I recommend using vnc viewer so that you don't have to keep the terminal open on your own pc):
```
cd datawood/webserver 
sudo node backgroundScaleReader.js
sudo node server.js
```
