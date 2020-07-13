import React from "react";
import axios from "axios";

class App extends React.Component {
  componentDidMount = async () => {
    const data1 = "one";
    const data2 = "two";

    const inputData = {
      data1: data1,
      data2: data2,
    };
    //악시오스는 클라이언트가 빽엔드한테 신호를 주는 패키지임ㅋ
    await axios.post(
      "/api/test",
      {
        params: { inputData },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  render() {
    return <div>Hello react</div>;
  }
}
export default App;
