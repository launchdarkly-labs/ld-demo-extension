console.log("Start of injected LD script");
$(document).ready(function() { 
    // Get variables from storage
    chrome.storage.local.get(null,function(storage) {
        console.debug("script successfully injected, enabled = " + storage.enabled);
        if (storage.enabled == true) {
            if (typeof storage.customId == 'undefined' || storage.customId == '' || storage.customId == null)
                var blockId = "ld-block";
            else    
                var blockId = storage.customId;
            console.debug("LD BlockID = " + blockId);
            var user = {
                "key": storage.userKey
            };
            var ldclient = LDClient.initialize(storage.clientId, user);
            ldclient.on('change', function() {
                var showFeature = ldclient.variation("show-block", false);
                var block = document.getElementById(blockId);
                if (showFeature) {
                    console.debug("LD Show feature. blockId = " + blockId);
                    if (storage.classEnabled == true){
                        $("."+blockId).show();
                    }
                    else {
                        block.style.display = "block";
                    }
                } else {
                    console.debug("LD Hide feature. blockId = " + blockId);
                    if (storage.classEnabled == true) {
                        $("."+blockId).hide();
                    }
                    else {
                        block.style.display = "none";
                    }
                }
            });
        }
        else {
            console.log("LD User Disabled");
            defBlock.style.display = "none";
        }
    });        
});
// Run this code when the page loads
chrome.storage.local.get(null,function(e) {
    var blockId = "ld-block";
    if (e.customId == 'undefined' || e.customId == '' || e.customId == null) {
        blockId = "ld-block";
    }
    else {   
        blockId = e.customId;
    }  
    if (e.enabled == true) {
        console.debug("LD User Enabled = True.");
        if (blockId == "ld-block") {
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
        var defBlock = document.getElementById(blockId);
        if (e.default == true) {
            console.debug("LD Show Block by default. blockId = " + blockId);
            if (e.classEnabled == true){
                $("."+blockId).show();
            }
            else {
                defBlock.style.display = "block";
            }
        }
        else {
            console.debug("LD Hide Block by default. blockId = " + blockId);
            if (e.classEnabled == true) {
                $("."+blockId).hide();
            }
            else {
                defBlock.style.display = "none";
            }
        }
    }
});