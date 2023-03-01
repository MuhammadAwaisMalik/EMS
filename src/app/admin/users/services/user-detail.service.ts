import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inter } from '../inter'

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<Inter[]>("http://localhost:3000/user")
  }
  creat(payload: Inter) {
    return this.http.post<Inter>("http://localhost:3000/user", payload)
  }
  getbyid(id: number) {
    return this.http.get<Inter>(`http://localhost:3000/user/${id}`)
  }
  update(payload: Inter) {
    return this.http.put(`http://localhost:3000/user/${payload.id}`, payload)
  }
  delete(id: number) {
    return this.http.delete(`http://localhost:3000/user/${id}`)
  }
}
