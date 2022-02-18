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
```

In a second terminal window type the following commands:

```
cd datawood/webserver 
sudo node server.js
```

## How it works
The backgroundScaleReader.js is a background task that is resposible for getting the weight from the scale using the rs232 cable, it puts the weight in a mariadb database.
The server.js file is the nodejs webserver once the following url is called: weight/last the server tries to get the latest row of weight added to the db.

## Installing 

- Setup the pi with nodejs: https://www.w3schools.com/nodejs/nodejs_raspberrypi.asp
- Install mariadb: https://raspberrytips.com/install-mariadb-raspberry-pi/

Find a suitable directory on your pi and download this git repo to it. In the same directory as the package.json run the following command:

```
npm install
```

