import experimentManager from 'tiny-experiment';

module.exports = angular.module('angular.experiment', [])

.service('$experiment', ['$rootScope', function($rootScope) {
  
  $rootScope._experimentManager = experimentManager;
  let manager = $rootScope._experimentManager;

  return manager;
}])

.directive('tinyExperiment', ['$experiment', '$parse', ($experiment, $parse) => {
  return {
    scope: {
      defaultVariant: '='
    },
    restrict: 'A',
    link: (scope, elem, attr) => {
      scope.key = attr.key || attr.tinyExperiment;
      scope.variant = attr.variant;

      let experiment = $experiment.getExperiment(scope.key);
      if (!experiment.tracked) experiment.run();
      if (experiment && experiment.variantName != scope.variant) {
        elem.hide();
        elem.remove();
      } else if (!experiment) {
        if (!attr.defaultVariant) {
          elem.hide();
          elem.remove();
        }
      }
    }
  }
}])