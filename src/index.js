import App from "./component/app.js"
import {render} from "./lib/react-dom.js"

const container = document.getElementById("root")
render(new App(), container)
