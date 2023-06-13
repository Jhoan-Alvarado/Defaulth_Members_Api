import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private client: ClientService) { }

  ngOnInit(): void {
    localStorage.setItem("token", "ahsdgjfdagjsdfasgdjsadgsa");
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.client.postRequest("http://localhost:10101/register",
        {
          name: this.form.value.name,
          email: this.form.value.email,
          password: this.form.value.password
        }, undefined, { "Authorization": `Bearer ${localStorage.getItem("token")}` }).subscribe(
          ((response: any) => {
            console.log(response);
          }),
          ((error: any) => {
            console.log("error");

          })
        )

    } else {
      console.log("Verifique sus datos");
    }
  }

}
