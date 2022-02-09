# Datawood-webserver
Nodejs webserver for the datawood project

http://raspberrypiscale.local/weight/last
User:pi
Password raspberry: robotlab


Result is in json and looks like this:

{"weight":320}


## Start the server
To start the api server go to the directory on the pi:
```
cd datawood/webserver 
sudo node backgroundScaleReader.js
sudo node server.js
```
