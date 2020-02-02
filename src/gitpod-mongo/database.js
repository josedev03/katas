const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admindev:jose1234@mongojose-qohde.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(()=> console.log('Database connected'))
  .catch((e)=>console.log(`[ERROR]: ${JSON.stringify(e)}`))