cd to handlebones

and run below command in your mac
python -m SimpleHTTPServer

open http://localhost:8000


In order to update the templates, run:

    handlebars templates >> templates.js



Any file in the templates directory will be available in the `Handlebars.templates` hash.

    Handlebars.templates['index']

















