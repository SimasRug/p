(function(){
  var app = angular.module('app', []);

  app.controller('CounterController',['$scope', '$interval', function($scope, $interval){
    $scope.defaultTimeMin = 25;
    $scope.defaultTimeSec = '00';
    $scope.display = 0+'%';
    $scope.percBar = 'p'+0;
    $scope.defaultBrakeTimeMin = 5;
    $scope.defaultBrakeTimeSec = '00'
    $scope.whatTime = '';
    var audio = new Audio('alarm.mp3');
    var myinterval;
    var clickOnStart = 0;


    var test = 0;
    var a;
    $scope.disable = true;
    function numberToPerc(original, displayForBar) {
      a = original *60;
      a = 100/a;
      test = test+ a
      console.log(Math.round(original));
      $scope.display = Math.round(test)+'%';
      $scope.percBar = 'p'+Math.round(test);
    }

    $scope.addTime = function (time) {
      $scope.defaultTimeMin = time + 5;
    };
    $scope.reduceTime = function (time) {
      if($scope.defaultTimeMin>0) {
        $scope.defaultTimeMin = time - 5;
      }
    };
    $scope.addBreakTime = function(time) {
      $scope.defaultBrakeTimeMin = time + 5;
    }
    $scope.reduceBrakeTime = function(time) {
      if($scope.defaultBrakeTimeMin>0){
        $scope.defaultBrakeTimeMin = time - 5;
      }
    }

    $scope.startCountdown = function(defaultTimeMin) {
      if(clickOnStart == 0) {
      if($scope.defaultTimeMin !== 0 && $scope.defaultBrakeTimeMin !==0){
        $scope.whatTime = 'WORK TIME!';
        $scope.defaultTimeSec = 59;
        $scope.defaultTimeMin = defaultTimeMin -1;
        $scope.display = 0+'%';
        $scope.percBar = 'p'+0;
        test = 0;
        $scope.disable = false;
        clickOnStart = 1;
      myinterval = $interval(function(){
        var displayForBar = defaultTimeMin+'.' + $scope.defaultTimeSec;
        displayForBar = Number(displayForBar);

        if($scope.defaultTimeMin == 0 && $scope.defaultTimeSec == 0) {

          $interval.cancel(myinterval);
          audio.play();
          $scope.startBreakCountdown($scope.defaultBrakeTimeMin);
        } else{
           numberToPerc(defaultTimeMin, Math.round(displayForBar));
          if ($scope.defaultTimeSec == 0) {
            $scope.defaultTimeMin = $scope.defaultTimeMin -1;
            $scope.defaultTimeSec = 59;
          } else {
            $scope.defaultTimeSec = $scope.defaultTimeSec -1;
          }
        }
      }, 1000);
    }
  }
    }

    $scope.startBreakCountdown = function(defaultTimeMin) {
      $scope.whatTime = 'BREAK TIME!';
      $scope.defaultBrakeTimeSec = 59;
      $scope.defaultBrakeTimeMin = defaultTimeMin -1;
      $scope.display = 0+'%';
      $scope.percBar = 'p'+0;
      test = 0;
       myinterval = $interval(function(){
        var displayForBar = defaultTimeMin+'.' + $scope.defaultBrakeTimeSec;
        displayForBar = Number(displayForBar);
        if($scope.defaultBrakeTimeMin == 0 && $scope.defaultBrakeTimeSec == 0) {
          $interval.cancel(myinterval);
          $scope.defaultTimeMin = 25;
          $scope.defaultTimeSec = '00';
          $scope.defaultBrakeTimeMin = 5;
          $scope.defaultBrakeTimeSec = '00';
          $scope.disable = true;
          clickOnStart = 0;
        } else {
          numberToPerc(defaultTimeMin, Math.round(displayForBar));
          if ($scope.defaultBrakeTimeSec == 0) {
            $scope.defaultBrakeTimeMin = $scope.defaultBrakeTimeMin -1;
            $scope.defaultBrakeTimeSec = 59;
          } else {
              $scope.defaultBrakeTimeSec = $scope.defaultBrakeTimeSec -1;
          }
        }
      },1000);
    }
    $scope.reset = function() {
      $interval.cancel(myinterval);
      $scope.defaultTimeMin = 25;
      $scope.defaultTimeSec = '00';
      $scope.defaultBrakeTimeMin = 5;
      $scope.defaultBrakeTimeSec = '00';
      $scope.disable = true;
      clickOnStart = 0;
    }

  }]);
})()
