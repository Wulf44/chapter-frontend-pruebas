import { Injectable } from "@angular/core";
import { Personajes } from "../modelos/personajes";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class ApiService {

  private PersonajesUrl = "https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=51&title=";
  private AddPersonajesUrl = "https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=51";
  private UpdatePersonajesUrl = "https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=51&id=";


  constructor(private http: HttpClient) {}

  public getPersonaje(target: string): Observable<Personajes> {
    return this.http.get<Personajes>(this.PersonajesUrl + target);
  }

  public AddPersonaje(title: string, body: string, image: string): Observable<Personajes> {
    return this.http.post<Personajes>(this.AddPersonajesUrl,{title, body, image});
  }

  public UpdatePersonaje(id: string, title: string, body: string, image: string): Observable<Personajes> {
    return this.http.put<Personajes>(this.UpdatePersonajesUrl + id, {title, body, image});
  }
}