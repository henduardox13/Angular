import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-lista-component',
  templateUrl: './lista-component.component.html',
  styleUrls: ['./lista-component.component.sass']
})
export class ListaComponentComponent implements OnInit {

  peoples: any[] = [];

  constructor(protected peopleService: PeopleService) { }

  ngOnInit() {

    this.peopleService.getPeople()
      .subscribe(
        (data) => { // Success
          this.peoples = data['result'];
        },
        (error) => {
          console.error(error);
        }
      );


  }

}
