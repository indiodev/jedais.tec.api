import { default as Model } from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Model.updateOrCreate(
      { email: 'admin@jedaistec.com.br' },
      {
        name: 'João Aguila',
        email: 'admin@jedaistec.com.br',
        password: 'admin@jedaistec',
        role: 'admin',
      }
    )
  }
}
