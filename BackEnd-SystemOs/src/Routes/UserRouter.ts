import express from 'express'
import { UserController } from '../Controller/userController'

export const userRouter = express.Router()
const userController = new UserController()

userRouter.get('/show', userController.readUser)
userRouter.get('/show/:cpf', userController.searchCpf)
userRouter.post('/create', userController.createUser)
userRouter.delete('/remove/:id', userController.deleteUser)
userRouter.patch('/update/:id', userController.updateUser)