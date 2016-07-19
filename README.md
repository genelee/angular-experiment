# angular-experiment
Angular directive and service that wrap npm module, tiny-experiment.js

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

3) Use in javascript
see: https://github.com/genelee/tiny-experiment

4) Use in directive without writing any javascript
```
<div tiny-experiment="buttonStyle" variant="blue" class="blue-button"></div>
<div tiny-experiment="buttonStyle" variant="red" class="red-button"></div>
```
