import { Routes } from '@angular/router';

//Components
import { IndexComponent } from './components/pages/index/index.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ShopProductComponent } from './components/pages/shop-product/shop-product.component';
import { BlogArticleComponent } from './components/pages/blog-article/blog-article.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { AdminProductComponent } from './components/pages/admin-product/admin-product.component';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'index', component: IndexComponent
    },
    {
        path: 'aboutus', component: AboutusComponent
    },
    {
        path: 'signin', component: SigninComponent
    },
    {
        path: 'signup', component: SignupComponent
    },
    {
        path: 'shop', component: ShopComponent
    },
    {
        path: 'shop-product/:id', component: ShopProductComponent
    },
    {
        path: 'cart', component: CartComponent
    },
    {
        path: 'profile', component: ProfileComponent
    },
    {
        path: 'blog', component: BlogComponent
    },
    {
        path: 'blog-article/:id', component: BlogArticleComponent
    },
    {
        path: 'admin-product', component: AdminProductComponent
    },
];
