import { Request, Response } from 'express'
import { Issue } from '../../models/Issue'

type Req = Request<{ repo: string }>

export async function getIssues(req: Req, res: Response): Promise<void> {
  const { repo } = req.params
  const issues = await Issue.getRepository().find({
    where: { repo },
    order: { updatedAt: 'DESC' },
    relations: ['release', 'author'],
  })
  res.render('Issues/Issues', { issues })
}
