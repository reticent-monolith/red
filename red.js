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

  Handlebars.registerHelper("isHeader", function(thing) {
    const array = [
      "awareness", "body", "control", "edu", "edu2", "fighting", "performance", "ranged", "social", "social2", "technique"
    ];
    const result = array.some(e => e == thing);
    return result;
  });

  Handlebars.registerHelper("isEssential", function(skill) {
    console.log(skill)
    const array = [
      "firstAid", "perception", "brawling", "evasion", "conversation", "humanPerception", "persuasion", "education", "stealth", "athletics", "concentration"
    ];
    const result = array.some(e => e == skill);
    return result;
  });

});
