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
          case 'IG':
            window.location.href = 'https://www.instagram.com/kandorfit';
            break;
          case 'WA':
            window.location.href = 'https://api.whatsapp.com/send?phone=56968369872&text=%C2%A1Hola!%20Quiero%20informaci%C3%B3n%20acerca%20de%20c%C3%B3mo%20ser%20parte%20de%C2%A0Kandor%C2%A0%F0%9F%92%AA%F0%9F%8F%8B';
            break;
          case 'TK':
            window.location.href = 'https://www.tiktok.com/@kandorfitness';
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
