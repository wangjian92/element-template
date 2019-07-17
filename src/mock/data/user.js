import Mock from 'mockjs'
const LoginUsers = [
  {
    id: 1,
    username: 'csii',
    password: '123456',
    avatar: 'http://118.144.87.37:12380/uploads/-/system/group/avatar/181/vx_log.jpg?width=64',
    name: 'CSII'
  }
]

const Users = []

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }))
}

export { LoginUsers, Users }
