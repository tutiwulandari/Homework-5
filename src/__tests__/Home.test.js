import Home from "../pages/Home/Home"
import { screen, waitFor } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe("Home", () => {
  test("There is a Waktu", async () => {
    const queryClient = new QueryClient()
    return (
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    )
    await waitFor(() => {
      expect(screen.getByText("Waktu")).toBeInTheDocument()
    })
  })
  
})
