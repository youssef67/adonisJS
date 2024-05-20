// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import User from '#models/user'

export default class UsersController {
  async index(ctx: HttpContext) {
    const users = await User.all()

    return ctx.response.status(200).json(users)
  }

  async show({ params }: HttpContext) {
    const user = await User.find(params.id)

    return { user: user }
  }

  async store({ request }: HttpContext) {
    // console.log(request.body().email)
    const user = await User.create({
      email: request.body().email,
      password: request.body().password,
    })

    return { success: 'ok' }
  }
}
