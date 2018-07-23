import server from '../../app.js'
import request from 'supertest'

afterEach(() => {
  server.close()
})

test('Failed: error password: xiaoguoping & 1234', async () => {
  const response = await request(server)
                    .post('/auth/user')
                    .send({
                      name: 'xiaoguoping',
                      password: '1234'
                    })
  expect(response.body.success).toBe(false)
})

test('Success: xiaoguoping & 123', async () => {
  const response = await request(server)
                    .post('/auth/user')
                    .send({
                      name: 'xiaoguoping',
                      password: '123'
                    })
  expect(response.body.success).toBe(true)
})

test('Failed: error userName: zhuhuahao & 123', async () => {
  const response = await request(server)
                    .post('/auth/user')
                    .send({
                      name: 'zhuhuahao',
                      password: '123'
                    })
  expect(response.body.info).toBe('用户不存在！')
})

test('Getting the user info is null if the url is /auth/user/100', async () => {
  const response = await request(server)
                    .get('/auth/user/100')
  expect(response.body).toEqual({})
})

test('Getting user info successfully if the url is /auth/user/2', async () => {
  const response = await request(server)
                    .get('/auth/user/2')
  expect(response.body.user_name).toBe('xiaoguoping')
})
