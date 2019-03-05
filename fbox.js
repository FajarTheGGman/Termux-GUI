var shell = require("shelljs");

console.log("installing package.....")
shell.exec("apt-get install fluxbox tigervnc openbox pypanel xorg-xsetroot curl -y");

shell.exec("curl 'https://d-07.winudf.com/b/apk/Y29tLmtlZXB2aWQuc3R1ZGlvXzMwXzNkNjIwNjg2?_fn=S2VlcFZpZCBWaWRlbyBEb3dubG9hZGVyX3YzLjEuMy4wX2Fwa3B1cmUuY29tLmFwaw&_p=Y29tLmtlZXB2aWQuc3R1ZGlv&as=c7cca94f185ee9e4fd9b817faf6ea1445c7de3c3&c=1%7CTOOLS%7CZGV2PUtlZXBWaWQlMjBTdHVkaW8mdD1hcGsmdm49My4xLjMuMCZ2Yz0zMA&k=eeae36de60d9d3499a2fc2c7485c8f585c80fea0' -o vncviewer.apk");
shell.exec("mv vncviewer.apk /storage/emulated/0");

setTimeout(
shell.exec("vncserver");
),4000);
shell.cd(".vnc");
shell.rm("xstartup");
shell.exec("curl https://pastebin.com/raw/NaS18BrG -o xstartup");
shel.exec("vncserver");
console.log("Graphical user interface setup by fajar firdaus")
console.log("")
console.log("[===================]")
console.log("Coder : Fajar Firdaus")
console.log("Fb : Fajar Firdaus / Ace.of.spades729")
console.log("IG : fajar_firdaus_7")
console.log("YT : iTech7732")
console.log("[===================]")
console.log("")
console.log("Setup done. and now install vncviewer on your internal storage and run the server")
console.log("[How to run server]")
console.log("1.type vncserver")
console.log("2.open app vncviewer")
console.log("3.input localhost by 127.0.0.1:5900 (port will change if you shutdown the server)")
console.log("4.input your pc name")
console.log("5.run the server and input the password")
console.log("Done")
