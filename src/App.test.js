import { render, screen } from "@testing-library/react";
import { submitAPI } from "./api";
import { updateTimes, initializeTimes} from "./pages/BookingPage"
import App from "./App";

test("Test updateTimes with initializedTimes", () => {
    expect(initializeTimes).not.toEqual(updateTimes ({},'2023-07-12'));
});
test("Text Welcome page menu", () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome page/);
    expect(linkElement).toBeInTheDocument();
});

test("Test Booking page menu", () => {
    render(<App />);
    const linkElement = screen.getByText(/Booking page/);
    expect(linkElement).toBeInTheDocument();
});

test("Test Booking list menu", () => {
    render(<App />);
    const linkElement = screen.getByText(/Booked list/);
    expect(linkElement).toBeInTheDocument();
});

test("Test submitAPI", () => {
    const testApi = submitAPI({})
    expect(testApi).toBe(true);
});
