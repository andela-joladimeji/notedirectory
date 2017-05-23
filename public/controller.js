app.controller('noteCtrl', function ($scope, noteFactory) {
  $scope.createNote = function(note){
    noteFactory.create(note).then(function(response){
      $scope.createsuccessmessage = response.data;
      }, function(err){
      $scope.error(err);
    })
  }

  $scope.getNotes = function(){
    noteFactory.getAll().then(function(response){
      $scope.notes = response.data;
      }, function(err){
      $scope.error(err);
    })
  }
  $scope.getNotesByLabel = function(query){
    noteFactory.getByLabel(query).then(function(response){
      $scope.notesByLabel = response.data;
      }, function(err){
      $scope.error(err);
    })
  }
  $scope.update = function(note){
    noteFactory.update(note._id, note).then(function(response){
      $scope.updateNote = response.data;
      }, function(err){
      $scope.error(err);
    })
  }
  $scope.delete = function(note){
    noteFactory.delete(note._id).then(function(response){
      $scope.deleteMessage = response.data;
      }, function(err){
      $scope.error(err);
    })
  }
})