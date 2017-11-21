var app = new Vue({
            el: '#choosejedate',
            methods:function() {
                this.mounted()
            },
            mounted:function(){
                $.jeDate("#vueymd",{
                    format: "YYYY-MM-DD hh:mm:ss",
                    festival:true,
                })
            }
   	});

export { 
  time
}

