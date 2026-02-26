function openTab(evt, cityName) {
  if(cityName=="verification")
  {
     
     document.getElementById("a0").className ="portal-c-menu__link portal-js-tab-links is-active";
     document.getElementById("a1").className ="portal-c-menu__link portal-js-tab-links";
     document.getElementById("a2").className ="portal-c-menu__link portal-js-tab-links";
     document.getElementById("verificationid").style.display="block";
     document.getElementById("signingkeysid").style.display="none";
     document.getElementById("alumniid").style.display="none";
     document.getElementById("portalid").style.display="block";
     
     
  }
  else if(cityName=="signingkeys")
  {
    //document.getElementById("maindiv").classList.add("centered"); 
    document.getElementById("a0").className ="portal-c-menu__link portal-js-tab-links";     
    document.getElementById("a1").className ="portal-c-menu__link portal-js-tab-links is-active";
    document.getElementById("a2").className ="portal-c-menu__link portal-js-tab-links";
    document.getElementById("verificationid").style.display="none";
    document.getElementById("signingkeysid").style.display="block";
    document.getElementById("alumniid").style.display="none";
    //document.getElementById("portalid").style.display="block";
  }
  else
  {
    //document.getElementById("maindiv").classList.remove("centered");
    document.getElementById("a0").className ="portal-c-menu__link portal-js-tab-links";     
    document.getElementById("a1").className ="portal-c-menu__link portal-js-tab-links";
    document.getElementById("a2").className ="portal-c-menu__link portal-js-tab-links is-active";
    document.getElementById("verificationid").style.display="none";
    document.getElementById("signingkeysid").style.display="none";
    document.getElementById("alumniid").style.display="block";
    document.getElementById("portalid").style.display="none";
  }
  
  
}
$(document).ready(function(){
  
  if(document.location.toString().indexOf("#verification")!==-1)
    {
      openTab(null, "verification");
    }
    else if(document.location.toString().indexOf("#signingkeys")!==-1)
    {
      openTab(null, "signingkeys");
    }
    else if(document.location.toString().indexOf("#alumni")!==-1)
    {
      openTab(null, "alumni");
    }
  /*var intervalId = setInterval(
        function()
        {
          
          {
            clearInterval(intervalId);
            //alert(document.getElementById("certificate-json-url"));
            
          }
        },
        6000);
     */   
  var myconf=JSON.parse(config);  
 console.log("=============");
 if(myconf.connectionType=="client")
  {
     
     document.getElementById("contactid").innerHTML="";
     
     var totalpublickeys=0; 
     var tr="";    
     for(var index=0;index<myconf.signingKeys.length;index++)          
     {        
        var organizationname=myconf.signingKeys[index].organizationName;
        var publickey=myconf.signingKeys[index].publicKey;
        var blockchainname=myconf.signingKeys[index].blockchain;
        var created_at=myconf.signingKeys[index].date;           
        if(blockchainname==""||blockchainname===null) continue;        
        totalpublickeys=totalpublickeys+1;
        tr+="<tr><td style='padding: 14px 16px;background-color: #fff;border: solid 1px #ccc;border-top-color: rgb(204, 204, 204);border-top-style: solid;border-top-width: 1px;border-top: 0;'><p class='pkr-o-medium-text'>"+organizationname+"</p><p class='pkr-o-medium-text'>"+publickey+"</p><p class='pkr-o-small-text'>Used since "+created_at+" on "+blockchainname+"</p></td></tr>";
     }
     if(tr=="")
      {
        tr="<tr><td style='padding: 14px 16px;background-color: #fff;border: solid 1px #ccc;border-top-color: rgb(204, 204, 204);border-top-style: solid;border-top-width: 1px;border-top: 0;'><p class='pkr-o-medium-text'></p><p class='pkr-o-medium-text'></p><p class='pkr-o-small-text'></p></td></tr>";
      }
      document.getElementById("totalkeyid").innerHTML=totalpublickeys+" Public keys"; 
      document.getElementById("signingkeyid").innerHTML=tr;  

  }
  else
  {
    $("body").append('<div id="overlay" style="background-color:white;position:absolute;top:0;left:0;height:100%;width:100%;z-index:999"><center><p>Please set config file correctly.</p></div>');  
  }
  
});


