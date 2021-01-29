import { addUser } from '../../../src/controllers/users/addUser'
import { getMockReq, getMockRes } from '../../__mocks__/express'

describe('addUser', () => {
  it('should render add user page', () => {
    const req = getMockReq()
    const { res } = getMockRes()
    addUser(req, res)
    expect(res.render).toHaveBeenCalledWith('Users/User', { title: 'Add user' })
  })
})
