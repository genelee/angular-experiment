# angular-experiment
Angular directive and a service that wrap npm package, tiny-experiment.js

# Quick start

1) Install module
```
npm install angular-experiment
```

2) Require
```
require('angular-experiment')

angular.module('mainApplication', ['tiny.experiment'])
```

2) Register experiment
see: https://github.com/genelee/tiny-experiment

3) Use in javascript with $experiment service
```
angular.module('mainApplication').controller('mainController', ['$experiment', function($experiment) {

  $experiment.getExperiment('buttonStyle')
  .on('blue', function() {
    $('#my-button').css('backgroundColor', 'blue')
  })
  .on('red', function() {
    $('#my-button').css('backgroundColor', 'red')
  })
  .run()
  
}])
```

4) Use in directive without writing any javascript
```
<div tiny-experiment="buttonStyle" variant="blue" class="blue-button" default-variant="true"></div> // setting default-variant as true ensures that even if the experiment is missing, this DOM element will be rendered
<div tiny-experiment="buttonStyle" variant="red" class="red-button"></div>
```
