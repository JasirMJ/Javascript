
$(document).ready(function(){

    $('#equals').click(function(){
        if(document.getElementById("d").value=="")
        {
            show(0)
        }
         try 
        { 
            show(eval(document.getElementById("d").value)) 
        } 
        catch(e) 
        {
            show('Error') 
        }
    });

    $('#sin').click(function(){
        teta=document.getElementById("d").value;
        document.getElementById("Fn").value="sin ("+teta+")"
        try{
            
            document.getElementById("d").value=Math.sin(teta*(Math.PI/180.0))    
        }
        catch(e)
        {
            show("Error")
        }            
    });

    $('#square').click(function(){
        Sqrt=document.getElementById("d").value;
        document.getElementById("Fn").value=" ("+Sqrt+")Square"
        try{
            
            document.getElementById("d").value=Sqrt*Sqrt;    
        }
        catch(e){
            show("Error")
        }
    });

    $('#rootof').click(function(){
        root=document.getElementById("d").value;
        document.getElementById("Fn").value="SqRootOf ("+root+")"
        try{
            
            document.getElementById("d").value=Math.sqrt(root);    
        }
        catch(e){
            show("Error")
        }
    });


    $('#backspace').click(function(){
        document.getElementById("Fn").value=""
        var value = document.getElementById("d").value;
        document.getElementById("d").value = value.substr(0, value.length - 1);
    });        

    $("#log").click(function(){
        logvalu=$("#d").val()
        $("#Fn").val("Log("+logvalu+")")
        $("#d").val(Math.log(logvalu)   )
    })
    $("#factorial").click(function(){
        fact=$("#d").val()
        $("#Fn").val(fact+"!")
        $("#d").val()
    })
});


    function GetFactorial(num)
    {
        if(document.getElementById('d').value==0){
            return document.getElementById('d').value=0
        }

        if(num<0)
            return "Undefined";
        var fact=1;
        for(var i=num;i>1;i--)
            fact*=i;
        document.getElementById('d').value=fact
    }


    function Number(val){
        document.getElementById("d").value+=val;
        if(val=="+"||val=="/"||val=="*"||val=="-")
            document.getElementById("Fn").value=""
    }

    function show(val){

        document.getElementById("d").value=val;

    }
    function clr(){

        document.getElementById("d").value="";
        document.getElementById("Fn").value=""
    }
