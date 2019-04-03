import Basic from './Basic/example';
import UrlParameters from './UrlParameters/example';
import Redirect from './Redirect(Auth)/example';
import CustomLink from './CustomLink/example';
import PreventingTransition from './PreventingTransition/example';
import NoMatch from './NoMatch/example';
import RecursivePath from './RecursivePath/example';
import Sidebar from './Sidebar/example';
import AnimatedTransition from './AnimatedTransition/example';
import AmbiguousMatch from './AmbiguousMatch/example';
import RouteConfig from './RouteConfig/example';
import ModalGallary from './ModalGallary/example';
import StaticRouterContext from './StaticRouterContext/example';
import QueryParameters from './QueryParameters/example';

const appRoutes = [
	{
		id: 1,
		name:'Basic',
		path: '/basic',
		component: Basic
	},
	{
		id: 2,
		name:'UrlParameters',
		path: '/urlParameters',
		component: UrlParameters
	},
	{
		id: 3,
		name:'Redirect',
		path: '/redirect',
		component: Redirect
	},
	{
		id: 4,
		name:'CustomLink',
		path: '/customLink',
		component: CustomLink
	},
	{
		id: 5,
		name:'PreventingTransition',
		path: '/preventingTransition',
		component: PreventingTransition
	},
	{
		id: 6,
		name:'NoMatch',
		path: '/noMatch',
		component: NoMatch
	},
	{
		id: 7,
		name:'RecursivePath',
		path: '/recursivePath',
		component: RecursivePath
	},
	{
		id: 8,
		name:'Sidebar',
		path: '/sidebar',
		component: Sidebar
	},
	{
		id: 9,
		name:'AnimatedTransition',
		path: '/animatedTransition',
		component: AnimatedTransition
	},
	{
		id: 10,
		name:'AmbiguousMatch',
		path: '/ambiguousMatch',
		component: AmbiguousMatch
	},
	{
		id: 11,
		name:'RouteConfig',
		path: '/routeConfig',
		component: RouteConfig
	},
	{
		id: 12,
		name:'ModalGallary',
		path: '/modalGallary',
		component: ModalGallary
	},
	{
		id: 13,
		name:'StaticRouterContext',
		path: '/staticRouterContext',
		component: StaticRouterContext
	},
	{
		id: 14,
		name:'QueryParameters',
		path: '/queryParameters',
		component: QueryParameters
	}
];

export default appRoutes;