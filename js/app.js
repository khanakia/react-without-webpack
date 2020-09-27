const Link = ReactRouterDOM.Link,
Route = ReactRouterDOM.Route;

const App = (props) => (
	<ReactRouterDOM.BrowserRouter basename="/react-without-webpack">
		<NavBar />
		<Route path="/" exact component={Home} />
		<Route path="/contact" component={Contact} />
		<Route path="/products" component={Products} />
		<Footer />
	</ReactRouterDOM.BrowserRouter>
);

ReactDOM.render(<App />, document.querySelector("#root"));
