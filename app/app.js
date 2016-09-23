


var app = angular.module('dw4', [
  'ng-backstretch',
  'ngSwipebox',
  'tooltipster',
  'duScroll',
  'slickCarousel'
]);

app.config(function(){

});


app.run(function(){

});


app.controller('MainCtrl', function($scope){


});

app.controller('FormCtrl', function($scope, $http){
  $scope.sent = false;
  $scope.submitForm = function(e){
    console.log(e.target);
    var datos = $(e.target).serialize();
    $scope.form = {};
    $http({
      method: 'GET',
      url: 'http://www.dragonbarbudo.com/api/email.php?'+datos
    }).then(function(result){
      console.log('http://www.dragonbarbudo.com/api/email.php?'+datos);
      if(result.data=="1"){
        console.log('done');
        $scope.sent = true;
      }
    });

  }
});





/* OTHER CODES */
/* http://embed.plnkr.co/UAELQkmh18RVDn1cOAaW/ */
angular.module("tooltipster",[]).directive('tooltip', function () {
    return {
      restrict: 'C',
      link: function (scope, element, attrs) {
        $(element).tooltipster({
          animation: attrs.animation
        });
      }
    };
  });

/* NG-SWipebox Structure */
angular.module("ngSwipebox").run(["$templateCache", function($templateCache) {$templateCache.put("swipebox.html","<div ng-repeat=\'photo in photos\'>\n        <a ng-href=\'{{ photo.href }}\' class=\'swipebox\' title=\'{{ photo.title }}\'>\n            <img ng-src=\'{{ photo.src }}\' alt=\'image\'>\n        </a>\n    </div>\n");}]);
