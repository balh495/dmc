import { Routes } from '@angular/router';
import { Layout } from './common/layout/layout';
import { ArticlePage } from './features/articles/article-page/article-page';
import { CategoryPage } from './features/articles/category-page/category-page';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        pathMatch: 'full'
    },
    {
        path: 'article/:id',
        component: ArticlePage
    },
    {
        path: 'category/:category',
        component: CategoryPage
    },
    {
        path: '**',
        redirectTo: ''
    }
];
