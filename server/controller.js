require('./model')
var mongoose = require('mongoose')
Notes = mongoose.model('Notes')
module.exports = {
  create: function(req, res){
    note = req.body
    Notes.create(note, function(err, createdNote){
      if(err){
        return res.send('error saving notes:' + err)
      }
      else{
        return res.json(createdNote)
      }
    })
  },
  getAll: function(req, res){
    Notes.find().sort('-updatedDate').exec(function(err, notes){
      if(err){
        return res.send('error getting notes:' + err)
      }else{
        return res.json(notes)
      }
    })
  },
  getByLabel: function(req, res){
    console.log('getByLabel!!!!',req.query, req.params)
    label = req.query
    Notes.find().where('label').equals(req.query).exec(function(err, notes){
      if(err){
        return res.send('error retriveing notes by label' + err)
      }else{
        return res.json(notes)
      }
    })
  },
  update: function(req, res){
      Notes.findById(req.params.id, function(err, note){
         if (err) {
            return res.send(err);
          }
          note.title = req.body.title
          note.description = req.body.description
          note.label = req.body.label
          note.updatedDate = Date.now()
          note.save(function(err, note){
            if (err) {
              return res.send(err);
            }
            return res.json(note)
          })
      })
  },
  delete: function(req, res){
    Notes.remove(req.params.id).exec(function(err, notes){
      if(err){
        return res.send('error getting notes:' + err)
      }else{
        return res.send('deleted successfully')
      }
    })
  },

}