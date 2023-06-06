import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';      //headers metodo post respuesta    client respuesta del cliente 
import { Observable } from 'rxjs';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})

export class RegisterServiceService {
  //crear una variable para asignarle la url del servidor
  baseurl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  //crear la instancia 
  resgister(name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      `${this.baseurl}/api/register/`,
      { name, email, password },
      { headers: this.httpHeaders }
    );
  }

  //crear metodo para login 
  login(email: string, password: string): Observable<any> {
    return this.http.post(
      `${this.baseurl}/api/login/`,
      { email, password },
      { headers: this.httpHeaders }
    );
  }
  //metodo para consumir el metodo get
  getCurrentUser(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });

    return this.http.get(`${this.baseurl}/api/users/show/` + id, { headers });
  }

  //metodo para verificar que hay sesion iniciada
  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token;
  }

  //metodo de logout
  logout(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });

    return this.http.delete(
      `${this.baseurl}/api/logout/`,
      { headers }
    );
  }

  //consume servicio       nombre, parametros, funcionamiento 
  newPassword(email: string): Observable<any>   //observar algo de cualquier tipo 
  {
    // se retorna el http porque es un put
    return this.http.put(
      //ponemos la ip base y le sumamos la ip del servicio de laravel y le sumamos el email de parametro del metodo para que le actualice a el la contraseña
      `${this.baseurl}/api/newPassword/${email}`, {});
    //http://127.0.0.1:8000/api/newPassword/prueba@gmail.com
  }

  crearFoto(user_id: string, selectedImage: any): Observable<any>{
    console.log("En el servicio: ", selectedImage);
    return this.http.post<any>(`${this.baseurl}/api/crearFoto/${user_id}`,
    {selectedImage});   //se hace un json de la imagen 
  }

  

}