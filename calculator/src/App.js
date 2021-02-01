import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <div style={{ height: "20%" }}>
          <div id="screen" class="screen">
            {" "}
          </div>
        </div>
        <div style={{ height: "80%" }}>
          <div style={{ height: "20%" }}>
            <button onclick="clean()" class="actionButton">
              {" "}
              C{" "}
            </button>
            <button onclick="changeSign()" class="actionButton">
              {" "}
              ±{" "}
            </button>
            <button onclick="mod()" class="actionButton">
              {" "}
              %{" "}
            </button>
            <button onclick="divide()" class="actionButton">
              {" "}
              ÷{" "}
            </button>
          </div>
          <div style={{ height: "20%" }}>
            <button onclick="type(7)"> 7 </button>
            <button onclick="type(8)"> 8 </button>
            <button onclick="type(9)"> 9 </button>
            <button onclick="multiply()" class="actionButton">
              {" "}
              ×{" "}
            </button>
          </div>
          <div style={{ height: "20%" }}>
            <button onclick="type(4)"> 4 </button>
            <button onclick="type(5)"> 5 </button>
            <button onclick="type(6)"> 6 </button>
            <button onclick="minus()" class="actionButton">
              {" "}
              -{" "}
            </button>
          </div>
          <div style={{ height: "20%" }}>
            <button onclick="type(1)"> 1 </button>
            <button onclick="type(2)"> 2 </button>
            <button onclick="type(3)"> 3 </button>
            <button onclick="plus()" class="actionButton">
              {" "}
              +{" "}
            </button>
          </div>
          <div style={{ height: "20%" }}>
            <button onclick="type(0)" style={{ flex: "1 1 calc(75% - 4px);" }}>
              {" "}
              0{" "}
            </button>
            <button onclick="equal()" class="actionButton">
              {" "}
              ={" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
