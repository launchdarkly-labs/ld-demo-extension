# LaunchDarkly Demo Chrome Extension

## Purpose
This extension enables Solutions Engineers at LaunchDarkly to customize their demo's. It currently has 2 main modes of operation:
1. Overlay Graphic tied to feature flag - If a custom block is not assigned, the extension will force a purple box overlay on top of whatever web page is loaded. The overlay can be triggered to the configured feature flag
2. Custom Block Hide - When a custom block is configured, any object with the conifgurd ID or CLASS can be hidden with the configured feature flag

## Installation
Ensure developer mode is enabled in the Chrome extensions management:

chrome://extensions/

Clone the repository. Then from the Chrome Extensions management page, click "Load unpacked" and select the root folder of the repository "ld-demo-extension". The extension should now be available in the Chrome extension menu

## Usage
Using the extension can show the value of feature flags directly on any website by hiding and showing the overlay content or any custom content from the webpage. 

Additionally, the extension can be used to synthetically create experimentation data for any feature flag on any webpage. The only requirement is to keep the browser up and running for however long you want to collect data for. The extension does this by injecting the variation code for the feature flag, creating a random user key for each page load, and has a conifgurable refresh interval so that the page can be reloaded to generate additional load. 

## Configurations
Below are all configuration attributes for the extension.


### Main Demo Options
Configuration Option | Description
------------ | -------------
Extension Enabled| This enables the extension to inject javascript flag
Default Show Block | This means that the block will by default show regardless of the value of the feature flag
User Key | The user key you want associated with your browser's evaluations
Flag Key | The flag key from LaunchDarkly
Client-Side ID | The client SDK key (make sure the flag is configured to be used with client SDK's)
Custon Block ID | From the HTML of the object you want to hide, provide the ID tag of the object
Use Class Instead of ID | If the object has an identifiable class name instead of ID, check this box. If the object has more than 1 class, just provide a single class

### Experimentation Options
Configuration Option | Description
------------ | -------------
Experimentation Enabled| This enables the experimentation portion of the extension. Enabling this will overwrite any User Key provided and automatically create a random user key for each page load
Winning Variation | The name of the variation for the winning conversion. For boolean flags, simply provide "true" or "false" (without the quotes). JSON flag variations are not supported
Winning Conversion | The desired conversion rate for the winning variation
Losing Conversion | The desired losing conversion rate for all other variations
Refresh Interval | Setting this to a non-zero value will automatially reload the page to run synthetic load for the experiment. 

### Miscellaneous  Options
Configuration Option | Description
------------ | -------------
Hide Debugger | Checking this box will hide the "Debugger" menu item from the LaunchDarkly UI. This configuration will work regardless of the "Extension Enabled" option from the main demo options. 