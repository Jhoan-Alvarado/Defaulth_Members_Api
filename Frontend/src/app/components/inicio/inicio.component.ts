import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  form: FormGroup;
  videoUrl: SafeResourceUrl;

  constructor(private fb: FormBuilder, private client: ClientService, private sanitizer: DomSanitizer) {
    const videoPath = '../../images/VideoLogin.mp4';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoPath);
  
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.client.postRequest('http://localhost:10101/login',
        {
          email: this.form.value.email,
          password: this.form.value.password
        }, undefined, undefined).subscribe(
          (response: any) => {
            console.log(response);

          },
          (error: any) => {
            console.log('Error al iniciar sesión');
          }
        );
    } else {
      console.log('Verifique sus datos');
    }
  }

  
    // Aquí especifica la ruta de tu video
  

}
