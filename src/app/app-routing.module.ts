import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { CompletedComponent } from './completed/completed.component';


const appRoutes: Routes = [
    { path: 'todo', component: TasksComponent },
    { path: 'completed', component: CompletedComponent },

    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
