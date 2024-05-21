/* eslint-disable prettier/prettier */
import type { HttpContext } from '@adonisjs/core/http'
import { registerValidator } from '#validators/register'
import User from '#models/user'

export default class AuthController {

    async register({request, response, auth}: HttpContext) {

        const data = await registerValidator.validate(request.all())
        console.log(data)

        const user = await User.create({
            email: data.email,
            compagny_name: data.compagnyName,
            siret_number: data.siretNumber,
            name: data.name,
            surname: data.surname
        })

        // console.log(user.$isPersisted)

        await auth.use().login(user)

        return response.status(200).send({
            message : 'account creation request submitted'
        })
    }

    async login({request, response, auth}: HttpContext) {
        const {email, passwoord} = request.only(['email', 'password'])

        try {
            await auth
        }
        return response.status(200).send({
            message : 'login request submitted'
        })
    }

    async logout({response, auth}: HttpContext) {
        await auth.use().logout()
        return response.status(200).send({
            message : 'logout request submitted'
        })
    }
}