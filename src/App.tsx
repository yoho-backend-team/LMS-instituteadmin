import Approutes from "./routes/AppRoutes";
import dotenv from 'dotenv'
dotenv.config()

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Approutes />
    </div>
  );
}

export default App;

