/* eslint-disable prettier/prettier */
/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')
const RegisterController = () => import('#controllers/auth/register_controller')



router.group(() => {

  //Route d'inscription
  router.post('/register', [RegisterController, 'register'])
  
  // router.resource('users', UsersController).apiOnly()
}).prefix('/api')



