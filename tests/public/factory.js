describe('noteCtrl Tests', function(){
  var $scope, noteFactory, $httpBackend
  beforeEach(module('notedirectory'))
  beforeEach(inject(function($injector, _noteFactory_){
    $httpBackend = $injector.get('$httpBackend')
    noteFactory = _noteFactory_
  }))
  it('should be defined', function(){
    expect(noteFactory).toBeDefined()
  })
  it('should be defined', function(){
    expect(noteFactory.create).toBeDefined()
  })
  it('should be defined', function(){
    expect(noteFactory.getAll).toBeDefined()
  })
  it('should be defined', function(){
    expect(noteFactory.getByLabel).toBeDefined()
  })
  it('should be defined', function(){
    expect(noteFactory.update).toBeDefined()
  })
  it('should be defined', function(){
    expect(noteFactory.delete).toBeDefined()
  })
})