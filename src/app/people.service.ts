import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(protected http: HttpClient) { }

  getPeople() {
    return this.http.get('https://gorest.co.in/public-api/users?_format=json&access-token=2sTTRZ41l-OXUyHqJQDmVQph7HYgT8A0Mw9X');
  }

  getInfoPeople(id)
  {
    return this.http.get('https://gorest.co.in/public-api/users/'+id+'?_format=json&access-token=2sTTRZ41l-OXUyHqJQDmVQph7HYgT8A0Mw9X');
  }

}
