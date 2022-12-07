import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'board', pathMatch: 'full' },
    {
        path: 'board',
        loadChildren: () =>
            import('./routes/board/board.module').then(
                (module) => module.BoardModule
            ),
    },
    {
        path: 'details',
        loadChildren: () =>
            import('./routes/details/details.module').then(
                (module) => module.DetailsModule
            ),
    },
    {
        path: 'control-panel',
        loadChildren: () =>
            import('./routes/control-panel/control-panel.module').then(
                (module) => module.ControlPanelModule
            ),
    },
    { path: '**', redirectTo: 'board' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
