import { red } from "./module/config.js";
import redItemSheet from "./module/sheets/redItemSheet.js";
import redEdgerunnerSheet from "./module/sheets/redEdgerunnerSheet.js";

Hooks.once("init", function() {
  console.log("red | Initialising Cyberpunk_RED System");

  CONFIG.red = red;

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("red", redItemSheet, { makeDefault: true });
  
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("red", redEdgerunnerSheet, { makeDefault: true });

  Handlebars.registerHelper("add", function(a, b) {
    return a + b;
  });
  
  Handlebars.registerHelper("join", function(pre, cunt, post) {
    const newString = [pre, cunt, post].join('')
    return newString
  });
  
  Handlebars.registerHelper("getProp", function(thing, props) {
    const property = getProperty(thing, props)
    return property
  });
  
  Handlebars.registerHelper("loud", function(string) {
    return string.toUpperCase()
  });

});
