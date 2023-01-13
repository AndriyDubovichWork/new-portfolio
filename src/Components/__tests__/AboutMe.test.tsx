import { render, screen, cleanup } from '@testing-library/react';
import AboutMe from '../App/AboutMe/AboutMe';

test('About me should render', () => {
  render(<AboutMe />);
  const AboutMeElement = screen.getByTestId('aboutMe');
  expect(AboutMeElement).toBeInTheDocument();
});
