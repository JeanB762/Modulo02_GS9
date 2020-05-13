import app from './app';

app.listen(3333, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Express server listening on port 3333`);
});
