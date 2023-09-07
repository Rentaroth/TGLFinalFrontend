import {
  Outlet,
  Link,
  Router,
  Route,
  RootRoute,
} from '@tanstack/react-router';
import { index } from './components';

const AppRoute = new RootRoute({ component: App })

function App() {
  return (
    <>
      <div className=' flex h-[10vh] align-middle justify-center'>
        <h1 className=' flex flex-col justify-center font-roboto font-bold text-xl'>TGLBlog</h1>
      </div>
      <section className='h-[90vh] flex flex-col'>
        <nav className=' flex justify-evenly align-middle'>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <div>
            <Link to='/read'>Read</Link>
          </div>
          <div>
            <Link to='/write'>Write</Link>
          </div>
        </nav>
        <hr />
        <Outlet />
      </section>
    </>
  );
}

const HomeRoute = new Route({ getParentRoute: () => AppRoute, path: '/', component: index.home });
const LoginRoute = new Route({ getParentRoute: () => AppRoute, path: '/login', component: index.login });
const ReadRoute = new Route({ getParentRoute: () => AppRoute, path: '/read', component: index.read });
const WriteRoute = new Route({ getParentRoute: () => AppRoute, path: '/write', component: index.write });


const routeTree = AppRoute.addChildren([
  HomeRoute,
  LoginRoute,
  ReadRoute,
  WriteRoute,
]);

const router = new Router({ routeTree });

export default router