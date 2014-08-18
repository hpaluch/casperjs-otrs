

casperjs test \
   --includes=otrs_settings.js \
   --pre=01_login.js \
   --post=99_logout.js \
   tests/*.js

