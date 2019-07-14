$(document).ready(function() {
	//Netpluspay integration

	$("#netplus-pay").click(function (e) {

var random = Math.floor((Math.random() * 1000000)+1);
		var order_id = 'MET' +''+random; 
		var total_amount = '100';
		var merchant_id = "TEST5b0c3742ac4ce";
		//var merchant_id = "MID5b0c3ac715d976.33987466";
		

var merchant_name = $('#name').val();

		if (merchant_name === ''){
			var merchant_name = 'Netplus Demo';
		}

		//var merchant_name = 'demo@netplus';
		var merchant_email = 'demo@netplus.com';

		console.log(order_id);
        e.preventDefault();
        netpluspayPOP.setup(
            {
                merchant: merchant_id,
                customer_name: merchant_name,
                email: merchant_email,
                amount: total_amount,
                
                currency_code:"NGN",
                narration: "Netpluspay Test",
                order_id: order_id,
    container: "paymentFrame",
                callBack: function (resp) {
                    this.closeIframe();
                    console.log(resp);
                },
                onClose : function(){
                    console.log('window closed');

                }
            }
        );
        netpluspayPOP.prepareFrame();
    });



            






$("#netplus-paye").click(function (e) {
		var random = Math.floor((Math.random() * 1000000)+1);
		var order_id = 'NET' +''+random; 
		var total_amount = '1000';
	
		var merchant_id = "TEST5b0c3742ac4ce";
		//var merchant_id = "MID5b0c3ac715d976.33987466";

    	var merchant_name = $('#name').val();

		if (merchant_name === ''){
			var merchant_name = 'Netplus Demo';
		}
     
		// var merchant_name = 'demo@netplus';
		var merchant_email = 'demo@netplus.com';

		console.log(order_id);
        e.preventDefault();
        netpluspayPOP.setup(
            {
                merchant: merchant_id,
                customer_name: merchant_name,
                email: merchant_email,
                amount: total_amount,
                currency_code:"NGN",
                narration: "Netpluspay Test",
                order_id: order_id,
				container: "paymentFrame",
				onClose  : function() {
					this.closeIframe();
                window.location = "http://localhost/completed/index.html"
				},
                callBack: function (resp) {
                	this.closeIframe();
                    console.log(resp);

                }
				
			}
			
        );
        netpluspayPOP.prepareFrame();
    });


	
    
    
});
