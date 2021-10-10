import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AuthContext = createContext();

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: { q: 'game of thr' },
  headers: {
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': '683a931212mshd9a66bff4f16265p1a44e5jsn60dd8c2b716c'
  }
};

function AuthContextProvider(props) {
  const [recipe, setRecipe] = useState()
  useEffect(() => {
      axios?.request(options)?.then(function (response) {
          // console.log(response.data);
          setRecipe(response?.data?.d)
      }).catch(function (error) {
          console.error(error);
      });
  }, [])
  console.log(`recipe`, recipe)
  return (
    <AuthContext.Provider value={{ recipe }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;