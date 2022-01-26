import * as style from "./App.module.scss";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./routes/MainPage";
import UserPage from "./routes/UserPage";

interface State {
    isLoading: boolean,
    data: any
}

const App = () => {
  const [users, setUsers] = useState<State>({
    isLoading: false,
    data: [],
  });
  

  const handleClickFilter = (array:Array<object>, option:string) => {
    const copy = [...array];

    const getProperty = (obj:object, path:string) =>
      path.split(`.`).reduce((nested:any, key) => nested && nested[key], obj);
    const result = copy.sort((a, b) =>
      getProperty(a, option) > getProperty(b, option)
        ? 1
        : getProperty(b, option) > getProperty(a, option)
        ? -1
        : 0
    );
    setUsers((prevState:State) => ({
      ...prevState,
      data: result,
    }));
  };
  useEffect(() => {
    const getUsers = async () => {
      setUsers((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      const result = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());
      // const normalised = result.reduce((acc, item) => {
      //    acc[item.id] = item;
      //    return acc
      // },{})
      setUsers({
        isLoading: false,
        data: result,
      });
    };
    getUsers();
  }, []);

  if (users.isLoading) {
    return <Loader />;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage users={users.data} filter={handleClickFilter} />}
          />
          <Route path="/user" element={<UserPage users={users.data} />}>
            <Route path=":storyId" element={<UserPage users={users.data} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
