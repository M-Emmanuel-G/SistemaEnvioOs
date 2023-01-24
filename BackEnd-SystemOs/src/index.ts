import { userRouter } from './Routes/UserRouter';
import { osRouter } from './Routes/OsRouter';
import express from 'express'
import cors from 'cors'
import { Validate } from './common/validateCpf';

const app = express()
app.use(express.json())
app.use(cors())
app.use('/os', osRouter)
app.use('/user', userRouter)

const validate = new Validate()

app.listen(3003, ()=>{console.log(`SERVER IS RUNNING IN PORT 3003`);
})