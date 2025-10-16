import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { importantLinks } from '../../data/notices';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
links = importantLinks;

    causelist1={
    date: '03-03-2025',
    bench: 'Bench 1&3',
    file: 'assets/cause_list/03-03-2025-b3.docx'
  }

  causelist2={
    date: '03-03-2025',
    bench: 'Bench 2',
    file: 'assets/cause_list/03-03-2025-b3.docx'
  }


  importantLinks=[
    {
      link: 'https://ncdrc.nic.in/', title: "ORDER- Mediator's Fee-SCDRC-02/08/2023"
    },
    {
      link: 'https://ncdrc.nic.in/', title: 'Regarding Transfer of Cases In Districts Commission'
    },
    {
      link: 'https://ncdrc.nic.in/', title: ' Functioning of Consumer Courts in June 2024'
    },
    {
      link: 'https://ncdrc.nic.in/', title: 'Listing of Interlocutory Application(IA)'
    },
    {
      link: 'https://ncdrc.nic.in/', title: 'Listing of Interlocutory Application(IA)'
    },
    {
      link: 'https://ncdrc.nic.in/', title: "ORDER- Mediator's Fee-SCDRC-02/08/2023"
    },
    {
      link: 'https://ncdrc.nic.in/', title: 'Regarding Transfer of Cases In Districts Commission'
    },
    {
      link: 'https://ncdrc.nic.in/', title: ' Functioning of Consumer Courts in June 2024'
    },
    {
      link: 'https://ncdrc.nic.in/', title: 'Listing of Interlocutory Application(IA)'
    },
    {
      link: 'https://ncdrc.nic.in/', title: 'Listing of Interlocutory Application(IA)'
    },
    {
      link: 'https://ncdrc.nic.in/', title: "ORDER- Mediator's Fee-SCDRC-02/08/2023"
    },
    {
      link: 'https://ncdrc.nic.in/', title: 'Regarding Transfer of Cases In Districts Commission'
    },
    {
      link: 'https://ncdrc.nic.in/', title: ' Functioning of Consumer Courts in June 2024'
    },
    {
      link: 'https://ncdrc.nic.in/', title: 'Listing of Interlocutory Application(IA)'
    },
    {
      link: 'https://ncdrc.nic.in/', title: 'Listing of Interlocutory Application(IA)'
    },
    {
      link: 'https://ncdrc.nic.in/', title: "ORDER- Mediator's Fee-SCDRC-02/08/2023"
    },
    {
      link: 'https://ncdrc.nic.in/', title: 'Regarding Transfer of Cases In Districts Commission'
    },
    {
      link: 'https://ncdrc.nic.in/', title: ' Functioning of Consumer Courts in June 2024'
    },
    {
      link: 'https://ncdrc.nic.in/', title: 'Listing of Interlocutory Application(IA)'
    },
    {
      link: 'https://ncdrc.nic.in/', title: 'Listing of Interlocutory Application(IA)'
    },
  ]

  downloadBench1(): string {
    // Adjust the path as necessary based on your project's structure
    return (this.causelist1.file);

  }
  downloadBench2(): string {
    // Adjust the path as necessary based on your project's structure
    return (this.causelist2.file);

  }

}
