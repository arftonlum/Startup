#Notes for this class

Questions:
WHat is DNS?
Dig and whois?


What is aria-hidden
Add disabled state to ok button, change button effects on play game stage, add pressed state to nav buttons, Add colors or something to leaderboard, add pedastal background on leaderboard page


Features
Needed
responsive to smaller screen
Wanted
custom board sizes
grid on the board



Important:
ssh -i ~/keys/production.pem ubuntu@thempaths.click
./deployFiles.sh -k ~/keys/production.pem -h thempaths.click -s startup

Add then commit then checkout to go back
Here is the [Read Me](https://github.com/arftonlum/Startup/blob/120faff65610e42ff73fcddaa14e411d22b16a56/README.md).

Next up it looks like I got to get a DNS and stuff. Also, today we learned about h(a)ogan who made CSS, tim burners who made HTML and Brendan Eich who made Javascript.

The Caddyfile is the configuration file for your web service gateway. The public_html directory contains all of the static files that you are serving up directly through Caddy when using it as a web service. We will cover Caddy configuration in a later instruction. The services directory is the place where you are going to install all of your web services once you build them.

1/19/24 Caddy is a web service that listens for incoming HTTP requests. Caddy then either serves up the requested static files or routes the request to another web service. This ability to route requests is called a gateway, or reverse proxy, and allows you to expose multiple web services (i.e. your project services) as a single external web service (i.e. Caddy)

1/22/24
Terminal commands:
echo - Output the parameters of the command
cd - Change directory
mkdir - Make directory
rmdir - Remove directory
rm - Remove file(s)
mv - Move file(s)
cp - Copy files
ls - List files
curl - Command line client URL browser
grep - Regular expression search
find - Find files
top - View running processes with CPU and memory usage
df - View disk statistics
cat - Output the contents of a file
less - Interactively output the contents of a file
wc - Count the words in a file
ps - View the currently running processes
kill - Kill a currently running process
sudo - Execute a command as a super user (admin)
ssh - Create a secure shell on a remote computer
scp - Securely copy files to a remote computer
history - Show the history of commands
ping - Check if a website is up
tracert - Trace the connections to a website
dig - Show the DNS information for a domain
man - Look up a command in the manual
| - Take the output from the command on the left and pipe, or pass, it to the command on the right
> - Redirect output to a file. Overwrites the file if it exists
>> - Redirect output to a file. Appends if the file exists
CTRL-R - Use type ahead to find previous commands
CTRL-C - Kill the currently running command

VI codes
:h	help
i	enter insert mode. This will allow you to type and delete text. Use ESC to exit insert mode. No other commands will work while in insert mode.
u	undo
CTRL-r	redo
gg	go to beginning of file
G	go to end of file
/	search for text that you type after /
n	next search match
N	previous search match
v	visually select text
y	yank or copy selected text to clipboard
p	paste clipboard
CTRL-wv	Split window vertically
CTRL-ww	Toggle windows
CTRL-wq	Close current window
:e	Open a file. Type ahead available. If you open a directory you can navigate it in the window
:w	write file (save)
:q	quit. Use :q! to exit without saving

1/24/24
Some HTML
for images do <img src ="" alt="" width=""> and for links it's <a href= "">link text</a>
I can't figure out the <video> tag, but I found that people online recommend the iframe tag instead. So maybe that is something I should look into. Inputs are really cool and I wish I had learned those previously.
I am gonna do some HTML stuff later.
MOre HTML
form method="get" Default. Appends the form-data to the URL in name/value pairs: URL?name=value&name=value I guess this will give me the information to use on the next page. See login in html

1/29/24
~/goes back to the master directory I think. So my reference was ~/keys/production key'
1/31/24
CS id="" we can make this attribute set with #whatever ID

2/16/24
JS
[x,y] = a when a is an array this will assign the first to values of a to x and y
... variatic operator means everything else.

2/17
Goals for JS
Animation for the rotate. Path turns yellow, custom board size. NExt button?

<canvas id="myCanvas" width="100" height="100" style="border:1px solid grey"></canvas>

<script>
const c = document.getElementById("boardofthegame");
const ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(0, 0, 50, 0, .5*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(100,100,50,Math.PI,1.5*Math.PI);
ctx.strokeStyle="green";
ctx.stroke();
</script> 
//code for two arcs in a canvas
ctx.beginPath();
ctx.moveTo(0,50);
ctx.lineTo(100,50);
ctx.moveTo(50,0);
ctx.lineTo(50,100);
ctx.stroke();

regex /A|f/i a or f not case sensitive. / / means regexq
queryselector only gets the first one. queryselectall is for all
JSON doesn't use undefined, and uses double quotes. 
To point to another DNS record use CNAME learn about A type
learn about arrow syntax again

can use @import url("")to import a font
From outside to in margin border, padding-space around content, content
const f = y => ++y; console.log(f(3)) out puts 4? div is division
a.reduce((a,v)+> [a,v].join(':')); console.log(b) outputs cow:rat:fish
function is const f =(x)=>{}, function f(x){}, const f =function(x){}
javascript <script></script>, <script src='main.js'/>, <div onclick='1+1'/>
Valid JSON {"x":3}
console command that makes a script executable chmod +x deploy.sh

p= promise(set timeout, console.log taco, resolve true)
consle log burger
p, .then result -shake, catch-salad, finally-noodles
console log fries
burger, fries taco, shake, noodles never throws an error so no salad

a= async(return new promise(set timeout-console log D resolve true))
try(consolelog('a')), await a, console log ('b')
catch(e)(cosnole log C)
ADB

.text{
    width: 100%;
    background-color: #ffffff60;
    flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.players{}
.player-name{
  font-weight: bold;
  text-decoration: none;
}
#boardofthegame{
  background-color: white;
}

Dom textcontent Sets the child text for the an element, object is {n:1}
127.0.0.1 localhost always
DNS record types A/AAAA Address- specific IP Addresses IPV4/IPV6
CNAME Canonical Name. Alias. NS- NAme Server- Authority for queries and proof of ownership
TEXT- Metadata Used for policies and verification
SOA- Start of Authority- propogation of information