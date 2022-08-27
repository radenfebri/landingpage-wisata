import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
      <p className="text-gray-500 text-lg">React and Tailwind CSS in action</p>
      <Footer />
    </div>
  );
}
export default App;