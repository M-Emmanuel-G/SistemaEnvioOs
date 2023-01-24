import { OsController } from './../Controller/osController';
import express from 'express'

export const osRouter = express.Router()

const osController = new OsController()

osRouter.get('/show', osController.showOs)
osRouter.get('/show/:os', osController.searchOs)
osRouter.post('/create', osController.createOS)
osRouter.delete('/remove/:os', osController.removeOs)
osRouter.patch('/update/:os', osController.updateOs)