angular.module('CookieApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('CookieAppCtrl', function($scope, $mdDialog) {
    this.myDate = new Date();
  
  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };

  function DialogController($scope, $mdDialog) {
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
});