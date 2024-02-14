#Notes for this class

Questions:
What is github? Def thought it was my website
WHat does shell in mean?
WHat is the folder on my computer?
How to deploy?
HOw to change actual website
What is aria-hidden
Add disabled state to ok button, change button effects on play game stage, add pressed state to nav buttons, Add colors or something to leaderboard, add pedastal background on leaderboard page
Do I need to put like Script> on the game and leaderboard pages. HOw do they reference things? How should I make my game? Objects? Map object?
Print statements? How to run JS. Sandbox.

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
