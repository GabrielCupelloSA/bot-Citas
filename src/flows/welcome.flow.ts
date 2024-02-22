import { EVENTS, addKeyword } from "@bot-whatsapp/bot";
import conversationalLayer from "src/layers/conversational.layer";
import mainLayer from "src/layers/main.layer";

// Este flujo responde a cualquier palabra escrita
const welcomeFlow = addKeyword(EVENTS.WELCOME)
  .addAction(conversationalLayer)
  .addAction(mainLayer);

export default welcomeFlow;
