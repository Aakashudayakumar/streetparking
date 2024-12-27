const mongoose = require('mongoose')

const url = `mongodb+srv://email1calvin:calvin2003@clustertest01.2vxxtje.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)
