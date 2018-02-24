import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
	{ path: '', redirectTo: '/manage', pathMatch: 'full' },
	{ path: 'manage', component: ManageComponent },
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
