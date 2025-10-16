import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeeComponent } from './pages/fee/fee.component';
import { DistForumComponent } from './pages/dist-forum/dist-forum.component';
import { ActsComponent } from './pages/acts/acts.component';
import { RulesComponent } from './pages/rules/rules.component';
import { HistoryComponent } from './pages/history/history.component';
import { MembersComponent } from './pages/members/members.component';
import { FilingProcedureComponent } from './pages/filing-procedure/filing-procedure.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FormerMembersComponent } from './pages/former-members/former-members.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: `HOME | Delhi State Consumer Disputes Redressal Commission` },
    { path: 'home', component: HomeComponent, title: `HOME | Delhi State Consumer Disputes Redressal Commission` },
    { path: 'aboutUs', component: AboutComponent, title: `ABOUT US | Delhi State Consumer Disputes Redressal Commission` },
    { path: 'contact', component: ContactComponent, title: `CONTACT | Delhi State Consumer Disputes Redressal Commission` },
    { path: 'fee-structure', component: FeeComponent, title: `FEE-STRUCTURE | Delhi State Consumer Disputes Redressal Commission` },
    { path: 'dist-forum', component: DistForumComponent, title: `District Forum | Delhi State Consumer Disputes Redressal Commission` },
    { path: 'acts', component: ActsComponent, title: `ACTS | Delhi State Consumer Disputes Redressal Commission` },
    { path: 'rules', component: RulesComponent, title: `RULES | Delhi State Consumer Disputes Redressal Commission` },
    { path: 'daily-order', component: HistoryComponent, title: `DAILY ORDERS | Delhi State Consumer Disputes Redressal Commission` },
    { path: 'members', component: MembersComponent, title: `SITTING MEMBERS | Delhi State Consumer Disputes Redressal Commission` },
    { path: 'former-members', component: FormerMembersComponent, title: `FORMER MEMBERS | Delhi State Consumer Disputes Redressal Commission` },
    { path: 'filing-procedure', component: FilingProcedureComponent, title: `FILING PROCEDURE | Delhi State Consumer Disputes Redressal Commission` },
    { path: 'faq', component: FaqComponent, title: `FAQS | Delhi State Consumer Disputes Redressal Commission` },

];
