(function(){
  var app = angular.module('app',[]);
  var vars = {
    seven:'7',
    eight:'8',
    nine:'9',
    four:'4',
    five:'5',
    six:'6',
    one:'1',
    two:'2',
    three:'3',
    zero:'0',
    comma:'.',
    plusMinus:'+/-'
  }
  var signs = {
    plus:'+',
    minus:'-',
    times:'*',
    divide:'/',
    equals: '=',
    clear: 'C',
    percent:'√'
  };
  app.filter('myLimitTo', [function(){
    return function(obj, limit){
        var keys = Object.keys(obj);
        if(keys.length < 1){
            return [];
        }

        var ret = new Object,
        count = 0;
        angular.forEach(keys, function(key, arrayIndex){
            if(count >= limit){
                return false;
            }
            ret[key] = obj[key];
            count++;
        });
        return ret;
    };
}]);
  app.controller('primaryController',[ "$scope", function($scope) {
    $scope.vars = vars;
    $scope.signs = signs;
    $scope.output = 0;
    var var1 ='';
    var var2 = '';
    var operator = '';
    var var2Keeper = '';

    $scope.numberInput = function(number) {
      console.log(number);
      if(!operator) {
        if(var1 == '' && number == '.'){
          number = '0.'
        }
        if(number == "+/-") {
          var1 = '-'+var1
        } else {
          var1 += number;
        }
        showOutput()
      } else {
        if(var2 == '' && number == '.'){
          number = '0.'
        }
        if(number == "+/-") {
          var2 = '-'+var2
        } else {
          var2 += number;
        }
        showOutput();
      }
    }
    $scope.getOperator = function(opr) {
      if(opr  == '√') {
        $scope.output = var1 = Math.sqrt(var1);
      } else {
        operator = opr;
        showOutput();
      }
    }
    var showOutput = function() {
      $scope.output = var1 + operator + var2;
    }

     $scope.countResult = function() {
      if(var1 !=='' && operator !=='' && var2 !=='') {
        var1 = parseFloat(var1);
        var2 = parseFloat(var2);
        var2Keeper = var2;
        $scope.output = doCalc(var1, operator, var2);
        var1 = $scope.output;
        var2 = '';
      } else if(var1 !=='' && operator !=='' && var2 =='') {
        if(var2Keeper == ''){
        var1 = parseFloat(var1);
        var2 = var1;
        $scope.output = doCalc(var1, operator, var2);
        var1 = $scope.output;
        var2 = '';
      } else {
        var1 = parseFloat(var1);
        var2 = var2Keeper;
        $scope.output = doCalc(var1, operator, var2);
        var2Keeper = var2;
        var1 = $scope.output;
        var2 = '';
      }
      }
    }
    $scope.clearValues = function() {
      var1 = '';
      var2 = '';
      operator = '';
      $scope.output = 0;

    }
    var doCalc = function(var1, operator, var2) {
      switch (operator) {
        case '+':
          return var1 + var2;
          break;
        case '-':
          return var1 - var2;
          break;
        case '*':
          return var1 * var2;
          break;
        case '/':
          return var1 / var2;
            break;
      }
    }

  }]);
})()
