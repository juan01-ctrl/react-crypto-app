import Navbar from "./Navbar"

const { fireEvent, render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");

describe("Navbar", () => {
    beforeEach(() => {
      const dom = render(
        <MemoryRouter>
          <Navbar></Navbar>
        </MemoryRouter>
      );
    });
    test("Should show nav open in onClick hamburger menu", () => {
      const button = screen.getByRole('button', { name: 'Toggle navigation' })
      fireEvent.click(button);
      expect(screen.queryByText(/coins/i)).toBeDefined();
    });
  });
  