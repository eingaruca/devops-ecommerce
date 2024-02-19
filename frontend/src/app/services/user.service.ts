import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import * as jwt_decode from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL ='http://localhost:8002'

  constructor(
    private http: HttpClient
  ) { }

  getUserById(){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    // const decodedToken:any = jwtDecode(token ||'');
    // console.log('id',decodedToken.id);
    // return this.http.get<any>(this.URL + `/${decodedToken.id}`, { headers });
    return this.http.get<any>(this.URL + `/profile`, { headers });
  }

  updateProfile (user: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    /**
     * Revisar, porque tenemos que enviar el token y el body.
     * updateProfile -> Recibe todo el usuario y su token.
     */
    console.log('USERSERVICE', user)
    return this.http.put<any>(this.URL + `/updateProfile`, user, {headers})
  }
}


// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProfileService {
//   private userProfile: any = {
//     name: 'Juan Pérez',
//     email: 'juan@example.com',
//     address: 'Calle Principal, Ciudad, País',
//     phone: '+123456789',
//     avatar: 'avatar.jpg' // Puedes guardar la ruta de la imagen del avatar aquí
//   };

//   constructor() { }

//   getUserProfile() {
//     return this.userProfile;
//   }
// }
