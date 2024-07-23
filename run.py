from subprocess import Popen

Popen(["python", "serial_reader.py"])
print("Started serial_reader.py")

# doesn't work without sheel=True? says can't find file 
Popen("npm run dev", shell=True)
print("Started webserver")
print("Exiting.")
