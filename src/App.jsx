import axios from 'axios'

function App() {
  
  const getList = () => {
    console.log("목록 데이터 요청...");

    //로컬테스트
    //const SERVER_URL = "http://localhost:3000/api/list";

    //배포용
    const SERVER_URL = "/api/list";

    axios.get(SERVER_URL)
    .then((res) =>{
      console.log("응답받은 데이터>>", res.data);
    });
  }

  return (
    <>
      <h1>NCP 배포 서비스</h1>
      <button onClick={getList}>목록조회</button>   
    </>
  )
}

export default App
