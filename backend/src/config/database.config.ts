export default () => ({
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USER || 'autopark',
    password: process.env.DATABASE_PASSWORD || 'autopark123',
    name: process.env.DATABASE_NAME || 'autopark',
  },
});