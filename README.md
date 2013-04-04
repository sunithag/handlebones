cd to handlebones

and run below command in your mac
python -m SimpleHTTPServer

open http://localhost:8000


In order to update the templates, run:

    handlebars templates >> templates.js



Any file in the templates directory will be available in the `Handlebars.templates` hash.

    Handlebars.templates['index']

Project HIGHLIGHTS for the demo:

1) 2 routes (TVFinderView.js, CartConfirmView.js) and 2 panels( Product(ProductDetailsView.js), cart(CartDetailsView.js))

2) Created view where ever module needs dynamic data. Same view pattern for all the views.
   Created an Application view with some common functions like render..
   All the views follow same pattern and extending from the Application.View. Didn't add any wrapping other than this
   All the views are associated with an element -  events for this element and its children are defined within that view

3) TVFinder App has these views :
     1) TVFinderView.js  -  el: .page

     After fetching the data below views are called and this data(collection) is passed to all these views
     2) FilterView.js   - el: .filters .pull-right'
     3) POVView.js   -  el: .hero
     4) SliderView.js  -  el: .filters .pull-left
     5) SummaryView.js - el: .summary
     ---
     Common:
        6) BreadCrumbView.js  - el: .bc
        7) HeaderCartView.js  - el: #hCart


 4) Added 2 collections to store cart and saved data and these are passed to the main page views((TVFinderView.js, CartConfirmView.js).
    using Local Storage Adapter written by Jerome Gravel-Niquet- https://github.com/jeromegn/Backbone.localStorage
     for these collection.

     These collections get passed to sub views and initialize will render the views whenever these collection changes.

     These 2 collections are using ProductModel -- didn't create new model for these collections.
     Added Qty(ProductDetailsView) and subtotal(cartDetailsView) for the template usage purpose


 5) Now app loads all these  individual files- not aggregating as that is not the goal of this project. Framework anyways will take care of this.


6) for loop (CartDetailsView.js) http://jsperf.com/each-on-array-jquery-vs-underscore-vs-js
 6) Carousel.js





 Isssues faced:

 Backbone keeps all the views opened in the memory and event binding of all the previously viewed were not removed. It was
 firing events for the previously opened views also so whenever I click "Add to Cart" button from the product panel, it is adding
  all the previously opened and added items also to the cart , even though I removed those items from the cart.

         // http://stackoverflow.com/questions/7567404/backbone-js-repopulate-or-recreate-the-view





  Things to do - implement these after the demo:

  1) Mask  - requirements were not clear so didn't implement them per requirement perhaps.
  2) Loading animation
  3) Cart Confirm view is not as per the mockup but pretty close , need some cleanup
  4) Now the data is fetched from my local server but planned to add the data in heroku
  5) price formatting
  6) review filters


Questions to the Architects:

1) what













