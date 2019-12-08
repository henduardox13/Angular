import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-perfil-component',
  templateUrl: './perfil-component.component.html',
  styleUrls: ['./perfil-component.component.sass']
})
export class PerfilComponentComponent implements OnInit {
  people: any[] = [];
  
  constructor(protected peopleService: PeopleService, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    
     let id = this.rutaActiva.snapshot.params.deta;
   

    this.peopleService.getInfoPeople(id)
      .subscribe(
        (data) => { // Success
          this.people = data['result'];
        },
        (error) => {
          console.error(error);
        }
      );

  }

}
