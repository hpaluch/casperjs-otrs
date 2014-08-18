
casper.test.begin('Logout from OTRS', 6, function suite(test) {

    // need valid OTRS page for ChalengeToken
    casper.start(otrs_casperjs.url+"?Action=AgentDashboard", function() {
         test.assertEquals(this.getTitle(),otrs_casperjs.dashb_title,"Expected title '"+otrs_casperjs.dashb_title+"'"); 
         test.assertExists("a#LogoutButton");
         this.click("a#LogoutButton");
    });

    casper.then(function(){
         test.assertEquals(this.getTitle(),otrs_casperjs.logout_title,"Expected title '"+otrs_casperjs.logout_title+"'"); 
         test.assertExists("form[name=login]");
         test.assertExists("form[name=login] input[name=User]");
         test.assertExists("form[name=login] input[name=Password]");
    });

    casper.run(function() {
        test.done();
    });
});

