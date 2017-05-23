describe('noteCtrl Tests', function(){
  var $scope, noteFactory, controller
  beforeEach(module('notedirectory'))
  beforeEach(inject(function($controller, $rootScope, _noteFactory_){
    $scope = $rootScope.$new()
    noteFactory = _noteFactory_
    controller = $controller('noteCtrl',{$scope: $scope, noteFactory: noteFactory})
  }))

  it('should be defined', function(){
    expect(controller).toBeDefined()
  })
  it('should be defined', function(){
    expect($scope.createNote).toBeDefined()
  })
  it('should be defined', function(){
    expect($scope.getNotes).toBeDefined()
  })
  it('should be defined', function(){
    expect($scope.getNotesByLabel).toBeDefined()
  })
  it('should be defined', function(){
    expect($scope.update).toBeDefined()
  })
  it('should be defined', function(){
    expect($scope.delete).toBeDefined()
  })

})



