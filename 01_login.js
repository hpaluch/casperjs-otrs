
casper.test.begin('Login to OTRS', 6, function suite(test) {

    casper.start(otrs_casperjs.url, function() {
         test.assertEquals(this.getTitle(),otrs_casperjs.login_title,"Expected title '"+otrs_casperjs.login_title+"'"); 
         test.assertExists("form[name=login]");
         test.assertExists("form[name=login] input[name=User]");
         test.assertExists("form[name=login] input[name=Password]");
         test.assertExists("button#LoginButton");
         this.waitWhileSelector("button#LoginButton:disabled");

         this.fill("form[name=login]",{
                 User: otrs_casperjs.login,
                 Password: otrs_casperjs.passwd
         },true);
    });

    casper.then(function(){
         test.assertEquals(this.getTitle(),otrs_casperjs.dashb_title,"Expected title '"+otrs_casperjs.dashb_title+"'"); 

    });

    casper.run(function() {
        test.done();
    });
});

