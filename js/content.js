console.log("Start of injected LD script");
$(document).ready(function() { 
    // Get variables from storage
    chrome.storage.local.get(null,function(storage) {
        console.debug("script successfully injected, enabled = " + storage.enabled);
        if (storage.enabled == true) {
            var user = {
                "key": storage.userKey
            };
            var ldclient = LDClient.initialize(storage.clientId, user);
            ldclient.on('change', function() {
                console.log("LD Ready");
                var showFeature = ldclient.variation("show-block", false);
                var block = document.getElementById("ld-block");
                if (showFeature) {
                    console.debug("LD Show feature");
                    block.style.display = "block";
                } else {
                    console.debug("LD Hide feature");
                    block.style.display = "none";
                }
            });
        }
        else {
            console.log("LD User Disabled");
            defBlock.style.display = "none";
        }
    });        
});

chrome.storage.local.get(null,function(e) {
    if (e.enabled == true) {
        console.log("LD User Enabled = True");
        var body = document.getElementsByTagName('body')[0];
        body.insertAdjacentHTML('afterbegin', `
        <div id="ld-block" style="cursor: pointer; display: block;float: right; z-index: 3;position: absolute; right:25%; top:25%;">
        <center>
        <table border="2" cellspacing="0" cellpadding="0" bgcolor="#b19cd9" width="800" style="text-align:center; height: 200px; background-color:#b19cd9;">
        <tr><td style="background-color:#b19cd9;">
        <h1>Make this hide with a Feature Flag!</h1>
        </td></tr></table>
        </center>
        </div>
        `);
    }
    var defBlock = document.getElementById("ld-block");
    if (e.default == true) {
        console.log("LD Show Block by default");
        defBlock.style.display = "block";
    }
    else {
        console.log("LD Hide Block by default");
        defBlock.style.display = "none";
    }
});