const app = require('./app');
const sequelize = require('./config/db');
const PORT = process.env.PORT || 5001;

sequelize.authenticate()
  .then(() => {
    console.log('MySQL connected...');

    sequelize.sync({ force: false })
      .then(() => {
        console.log('Database synchronized');
        app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
        });
      })
      .catch(syncError => console.error('Error synchronizing the database:', syncError));
  })
  .catch(err => {
    console.error('Unable to connect to MySQL:', err);
    process.exit(1);
  });
