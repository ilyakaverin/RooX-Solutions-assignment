import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { User, State } from "./interfaces";
import { getProperty } from './service';
import MainPage from "./routes/MainPage";
import UserPage from "./routes/UserPage";
import Loader from "./components/Loader";


const App = () => {
  const [users, setUsers] = useState<State>({
    isLoading: false,
    data: [],
  });
  const handleClickFilter = (array: Array<User>, option: string) => {
    const copy = [...array];
    const result = copy.sort((a, b) =>
      getProperty(a, option) > getProperty(b, option)
        ? 1
        : getProperty(b, option) > getProperty(a, option)
        ? -1
        : 0
    );
    setUsers((prevState: State) => ({
      ...prevState,
      data: result,
    }));
  };
  useEffect(() => {
    const getUsers = async () => {
      setUsers((prevState: State) => ({
        ...prevState,
        isLoading: true,
      }));

      const userData= await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());
      setUsers({
        isLoading: false,
        data: userData,
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
