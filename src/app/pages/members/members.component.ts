import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
@Component({
  selector: 'app-members',
  imports: [],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css',
  providers: [BsModalService],
})
export class MembersComponent {

user!: any;
  modalRef?: BsModalRef;
  public userData = [
    {
      id: 1,
      firstName: "MS PINKI (Member Judicial)",
      duration: "21.08.2014 – 30.06.2019",
      description: ` Mrs. Pinki is an accomplished judicial officer with a career spanning over three decades. Born on March 13, 1961, she has held numerous pivotal roles in the judicial system, showcasing her expertise and dedication to the field of law.

Mrs. Pinki's academic journey began with her higher secondary education from the Central Board of Secondary Education in 1977. She earned a B.Sc. Gen. Group A from Dayal Singh College, Delhi University, in 1980, followed by a Certificate Course in Forensic Science in 1981 and an M.A. in Economics from Meerut University in 1990. Furthering her education, she completed a Post Graduate Diploma in Disaster Preparedness and Rehabilitation from Guru Gobind Singh Indraprastha University in 2008, sponsored by the Hon'ble High Court. Professionally, Mrs. Pinki obtained her LL.B. from Delhi University in 1984, and pursued multiple diplomas in various legal disciplines, including Administrative Law and International Law. She completed her LL.M. from Kurukshetra University in 2003.
After superannuation as District Judge (Commercial) in 2021, Mrs. Pinki joined the Delhi State Consumer Redressal Commission as a Member (Judicial) on September 20, 2021. Her extensive training and continuous learning at the Delhi Judicial Academy have further honed her skills in various specialized jurisdictions and administrative roles.`,
      imgLink: "../../../assets/members/pinki.JPG",
    },
    {
      id: 2,
      firstName: "Sh. J.P. AGRAWAL (Member General)",
      duration: "01.08.2009 – 09.02.2014",
      description: `Sh. J.P. Agrawal (Member General) is a distinguished civil servant with over 35 years of extensive experience in various administrative capacities. He holds a B.E. (Hons.) in Civil Engineering from Malaviya Regional Engineering College (now MNIT), Jaipur, and was a National Talent Search Scholar from 1978 to 1983.

After completing his graduation in 1983, Sh. Agrawal began his career as a Lecturer in Civil Engineering at MNIT, Jaipur. In 1987, he joined the Delhi Andaman Nicobar Ireland Services through the Civil Service Examination of 1985 and was later inducted into the IAS (AGMUT) cadre in 2004. Throughout his career, he has held various significant positions, including MD of DKVIB & Member (Administration) of Delhi Jal Board, Secretary (Land & Building), and Commissioner & Secretary (Cooperation), amongst others.

With a vast experience in administration, public dealing, and policy formulation, Sh. Agrawal has contributed to several key sectors including finance, taxation, health, infrastructure development, and disaster management. He retired on June 30, 2022, holding the Super Time Scale of IAS, and currently serves as a Member (General) in the Delhi State Consumer Disputes Redressal Commission. Sh. Agrawal’s dedication and service have left a significant impact on the governance and development of the regions he has served.

`,
      imgLink: "../../../assets/members/jpimage.jpg",
    },
    {
      id: 3,
      firstName: "Ms. BIMLA KUMARI (Member Female)",
      duration: "14.07.2004 – 09.04.2009",
      description: `Smt. Bimla Kumari is a seasoned legal professional with an impressive career in the judiciary. Born on July 1, 1961, she has made significant contributions to the judicial system through her diverse roles and extensive experience.

Mrs. Kumari completed her B.A. from M.D. University, Rohtak, Haryana, where she excelled academically. She further pursued her LLB from the University of Delhi, graduating with first division honors, and later earned her LLM from Kurukshetra University, Haryana.

She began her judicial career in November 1992 as a member of the Delhi Judicial Service. On June 6, 2003, she was promoted to the Delhi Higher Judicial Services, where she held several key positions, including Presiding Officer, Joint Registrar at Delhi High Court, Additional Sessions Judge/Special Judge (NDPS), Additional District Judge, Special Judge for Fast Track Court, Judge for Family Court, and Principal Judge for Family Court.

Smt. Bimla Kumari superannuated on June 30, 2021, after serving in the Super Time Scale. Currently, she holds the office of Member (Female) at the State Consumer Disputes Redressal Commission, Delhi. Her extensive legal knowledge, dedication, and commitment have significantly impacted the judicial landscape, reflecting her exceptional service and leadership.`,
      imgLink: "../../../assets/members/bimla.jpeg",
    },
    
  ];

  constructor(private modalService: BsModalService) {}
  
    ngOnInit() {}
  
    openModal(viewUserTemplate: TemplateRef<any>, userId: number) {
      if (userId) {
        this.user = this.userData.find((x) => x.id === userId);
        console.log(this.user);
        this.modalRef = this.modalService.show(viewUserTemplate);
      }
    }
    exitModal = (): void => {
      this.modalRef?.hide();
    };
}
