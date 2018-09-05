var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();   

var add = document.getElementById("btnAdd");//variavel para o botão Add Item
    var qtdId = 1;// var para controle do ID da quantidade
    var priceId = 1;// var para controle do ID do preço 
    add.onclick = addItemToList;//chamando a função addItemToList


    var myNodelist = document.getElementsByTagName("LI");
        var i;
        for (i = 0; i < myNodelist.length; i++) {
          var span = document.createElement("SPAN");
          var txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          myNodelist[i].appendChild(span);
        }
    
    function addItemToList() {
        var list = document.createElement("li");// var de controle do elemento
        var item = document.getElementById("txtAdd").value;//var recebe o valor do texto do campo txtAdd
        var x = document.createTextNode(item);//definindo a variavel que levará o texto ao elemento
        
        //inserindo o campo para quantidade no novo item
        var qtdInput = document.createElement("input");
        qtdInput.setAttribute("type", "number");
        qtdInput.setAttribute("size", "1");
        qtdInput.setAttribute("id", "nbmQtd"+qtdId);
        qtdId++;
        list.appendChild(qtdInput);
        
        
        //inserindo o texto no novo item
        list.appendChild(x);
        if(item == "") {
            alert("Preencha o campo para adicionar um item!");
        } else {
            document.getElementById("ulList").appendChild(list);
        }
        document.getElementById("txtAdd").value = "";
        
        //inserindo o campo para preço no novo item
        var priceInput = document.createElement("input");
        priceInput.setAttribute("type", "number");
        priceInput.setAttribute("size", "1");
        priceInput.setAttribute("id", "nbmPrice"+priceId);
        priceId++;
        list.appendChild(priceInput);
        
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        list.appendChild(span);
        
        
        
        
        
        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
          
}
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        } 
    }



