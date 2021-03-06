import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {allActionCreators} from "src/store/reducers/action-creators";

export const useAction = () => {
   const dispatch = useDispatch();
   return bindActionCreators(allActionCreators, dispatch)
}
