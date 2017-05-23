var mongoose = require('mongoose'),
Schema = mongoose.Schema
NotesSchema = new Schema({
  title:{
    type: 'string',
    default: ''
  },
  content: {
    type: 'string',
    default: ''
  },
  label:{
    type: 'string',
    default: ''
  },
  updatedDate: {
    type: Date,
    default: Date.now()
  }
})
Notes = mongoose.model('Notes', NotesSchema)
