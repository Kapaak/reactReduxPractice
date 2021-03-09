import logo from "./logo.svg";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import TextElement from "./components/TextElement";
function App() {
	return (
		<Provider store={store}>
			<TextElement />
		</Provider>
	);
}

export default App;
