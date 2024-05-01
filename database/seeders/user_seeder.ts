import { default as Model } from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Model.updateOrCreateMany('email', [
      {
        name: 'João Aguila',
        email: 'admin@jedaistec.com.br',
        password: 'admin@jedaistec',
        role: 'admin',
      },
      {
        name: 'Marcos Jhollyfer',
        email: 'jhollyferr@jedaistec.com.br',
        password: 'jhollyferr@jedaistec',
        role: 'admin',
      },
    ])
  }
}
