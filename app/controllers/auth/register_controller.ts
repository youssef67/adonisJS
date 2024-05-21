/* eslint-disable prettier/prettier */
import type { HttpContext } from '@adonisjs/core/http'
import { registerValidator } from '#validators/register'
import User from '#models/user'

export default class RegisterController {

    async register({request, response}: HttpContext) {

        const data = request.all()
        await registerValidator.validate(data)

        const user = await User.create({
            name: data.name,
            surname: data.surname,
            email: data.email,
            compagny_name: data.compagnyName,
            siret_number: data.siretNumber
        })

        console.log(user.$isPersisted)

        return response.status(200).send({
            message : 'account creation request submitted'
        })
    }
}