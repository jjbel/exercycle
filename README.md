# Exercycle App

This is a website which displays count, speed and history for my exercycle in realtime.

Uses:

1. [express-js](https://expressjs.com/) - simple, fast webserver
2. [pyserial](https://pyserial.readthedocs.io/en/latest/pyserial.html) - for talking to the Arduino over serial

## Pitfalls / Lessons Learned

1. I found nodeJS unsuitable for reading from a serial: there's a great library serialport, but sad to say, javascript `Promise`s defeated me.
   Specifically I was unable to call `SerialPort.list()` because its async. And I couldn't find a way to delay calls to read, so that I don't get broken data.

2. When accessing a COM port on Windows, no other app should be using it. So close any arduino IDE / processing windows.

## Credits

### StackOverflow

1. [Reading COM port from windows terminal](https://stackoverflow.com/a/3924069)
2. [Debugging "access denied to port"](https://stackoverflow.com/questions/1153547/access-to-the-port-com1-is-denied)
