import { Routes } from '@angular/router';
import { Layout } from './common/layout/layout';
import { ArticlePage } from './features/articles/article-page/article-page';

export const routes: Routes = [
    {
        path: '**',
        component: Layout
    },
    {
        path: 'article/:id',
        component: ArticlePage
    },
    {
        path: '*',
        redirectTo: ''
    }
];
