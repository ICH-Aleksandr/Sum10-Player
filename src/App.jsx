import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "./redux/slices/userSlice";

function App() {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.data);
  const count = useSelector((state) => state.user.count);

  function logout() {
    dispatch(reset());
  }

  return (
    <div>
      <h1>app</h1>
    </div>
  );
}
export default App;
