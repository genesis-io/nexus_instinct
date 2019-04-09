export default {
  protocol: process.env.NODE_ENV === 'development' || 'test' ?  'http' : 'http',
  host: process.env.NODE_ENV === 'development' || 'test' ? 'localhost' : 'api/vi',
  port: process.env.NODE_ENV === 'development' || 'test' ? '3000' : '8080',
}