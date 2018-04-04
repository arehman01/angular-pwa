import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { MatButtonModule, MatToolbarModule, MatInputModule, MatListModule, MatCheckboxModule, MatProgressSpinnerModule } from '@angular/material';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
	declarations: [
	AppComponent,
	TodoListComponent
	],
	imports: [
		FormsModule,
		BrowserModule,
		BrowserAnimationsModule,
		ServiceWorkerModule.register('/angular-pwa/ngsw-worker.js', { enabled: environment.production }),
		MatButtonModule,
		MatToolbarModule,
		MatInputModule,
		MatListModule,
		MatCheckboxModule,
		MatProgressSpinnerModule
	],
	exports: [
		
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
