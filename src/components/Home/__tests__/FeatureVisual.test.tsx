vi.mock("../trusted_by/usePrefersReducedMotion", () => ({
  __esModule: true,
  default: () => false,
}));

vi.mock("embla-carousel-react", () => ({
  __esModule: true,
  default: () => [() => {}, { scrollTo: vi.fn() }],
}));

vi.mock("embla-carousel-auto-scroll", () => ({
  __esModule: true,
  default: () => ({}),
}));

import { render, screen, within } from "@testing-library/react";
import FeatureVisual from "../our_services/FeatureVisual";
import activities from "../our_services/Prompt/data/Activities";

// Duplicate activities array to test repeated rendering
const duplicatedActivities = [...activities, ...activities];

describe("FeatureVisual Component", () => {
  // Render the component before each test
  beforeEach(() => {
    render(<FeatureVisual />);
  });

  it("renders the activities list with all items", () => {
    // Check that the list exists
    const activitiesList = screen.getByRole("list");
    expect(activitiesList).toBeInTheDocument();

    // Check that all list items are rendered
    const listItems = within(activitiesList).getAllByRole("listitem");
    expect(listItems).toHaveLength(duplicatedActivities.length);
  });

  it("renders each activity icon correctly", () => {
    const activitiesList = screen.getByRole("list");
    const activityIcons =
      within(activitiesList).getAllByTestId("activity-icon");

    activityIcons.forEach((icon) => {
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute("aria-hidden", "true");
    });
  });

  it("renders the correct title, subtitle, and status for each activity", () => {
    duplicatedActivities.forEach((activity) => {
      // Check the status icons
      const statusIcons = screen.getAllByLabelText(activity.status);
      statusIcons.forEach((icon) => {
        expect(icon).toBeInTheDocument();
      });

      // Check the title and subtitle
      const titles = screen.getAllByText(activity.title);
      const subtitles = screen.getAllByText(activity.subtitle);

      expect(titles).toHaveLength(2); // Because of duplication
      expect(subtitles).toHaveLength(2);

      titles.forEach((title) => expect(title).toBeInTheDocument());
      subtitles.forEach((subtitle) => expect(subtitle).toBeInTheDocument());
    });
  });
});
