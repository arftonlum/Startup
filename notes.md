#Notes for this class
Add then commit then checkout to go back
Here is the [Read Me](https://github.com/arftonlum/Startup/blob/120faff65610e42ff73fcddaa14e411d22b16a56/README.md).

Next up it looks like I got to get a DNS and stuff. Also, today we learned about h(a)ogan who made CSS, tim burners who made HTML and Brendan Eich who made Javascript.

The Caddyfile is the configuration file for your web service gateway. The public_html directory contains all of the static files that you are serving up directly through Caddy when using it as a web service. We will cover Caddy configuration in a later instruction. The services directory is the place where you are going to install all of your web services once you build them.

1/19/24 Caddy is a web service that listens for incoming HTTP requests. Caddy then either serves up the requested static files or routes the request to another web service. This ability to route requests is called a gateway, or reverse proxy, and allows you to expose multiple web services (i.e. your project services) as a single external web service (i.e. Caddy)