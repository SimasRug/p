(function() {
  var app = angular.module('app',[]);

  var player = '';
  var computer = '';
  var moveCounter = 0;
  var whosTurn = '';

  app.controller('PrimaryController',['$scope', function($scope) {
    $scope.chooseModal = true;
    $scope.winnModal = false;


    $scope.items = [{position:'pos1', value:''}, {position:'pos2', value:''},{position:'pos3', value:''},
                    {position:'pos4', value:''}, {position:'pos5', value:''},{position:'pos6', value:''},
                    {position:'pos7', value:''}, {position:'pos8', value:''},{position:'pos9', value:''},];
    $scope.winn = [{position:['0', '1', '2']},
                   {position:['3', '4', '5']},
                   {position:['6', '7', '8']},
                   {position:['0', '3', '6']},
                   {position:['1', '4', '7']},
                   {position:['2', '5', '8']},
                   {position:['0', '4', '8']},
                   {position:['2', '4', '6']}
  ];

  $scope.reset = function() {
    $scope.items.forEach(function(e){
      e.value = '';
    });
    $scope.winnModal = false;
    $scope.chooseModal = true;
    moveCounter = 0;
  };
    $scope.selectPlayer = function(playerChoise){
      $scope.chooseModal = false;
      if(playerChoise == 'X') {
        player = 'X';
        computer = 'O';
      } else {
        player = 'O';
        computer = 'X';
      }
      if (player === 'X') {
        $scope.playersTurn();
        whosTurn='player';
      } else {
        whosTurn='computer'
        $scope.computersTurn();
      }
    }

    $scope.playersTurn = function(pos) {
      if (whosTurn=='player') {
        $scope.items.forEach(function(e){
          if(e.position == pos && e.value == '') {
            e.value = player;
            moveCounter++;
            winingCondition();
          }
        })
      }
    }
    $scope.computersTurn = function() {
      if(whosTurn=='computer') {
        console.log('Computer turn');
        checkCenter();
      }
    }

    function checkOponentDouble(){
      var win = $scope.winn;
      var items = $scope.items;
      var counter = 0;
      var container;
      var bam = false;
      var tick = 0;
      win.some(function(e) {
      for(var i=0; i<=2; i++) {
        // console.log(e.position[i]);
        var a = e.position[i]
        if (items[a].value == player) {
          counter++;
        }
      }
      if (counter == 2) {
        container = e.position;
        e.position.some(function(a){
          if(items[`${a}`].value == '') {
            items[`${a}`].value =computer;
            winingCondition();
            bam = true;
            moveCounter++;
            return true;
          }
        });
      };
      counter = 0;
      if (bam) {
          return true;
      }
      tick++;
      if(tick == 8) {
        checkCorners();
      }

    });
    }
    function checkSides() {
      console.log('Sides');
      var sideArr = [1,3,5,7]
      var items = $scope.items;
      var tick = 0;
      sideArr.some(function(e){
        if (items[`${e}`].value == '') {
          items[`${e}`].value = computer;
          moveCounter++;
          winingCondition();
          return true;
        }
        tick++;
      });
    }
    function checkCorners(){
      var cornerArr = [0,2,6,8];
      var items = $scope.items;
      var tick=0;
      cornerArr.some(function(e) {
        if (items[`${e}`].value == '') {
          items[`${e}`].value = computer;
          winingCondition();
          moveCounter++;
          return true;
        }
        tick++;
      });
      if(tick == 4) {
        checkSides();
      }
    }
    function checkCenter() {
      if ($scope.items[4].value == '') {
        $scope.items[4].value = computer;
        moveCounter++;
        winingCondition();
      } else {
        checkOponentDouble()
      }
    }

    function winingCondition() {
      var counter = 0;
      $scope.winn.forEach(function(e){
        if($scope.items[`${e.position[0]}`].value == 'X' && $scope.items[`${e.position[1]}`].value == 'X' && $scope.items[`${e.position[2]}`].value == 'X' ){
          $scope.winner = 'X Player wins';
           $scope.winnModal = true;
        }else if($scope.items[`${e.position[0]}`].value == 'O' && $scope.items[`${e.position[1]}`].value == 'O' && $scope.items[`${e.position[2]}`].value == 'O' ) {
          $scope.winner = 'O Player wins'
           $scope.winnModal = true;
        }
      });
      console.log('Move Counter:'+moveCounter);
      if(moveCounter<=8)
      {
        console.log('trigger');
      if(whosTurn == 'player') {
        whosTurn = 'computer';
        $scope.computersTurn();
      } else if(whosTurn == 'computer') {
        whosTurn = 'player';
      }
    } else {
      $scope.winner = 'Nobody wins';
      $scope.winnModal = true;
    }
  }
  }]);
  app.filter('slice', function() {
    return function(arr, start, end) {
      return arr.slice(start, end);
    };
  });
})()
