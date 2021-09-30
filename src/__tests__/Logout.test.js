import { screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Logout from "../pages/Status/Logout";

Enzyme.configure({ adapter: new Adapter() });

describe("Logout", () => {
    test("renders loading", async () => {
        const queryClient = new QueryClient();
        return (
            <QueryClientProvider client={queryClient}>
                <Logout />
            </QueryClientProvider>
        );
        await waitFor(() => {
            expect(screen.getByText("Keluar")).toBeInTheDocument();
        });
    });

    


});