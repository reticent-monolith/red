import { red } from "./module/config.js";
import redItemSheet from "./module/sheets/redItemSheet.js";
import redActorSheet from "./module/sheets/redActorSheet.js";

async function preloadHandlebarsTemplates() {
  const paths = [
    "systems/red/templates/partials/skill.hbs"
  ];
  return loadTemplates(paths);
};

Hooks.once("init", function() {
  console.log("red | Initialising Cyberpunk_RED System");

  CONFIG.red = red;

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("red", redItemSheet, { makeDefault: true });
  
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("red", redActorSheet, { makeDefault: true });

  Handlebars.registerHelper("add", function(a, b) {
    return a + b;
  });
  
  Handlebars.registerHelper("insert", function(string, thing) {
    return ``
  });
  
  Handlebars.registerHelper("getProp", function(thing, props) {
    const property = getProperty(thing, props)
    return property
  });
  
  Handlebars.registerHelper("loud", function(string) {
    return string.toUpperCase()
  });

  preloadHandlebarsTemplates();
});
