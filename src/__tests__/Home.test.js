import { screen, waitFor } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import Home from "../pages/Home/Home"

Enzyme.configure({ adapter: new Adapter() })

