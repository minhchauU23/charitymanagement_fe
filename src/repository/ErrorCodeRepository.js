const errorcode = [
  { 444: 'User is not exist.' },
  {
    445: 'Username must be at least 8 characters long and not contain invalid characters.',
  },
  { 446: 'Password is incorrect' },
  { 447: 'Password must be at least 8 characters' },
  { 490: 'Some thing wrong' },
]

export const ErrorCode = {
  get: code => errorcode[code],
}
