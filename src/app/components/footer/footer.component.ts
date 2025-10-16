import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

links = [
  
  { name: 'NCRDC', link: 'https://ncdrc.nic.in/', target: '_blank' },
  { name: 'e-Jagriti', link: 'https://e-jagriti.gov.in/', target: '_blank'  },
  { name: 'SCI', link: 'https://www.sci.gov.in/',target: '_blank'  },
  { name: 'DHC', link: 'https://delhihighcourt.nic.in/admin', target: '_blank'  },
  { name: 'NIC', link: 'https://www.nic.in/', target: '_blank'  },
]

}
