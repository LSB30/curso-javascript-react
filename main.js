import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"

import Cardgame from "./src/components/Cardgame";

const $app = document.querySelector("#app");

const $htmlCardGame = Cardgame();

$app.insertAdjacentHTML("beforeend", $htmlCardGame)
