
casper.test.begin('Dashboard', 5, function suite(test) {

    // need valid OTRS page for ChalengeToken
    casper.start(otrs_casperjs.url+"?Action=AgentDashboard", function() {
         test.assertEquals(this.getTitle(),otrs_casperjs.dashb_title,"Expected title '"+otrs_casperjs.dashb_title+"'"); 
         test.assertSelectorHasText("h1",otrs_casperjs.dashb_h1);
         // settings link, grrr
         test.assertExists("div.SidebarColumn a[title='"+otrs_casperjs.dashb_sett_title+"']");
         // hidden in Settings
         test.assertNotVisible('input#Settings'+otrs_casperjs.dashb_list_id);
         // show settings box
         this.click("div.SidebarColumn a[title='"+otrs_casperjs.dashb_sett_title+"']");
    });

    casper.waitUntilVisible('input#Settings'+otrs_casperjs.dashb_list_id,function(){
         // just to be sure
         test.assertVisible('input#Settings'+otrs_casperjs.dashb_list_id);
    });

    casper.run(function() {
        test.done();
    });
});

