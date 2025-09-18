import { Routes } from '@angular/router';
import { Layout } from './common/layout/layout';
import { ArticlePage } from './features/articles/article-page/article-page';
import { CategoryPage } from './features/articles/category-page/category-page';
import { HomeContent } from './features/home/home-content';
import { AboutPage } from './features/about/about-page';
import { ContactPage } from './features/contact/contact-page';
import { ExternalLinksPage } from './features/external-links/external-links-page';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '',
                component: HomeContent,
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
                path: 'about',
                component: AboutPage
            },
            {
                path: 'contact',
                component: ContactPage
            },
            {
                path: 'external-links',
                component: ExternalLinksPage
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
