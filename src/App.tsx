import { Button } from "@/components/ui/button"
import BranchPage from "./components/Branch/branchPage"
import BranchOverview from "./components/Branch/branchOverview"
import Dashboard from "./components/ui/User/Dashboard"


function App() {
  return (
    <>
    <BranchPage/>
         {/* <BranchOverview/> */}
          <Dashboard />

    </>
    
// // import { Button } from "@/components/ui/button"

// function App() {
//   return (
//     <div className="flex min-h-svh flex-col items-center justify-center">
//       {/* <Button>Click me</Button> */}
//     </div>
  )
}

export default App