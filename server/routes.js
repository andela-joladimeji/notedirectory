var noteCtrl = require('./controller')
module.exports = function (app) {
  app.route('/api/notes').post(noteCtrl.create)
  app.route('/api/notes').get(noteCtrl.getAll)
  app.route('/api/notesBylabel').get(noteCtrl.getByLabel)
  app.route('/api/notes/:id').put(noteCtrl.update)
  app.route('/api/notes/:id').delete(noteCtrl.delete)

}

