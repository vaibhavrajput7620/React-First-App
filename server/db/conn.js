// const mongoose = require('mongoose');


// mongoose.connect("mongodb://localhost:27017/firstdb",{
//   useNewUrlParser : true,
//   useUnifiedTopology : true
// }).then(()=>console.log('connected to database')).catch(err => console.log(err));


const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/reactdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(() => console.log('Connected to MongoDB Atlas')).catch(err => console.error(err));
