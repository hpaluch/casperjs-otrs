CasperJS example tests for OTRS 3.2 with ITSM 
=============================================

Here are simple functional tests for OTRS using CasperJS framework.

Setup
-----
Instructions for CentOS 6.5/x86_64:

Install PhantomJS browser from http://phantomjs.org/download.html, for example:

	wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.7-linux-x86_64.tar.bz2
	sudo tar xvjf phantomjs-1.9.7-linux-x86_64.tar.bz2 -C /opt

Install CasperJS:

	wget https://github.com/n1k0/casperjs/zipball/1.1-beta3
	sudo unzip -d /opt 1.1-beta3

Have installed OTRS 3.2 or you may try my docker image from https://registry.hub.docker.com/u/hpaluch/docker-otrs/

Set your PATH variable to include phantomjs and casperjs, for example:

	export PATH=/opt/phantomjs-1.9.7-linux-x86_64/bin:/opt/n1k0-casperjs-4f105a9/bin:$PATH

Customize otrs_settings.js - at least url, login and passwd.

Run tests:

	./run_me.sh


Resources
---------

* http://docs.casperjs.org/en/latest/testing.html
* http://phantomjs.org/


