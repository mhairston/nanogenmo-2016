# nanogenmo-2016
Entry for National Novel Generation Month

## Philosophy:

* The general approach is to treat this as an art project, not a computer science project.
* It will be tempting to get too ambitious, so keep things simple.
  * Randomized, nonsensical cut-ups of words is too simple. 
  * Use constrained randomization, or make decisions by referencing a data source.
* It should have decent grammar.
* It should have plot development. Which means some level of persistence of state.
* Embrace the format: make it self-referential, include bits of the code in the text, name-drop generative artists, etc.

## Technical:

* To keep things sensible and have grammar, use a collection of templates.
  * Chapter templates, sub-chapter templates, character templates, etc.
  * Nest them.
* The templates, including all text, all alternatives, and behavior flags, are just HTML (Jade).
* Keep each chapter in a separate folder.
* Add a chapter a day, and rework previous chapters as needed.
* Commit the day's changes and add a tag for the day.
* Don't (pre|re)factor. Duplicate code like there's no tomorrow if you need to.


## TODO:

* Add a package.json and switch markup to Jade
* Switch to using github-pages branch.
* Get word substitution working (choose from an array of alternate words).
* Figure out how persistence works. May require a classname on the elements that need to persist.
* Write naming algorithms for the protagonist and the setting.
