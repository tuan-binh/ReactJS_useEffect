import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  /**
   *  const { name,value } = e.target
   *
   *
   * {
   *    email: asdsahdasda,
   *    password: ádjasjdjas
   * }
   *
   */

  // không có clean up useEffect(()=>{})
  // có clean up
  useEffect(() => {
    // Promise (lời hứa) -> 1. pending - 2.fulfilled
    //                                 \ 3.rejected

    // restful api
    /**
     * GET http://localhost:8080/api/v1/todos
     * GET http://localhost:8080/api/v1/todos/1
     */
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      {data?.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </>
  );
}

export default App;
