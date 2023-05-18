import Canvas from "./canvas";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";

function App() {
  return (
    <>
      <main className="relative w-full h-screen overflow-hidden transition-all ease-in">
        <Home />
        <Canvas />
        <Customizer />
      </main>
    </>
  );
}

export default App;
