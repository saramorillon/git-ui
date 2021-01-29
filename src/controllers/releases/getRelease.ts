import { Request, Response } from 'express'
import { Release } from '../../models/Release'

type Req = Request<{ id?: number }>

export async function getRelease(req: Req, res: Response): Promise<void> {
  const { id } = req.params
  if (!id) {
    res.render('Releases/Release')
  } else {
    const release = await Release.getRepository().findOne(id, { relations: ['issues'] })
    res.render('Releases/Release', { release })
  }
}
