import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit {
  miFormulario: FormGroup;

  serie = {
    titulo: 'S1',
    numTemporadas: 3
  }

  // serie = [
  //   {key: 'titulo', value: 'S1'},
  //   {key: 'numTemporadas', value: '3'}
  // ]


  constructor(private formBuild: FormBuilder) { }

  ngOnInit() {
    // this.miFormulario = new FormGroup({
    //   nombre: new FormControl('Angel'),
    //   email: new FormControl('Angel@gmail.com'),
    //   password: new FormControl('1234'),
    // });
    this.miFormulario = this.formBuild.group({
      // nombre: this.formBuild.control('Angel', [Validators.required, Validators.minLength(3), this.nombreValido(['arya', 'rickon', 'bran', 'robb', 'sansa', 'jon'])]),
      nombre: this.formBuild.control('Angel', [
        Validators.required,
        Validators.minLength(3),
        // this.nombreValido
        this.nombreValido(['arya', 'rickon', 'bran', 'robb', 'sansa', 'jon'])
      ]),
      email: this.formBuild.control('Angel@gmail.com', Validators.required),
      password: this.formBuild.control('1234', Validators.required),


      skills: this.formBuild.array([
        this.formBuild.control('JavaScript', Validators.required),
        this.formBuild.control('Angular', Validators.required),
      ])


    });
  }

  addSkill() {
    // console.log(this.miFormulario.controls.skills.controls)
    (<FormArray>this.miFormulario.controls.skills).push(new FormControl('', Validators.required))
  }

  guardar() {
    console.log(this.miFormulario.controls);
    // console.log(Object.keys(this.miFormulario.controls.nombre.errors));
  }

  // nombreValido(campo: FormControl) {
  //   const nombresValidos = ['arya', 'rickon', 'bran', 'robb', 'sansa', 'jon'];
  //   if (nombresValidos.includes(campo.value.trim().toLowerCase())) {
  //     // Es valido si devolvemos null
  //     return null;
  //   }
  //   // Es invalido devolviendo cualquier cosa que no sea null
  //   return {
  //     nombreValido: false
  //   }
  // }

  nombreValido(nombresValidos: Array<string>) {

    return function refValidaNombre(campo: FormControl) {
      if (nombresValidos.includes(campo.value.trim().toLowerCase())) {
        // Es valido si devolvemos null
        return null;
      }
      // Es invalido devolviendo cualquier cosa que no sea null
      return {
        nombreValido: false
      }
    }
  }
}