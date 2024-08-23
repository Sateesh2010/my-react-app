import {Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRouter(props) {
    const isLoggedIn = useSelector((store) => !!store.user)
}

export default PrivateRouter;