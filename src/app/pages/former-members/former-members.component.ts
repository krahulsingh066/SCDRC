import { Component, TemplateRef, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-former-members',
  imports: [CommonModule],
  templateUrl: './former-members.component.html',
  styleUrl: './former-members.component.css',
  providers: [BsModalService],
})
export class FormerMembersComponent {
  user!: any;
  modalRef?: BsModalRef;
  public userData = [
    {
      id: 1,
      firstName: "JUSTICE VEENA BIRBAL",
      duration: "21.08.2014 – 30.06.2019",
      description: ` Born on 01st July, 1952 at Delhi.
Father Shri Hari Chand Mehta was a practising lawyer in High Court
Did B.Sc from Miranda House College, Delhi University in 1973.
Did LL.B from Faculty of Law, Delhi University in 1977.
Enrolled as an Advocate with Bar Council of Delhi in the year 1978.
Practised in Supreme Court, Delhi High Court and District Courts Delhi from 1978 to 1992.
Appointed as Additional District & Sessions Judge in December, 1992 and dealt with Matrimonial cases and Sessions Trials.
Sent by Delhi High Court on Deputation to Govt. of NCT of Delhi as Secretary (Law, Justice and Legislative Affairs) and worked there from 2003 to 2006.
Worked as Judge Incharge, Karkardooma Courts from August, 2006 to 28th February, 2007.
Became District &amp; Sessions Judge, Delhi on 01st March, 2007.
Elevated as an Additional Judge of Delhi High Court on 31.08.2007.
Retired on 30.06.2014.`,
      imgLink: "../../../assets/former-presidents/veena.JPG",
    },
    {
      id: 2,
      firstName: "JUSTICE BARKAT ALI ZAIDI",
      duration: "01.08.2009 – 09.02.2014",
      description: "Hon’ble Mr. Justice Barkat Ali Zaidi was born on February 10, 1947. He post-graduated in Arts in 1969 and obtained his LL.B. degree in 1971. Throughout his illustrious career, he served in several judicial capacities. From July 1994 to May 1998, he was the Judicial Member of the Trade Tax Tribunal in Agra. In 1984, he was appointed in the Higher Judicial Service (H.J.S.) and later promoted as a District & Sessions Judge in 1999. Justice Zaidi was elevated as an Additional Judge on October 20, 2005, and took oath as a permanent Judge on August 10, 2007. His tenure at the Allahabad High Court began on October 20, 2005, and he served there until February 9, 2009.",
      imgLink: "../../../assets/former-presidents/zaidi.jpg",
    },
    {
      id: 3,
      firstName: "JUSTICE J.D. KAPOOR",
      duration: "14.07.2004 – 09.04.2009",
      description: `
                                           Justice Jiwan Dass Kapoor - B.A. LL.B. 

Born on April 10, 1942. Entire education from School to College level fromerstwhile Punjab.

Enrolled as an Advocate and Practised at the Bar from 1966 to 1970 on Civiland Criminal side.
After having a short stint of four years at the Bar, Justice Kapoor joined State Judicial Service in 1970 and during span of 30 years as Member of Delhi Judicial Service and Delhi Higher Judicial Service and before his elevation as Judge of Delhi High Court had held various important positions such as Rent Controller, Matrimonial Judge, Special Judge for Dowry Death Cases and Secretary, Law, Justice and Legislative Affairs of Govt. of NCT of Delhi and Rent Control Tribunal. After his retirement as Judge of Delhi High Court in April 2004.

Justice Kapoor is known for high disposal of cases and a large number of his judgments have been reported in various law journals. He is also the author of two books on marriage & contempt of court.

Justice Kapoor joined State Consumer Disputes Redressal Commission Delhi as its President on 14th July, 2004.  Justice Kapoor retired on 09.04.2009. During his tenure Justice Kapoor decided approximately 11000 cases.

 .`,
      imgLink: "../../../assets/former-presidents/kapoor.jpg",
    },
    {
      id: 4,
      firstName: "JUSTICE LOKESHWAR PRASAD",
      duration: "04.02.1999-25.11.2003",
      description: "Justice Lokeshwar Prasad, M.A., LL.B. - Born on 26.11.1936. Belongs to Madhya Pradesh Sate Civil Service. Came on deputation to Delhi as a Judicial Magistrate Ist Class in December, 1969. On the formation of Delhi Judicial Service, was inducted as a member of Delhi Judicial Service in August, 1971. Worked as Judicial Magistrate exclusively trying cases investigated by the Central Bureau of Investigation from 1972 to 1974. As Administrative Sub Judge/Judge under the Indian Succession Act from 1974 to 1975 - Deputy Registrar, High Court of Delhi from 1975 to 1978 - worked on deputation as Chief Legal Advisor. DDA. Promoted to Delhi Higher Judicial Service in 1979 - Secretary (Law & Judl) Delhi Administration from 1980 to 1985 - Registrar, Central Administrative Tribunal (Principal bench) New Delhi - Additional district and Sessions Judge, Delhi. Special Judge CBI Delhi - Registrar, High Court of Delhi, New Delhi - additional Sessions Judge/Designated Court Under TADA, Patiala House Courts, new Delhi upto 16th May, 1995. Appointed as an Additional Judge of Delhi High Court on 17.5.95 and as permanent Judge on 24.12.97. Retired on 26.11.1998. Justice Lokeshwar Prasad joined State Consumer Disputes Redressal Commission Delhi as its President on 04.02.1999 and worked till 25.11.2003.",
      imgLink: "../../../assets/former-presidents/l_prasad.jpg",
    },
    {
      id: 5,
      firstName: "JUSTICE A.P. CHOWDHRI",
      duration: "04.04.1995 – 04.02.1999",
      description: "Justice A.P. Chowdhri, B.A., L.L.B., born on 01-April-1933. Held various important posts such as Subordinate Judge 1st Class, Judicial Magistrate 1st Class, Senior Subordinate Judge, Joint Registrar (Judicial) High Court, Law Officer (Law Commission of India) and Legal Remembrancer. Elevated as Judge, High Court of Punjab & Haryana at Chandigarh on 04-05-1988 and worked till 31st March 1995. He worked as President of the Consumer Disputes Redressal Commission, New Delhi w.e.f 04-04-1995. Worked as Chairman of Dealers Selection Board(ii), Haryana constituted by Ministry of Petroleum and Natural Gas, Government of India, New Delhi from Feb. 1999 to Jan. 2000.",
      imgLink: "../../../assets/former-presidents/ap_chowdhri.jpg",
    },
    {
      id: 6,
      firstName: "JUSTICE R.N. MITTAL",
      duration: "17.09.1990-31.03.1995",
      description: "Justice Rajendra Nath Mittal, born on April, 1926. Educated at A.S. High School, Ambala City, University Law College, Lahore and Simla. Enrolled in District Court, Ambala, Punjab & Haryana High Court at Chandigarh. In 1987 he became acting Chief Justice of Punjab & Haryana High Court at Chandigarh. He worked as President of the Consumer Disputes Redressal Commission, New Delhi from 14-09-1990 to 31-03-1995. He is now working as Vice President of the D.A.V. College Managing Committee and is also Chairman of a large number of D.A.V. Schools.",
      imgLink: "../../../assets/former-presidents/raj_mittal.jpg",
    },
    {
      id: 7,
      firstName: "JUSTICE PRITHVI RAJ",
      duration: "27.10.1989",
      description: "Justice Prithvi Raj, M.A., B.A.(Hons), LL.B - Born on 4.9.1918. Educated at P.B.N. High School, Amritsar, Khalsa College Amritsar, University Law College, Lahore and Simla. Enrolled in Punjab High Court at Simla on 18.12.1952 in Judicial Commissioner's Court on 25.6.1957. Practised on criminal, civil and revenue, and writ work at Simla. Worked in the Ministerial Service. Office of the inspector General of Police. Appointed as Additional Judge of the Delhi High Court w.e.f. 20.3.1970 for a period of two years. Reappointed for two years w.e.f. 20.3.1972.",
      imgLink: "../../../assets/former-presidents/p_raj.jpg",
    },
  ];


  members: { siNo: number; name: string; period: string }[] = [
    { siNo: 1, name: 'SH. B.L. ANAND', period: '27.10.1989-26.10.1992' },
    { siNo: 2, name: 'DR. (MRS.)AVTAR PENNATUR', period: '01.11.1989 – 30.10.1992' },
    { siNo: 3, name: 'MS. S. BRAR', period: '26.11.1992-25.11.1997' },
    { siNo: 4, name: 'DR. A. N. SAXENA', period: '27.11.1992' },
    { siNo: 5, name: 'SH. DESH BANDHU', period: '26.05.1995 – 25.05.2000' },
    { siNo: 6, name: 'MS. RUMNITA MITTAL', period: '01.04.1999-12.10.2009' },
    { siNo: 7, name: 'SH. S.P. SABERWAL', period: '11.12.2000-07.11.2002' },
    { siNo: 8, name: 'SH. MAHESH CHANDRA', period: '01.06.2003- 31.08.2007' },
    { siNo: 9, name: 'SH. G.D. DHANUKA', period: '08.11.2007 - 16.02.2008' },
    { siNo: 10, name: 'SH. M.L. SAHNI', period: '01.07.2008 - 16.10.2010' },
    { siNo: 11, name: 'MS. SALMA NOOR', period: '23.03.2010' },
    { siNo: 12, name: 'MS. KANWAL INDER', period: '25.11.2010-02.09.2011' },
    { siNo: 13, name: 'SH. V.K. GUPTA', period: '23.05.2012 – 14.06.2013' },
    { siNo: 14, name: 'SH. N. P. KAUSHIK', period: '19.11.2013 – 18.11.2018' },
    { siNo: 15, name: 'SH. S.C. JAIN', period: '14.01.2013 – 14.04.2016' },
    { siNo: 16, name: 'SH. S.A. SIDDIQUI', period: '16.01.2013 – 31.01.2014' },
    { siNo: 17, name: 'SH.O.P. GUPTA', period: '20.07.2015 – 04.02.2021' },
    { siNo: 18, name: 'SH. ANIL SRIVASTAVA', period: '01.02.2017-31.01.2022' },
    { siNo: 19, name: 'SH. RAJAN SHARMA', period: '20.09.2021- 08.04.2024' },
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
