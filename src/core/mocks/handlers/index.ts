import handlerLogin from "./login";
import handlerProduct from "./product";

const rootHandler = [...handlerProduct, ...handlerLogin];

export default rootHandler;
