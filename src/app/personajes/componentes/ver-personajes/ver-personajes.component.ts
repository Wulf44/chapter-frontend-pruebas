import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../servicios/api.service";
import { Personajes } from "../../modelos/personajes";

@Component({
  selector: 'app-ver-personajes',
  templateUrl: './ver-personajes.component.html',
  styleUrls: ['./ver-personajes.component.css']
})
export class VerPersonajesComponent implements OnInit {

  public personajes: any[] | undefined;
  constructor(private apiservice: ApiService) {
  }

  ngOnInit() {
  }

  getPersonajeInicial(titulo: string) {
    this.apiservice.getPersonaje(titulo).subscribe((data) => (this.personajes = Object.values(data)));
    this.ngOnInit();
  }

  AddPersonajeInicial(nombre: string, descripcion: string, imagen: string) {
    this.apiservice.AddPersonaje(nombre, descripcion, imagen).subscribe(() => {this.ngOnInit()});
  }

  UpdatePersonajeInicial(id: string, nombre: string, descripcion: string, imagen: string) {
    this.apiservice.UpdatePersonaje(id, nombre, descripcion, imagen).subscribe((data) => (this.personajes = Object.values(data)));
    this.ngOnInit();
  }

  DeletePersonajeInicial(titulo: string) {
    this.apiservice.getPersonaje(titulo).subscribe((data) => (this.personajes = Object.values(data)));
    this.ngOnInit();
  }
}
