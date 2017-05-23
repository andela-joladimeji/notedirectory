app.factory('noteFactory', function ($http) {
  return {
    create: function(note){
      return $http.post('/api/notes', note)
    },
    getAll: function(){
      return $http.get('/api/notes')
    },
    getByLabel: function(query){
      console.log(query)
      return $http.get('/api/notesBylabel?label=' + query)
    },
    update: function(id, note){
      return $http.put('/api/notes' + id, note)
    },
    delete: function(){
      return $http.delete('/api/notes' + id)
    },
  }
})

