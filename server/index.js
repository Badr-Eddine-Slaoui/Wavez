const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const { default: mongoose } = require('mongoose');
const server = express();
const authRoute = require('./Routes/authRoute')
const commandRoute = require('./Routes/commandRoute')

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

server.use('/auth',authRoute);
server.use('/command',commandRoute);

mongoose.connect('mongodb+srv://yahyacoundi:aMWZJvJI5XwdH23L@cluster0.5lavgkp.mongodb.net/wavez?retryWrites=true&w=majority')
.then(()=>{
    console.log('Db Is Working');
})
server.listen(4000,()=>{
    console.log('Server Is Working');
})