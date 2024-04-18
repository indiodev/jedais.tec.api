import { default as Model } from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Model.updateOrCreate(
      { email: 'admin@jedaistec.com.br' },
      {
        name: 'Admin',
        email: 'admin@jedaistec.com.br',
        password: '123456',
        role: 'admin',
      }
    )
  }
}
