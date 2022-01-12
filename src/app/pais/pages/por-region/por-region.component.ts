import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {

  regiones: string[] = ['africa','americas','asia','europe','oceania'];
  regionActiva:string = '';
  paises:Country[] = [];
  termino: string = '';
  hayError: boolean = false;

  constructor(
    private paisService:PaisService
  ) { }

  getClaseCSS(region:string){
    return (region == this.regionActiva) 
    ? 'btn btn-primary btn-lg p-2 btn-sm ms-2'
    :'btn btn-outline-primary btn-lg p-2 btn-sm ms-2'
  }

  activarRegion( region:string){

    if (region === this.regionActiva) {
      return;
    }
    
    this.regionActiva = region;
    this.paises = [];

    //TODO: hacer el llamado al servicio.
    this.paisService.buscarRegion(this.regionActiva)
    .subscribe( paises =>{
      console.log(paises);
      this.paises = paises;

    },(err) =>{
      this.hayError = true;
      this.paises = [];
    })
  }
  sugerencias( termino:string ){
    this.hayError = false
  }

}
