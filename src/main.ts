import app from './app/app'

function run (): void {
  app.listen(app.get('port'), () => console.log(`El servidor esta corriendo en http://localhost:${app.get('port')}/api/`))
}

run()
