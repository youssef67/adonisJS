/* eslint-disable prettier/prettier */
import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
    vine.object({
        email: vine.string().trim().email(),
        compagnyName: vine.string(),
        siretNumber: vine.string().fixedLength(14),
        name: vine.string().trim().minLength(2),
        surname: vine.string().trim().minLength(2)
    })
)