console.log("js파일 연결 성공") //console창에 출력

const button = document.getElementById("mybutton"); //id값 찾아서 button에 저장

button.addEventListener("click", runpractice); //button 클릭하면 runpractice 함수 실행

function runpractice() {
    let name = document.getElementById("nameInput").value; //입력받은 값을 name에 저장

        if(name === "심서현"){
        document.querySelector("#output").textContent = "안녕하세요 심팀장님. 맞팔 좀 해주세요."; // id값 찾아서 textContent로 텍스트 입력
        console.log("함수 실행")
        }
        else if(name ==="정목진"){
        document.querySelector("#output").textContent = "목진이 어서오고~"; // id값 찾아서 textContent로 텍스트 입력
        console.log("함수 실행")
        }
        else if(name ==="김현수"){
        document.querySelector("#output").textContent = "안녕하세요 김현수님. 친해질 수 있는 기회가 있겠죠?";   // id값 찾아서 textContent로 텍스트 입력
        console.log("함수 실행")
        }
        else{
        document.querySelector("#output").textContent = "누구세요?";    // id값 찾아서 textContent로 텍스트 입력
        console.log("함수 실행")
        }
    }