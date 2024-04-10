import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'kr-redirect',
  standalone: true,
  imports: [],
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const destino = params['r'];
      if (destino) {
        switch (destino) {
          case 'ONBOARDING_INFO':
            window.location.href = 'https://drive.google.com/file/d/15iB3SdawaGQ8XvVTi8UgEmkOkzPqw7sb/view';
            break;
          // Agregar más casos según sea necesario
          case 'HIDDEN_HOME':
            this.router.navigate(['hidden_home']);
            break;
          default:
            // Si el destino no coincide con ninguno de los casos anteriores, redirigir al inicio de la aplicación
            window.location.href = 'https://www.instagram.com/kandorfit';
            break;
        }
      } else {
        // Si no se proporciona ningún destino, redirigir al inicio de la aplicación
        window.location.href = 'https://www.instagram.com/kandorfit';
      }
    });
  }

}
