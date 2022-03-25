import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VerPersonajesComponent } from './componentes/ver-personajes/ver-personajes.component';

@NgModule({
  declarations: [
    VerPersonajesComponent
  ],
  imports: [CommonModule],
  exports: [VerPersonajesComponent]
})
export class PersonajesModule {}