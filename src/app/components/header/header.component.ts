import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  showSideNav = false;
  constructor(
    private router: Router
  ){}

  navigateToExternalLink(url: string, target: any) {
    if (target === '_blank') {
      window.open(url, '_blank');
    } else {
      this.router.navigate([url]);
    }
  }

  toggleSidenav(): void {
    this.showSideNav = !this.showSideNav;
  }

  menuItems = [
    { name: 'Home', link: '/' ,target:'0'},
    {
      name: 'About Us', link: 'javascript:void(0)', dropdown: [
        // { name: 'Mission & Vision', link: '/aboutUs',target:'0' },
        { name: 'Sitting Chairperson & Members', link: '/members',target:'0'  },
       { name: 'Former Chairperson & Members', link: '/former-members',target:'0'  },
      ]
    },
    {
      name: 'Acts & Regulations' , link: 'javascript:void(0)', dropdown: [
        { name: 'Acts', link: '/acts',target:'0'  },
        { name: 'Rules', link: '/rules',target:'0' },
        // { name: 'Organizational Structure', link: '#',target:'0'  },
        // { name: 'Chairperson & Members', link: '#',target:'0'  },
      ]
    },
    {
      name: 'Useful Links', link: 'javascript:void(0)', dropdown: [
        { name: 'Daily Orders', link: '/daily-order' ,target:'0'  },
        { name: 'e-Jagriti', link: 'https://e-jagriti.gov.in/', target: '_blank'  },
        { name: 'NCDRC', link: 'https://ncdrc.nic.in/', target: '_blank' },
        { name: 'SCI', link: 'https://www.sci.gov.in/',target: '_blank'  },
        { name: 'DHC', link: 'https://delhihighcourt.nic.in/admin', target: '_blank'  },
        { name: 'NIC', link: 'https://www.nic.in/', target: '_blank'  },
      ]
    },
    {
      name: 'Procedure & Fees' , link: 'javascript:void(0)', dropdown: [
        { name: 'Filing Procedure', link: '/filing-procedure',target:'0'  },
        { name: 'Fees', link: '/fee-structure',target:'0' },
        // { name: 'Organizational Structure', link: '#',target:'0'  },
        // { name: 'Chairperson & Members', link: '#',target:'0'  },
      ]
    },
    { name: 'Case-History', link: 'https://e-jagriti.gov.in/case-history-case-status', target: '_blank'  },
    { name: 'Judgement', link: 'https://e-jagriti.gov.in/judgement', target: '_blank'  },
    { name: 'Cause-list', link: 'https://e-jagriti.gov.in/cause-list', target: '_blank'  },
    { name: 'District Forum', link: '/dist-forum' ,target:'0'},
    
    { name: 'Contact Us', link: '/contact' ,target:'0'},
    { name: 'FAQs', link: '/faq' ,target:'0'},
  ];



  toggleDropdown(event: Event): void {
    const button = event.target as HTMLElement;
    button.classList.toggle('active');
    const dropdownContent = button.nextElementSibling as HTMLElement;
  
    if (dropdownContent) {
      dropdownContent.style.display =
        dropdownContent.style.display === 'block' ? 'none' : 'block';
    }
  }

  // toggleDropdown(event: Event): void {
  //   const button = event.target as HTMLElement;

  //   if (button.classList.contains('dropdown-btn')) {
  //     button.classList.toggle('active');
  //     const dropdownContent = button.nextElementSibling as HTMLElement;

  //     if (dropdownContent) {
  //       dropdownContent.style.display =
  //         dropdownContent.style.display === 'block' ? 'none' : 'block';
  //     }
  //   }
  // }

}
