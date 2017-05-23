app.controller('noteCtrl', function ($scope, noteFactory) {
  $scope.createNote = function(note){
    noteFactory.create().then(function(response){
      $scope.newnote = response.data;
      }, function(err){
      console.error(err);
    })
  }

  $scope.getNotes = function(note){
    noteFactory.getAll().then(function(response){
      $scope.notes = response.data;
      }, function(err){
      console.error(err);
    })
  }
  $scope.getNotesByLabel = function(note){
    noteFactory.getByLabel().then(function(response){
      $scope.notes = response.data;
      }, function(err){
      console.error(err);
    })
  }
  $scope.update = function(note){
    noteFactory.update().then(function(response){
      $scope.updateNote = response.data;
      }, function(err){
      console.error(err);
    })
  }
  $scope.delete = function(note){
    noteFactory.delete().then(function(response){
      $scope.newnote = response.data;
      }, function(err){
      console.error(err);
    })
  }
})