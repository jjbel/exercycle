# Exercycle App

In the root directory of the project, simply run:

```sh
python run.py
```

---

This is the app-portion of my DIY exercycle project.

The website displays count, speed and history in realtime.

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
3. [python Popen runs in background](https://stackoverflow.com/a/7224186)
4. [Killing a process on windows](https://stackoverflow.com/a/73528296)
