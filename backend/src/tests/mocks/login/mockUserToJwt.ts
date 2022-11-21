const tokenPart1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjo';
const tokenPart2 = 'iVXNlckNvcnJldG8iLCJwYXNzd29yZCI6IiQyYiQxMCRZSHlSV2hjVk0zMFJWa2x';
const tokenPart3 = '1QmJORlEubVc5NHEwY1RMQnNhSS5WOWNjcUYuUFczaC4zZEU3SyIsImFjY291bnR';
const tokenPart4 = 'JZCI6NCwiaWQiOjR9LCJpYXQiOjE2Njg5MDQ2MzksImV4cCI6MTY2ODk5MTAzOX0';
const tokenPart5 = '.1pBXzycjMmQxVwVa3OLa_0vrcEA6a0K2y_y7kCbugVM';

// original password = 8iNateoito;
const mockToken = `${tokenPart1}${tokenPart2}${tokenPart3}${tokenPart4}${tokenPart5}`;

const mockUserToJwt = {
  userNoPass: {
    id: 4,
    username: 'UserCorreto',
    accountId: 4,
  },
  token: mockToken,
};

export default mockUserToJwt;
