import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL ='http://localhost:8002'

  constructor(private http: HttpClient) {

   }

   signup(user:any) {
    return this.http.post<any>(this.URL, user);
   }

   signin(user: any) {
    console.log(user)
    return this.http.post<any>(this.URL + '/login', user);
   }

   getToken () {
    return localStorage.getItem('token');
   }
}

// // Authentication
// router.post('/login', userController.loginUser);
// router.post('/logout', authMiddleware.authRequired, userController.logoutUser);
// router.get('/profile', authMiddleware.authRequired, userController.profile);
// // Users
// router.get('/', authMiddleware.authRequired, userController.getUsers);
// router.post('/', authMiddleware.authRequired, userController.createUser);
// router.get('/:id', authMiddleware.authRequired, userController.getUserById);
// router.put('/:id', authMiddleware.authRequired, userController.updateUser);
// router.delete('/:id', authMiddleware.authRequired, userController.deleteUser);