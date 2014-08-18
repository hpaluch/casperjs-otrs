
casper.test.begin('Search Ticket', 7, function suite(test) {

    // start with Dashboard page
    casper.start(otrs_casperjs.url+"?Action=AgentDashboard", function() {
         test.assertEquals(this.getTitle(),otrs_casperjs.dashb_title,"Expected title '"+otrs_casperjs.dashb_title+"'"); 
         test.assertSelectorHasText("h1",otrs_casperjs.dashb_h1);

         test.assertExists("a#GlobalSearchNav");
         // Search box
         this.click("a#GlobalSearchNav");
    });

    // OTRS uses fake popup (there is special div in main body)
    casper.waitUntilVisible('div.Dialog select#Attribute option[value=TicketNumber]',function(){
         // just to be sure
         test.assertVisible('div.Dialog select#Attribute option[value=TicketNumber]');
         this.fill('form#SearchForm',{
                AttributeOrig: 'TicketNumber'
         },false);
         this.click('select#Attribute + button.Add');
    });

    casper.waitUntilVisible('form#SearchForm input[name=TicketNumber]',function(){
         // just to be sure
         test.assertVisible('form#SearchForm input[name=TicketNumber]');
 
         this.fill('form#SearchForm',{
                TicketNumber: otrs_casperjs.search_tn
         },true);
         

    });
    // OTRS uses fake popup (there is special div in main body)
    casper.waitWhileVisible('div.Dialog',function(){
         // just to be sure
         test.assertNotVisible('div.Dialog');
         test.assertEquals(this.getTitle(),otrs_casperjs.search_title,"Expected title '"+otrs_casperjs.search_title+"'"); 
    });
 
    casper.run(function() {
        test.done();
    });
});

