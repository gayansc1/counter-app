import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

// Mock window.alert function
const mockAlert = jest.fn();
window.alert = mockAlert;

test('it should render counter component without any errors', () => {
  render(<Counter />);
});

test('initial count state value should be 0', () => {
  render(<Counter />);
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
})

test('it should increase count state to 1 when Increase button is clicked', () => {
  render(<Counter />);
  const IncreaseBtnElement = screen.getByText(/Increase/i);
  fireEvent.click(IncreaseBtnElement);
  const countElement = screen.getByText(/Count: 1/i);
  expect(countElement).toBeInTheDocument();
})

test('it should decrease count state to 0 when Decrease button is clicked', () => {
  render(<Counter />);
  //click on increment button once
  const IncreaseBtnElement = screen.getByText(/Increase/i);
  fireEvent.click(IncreaseBtnElement);

  //click on decrement button once should decrease count by 1
  const DecreaseBtnElement = screen.getByText(/Decrease/i);
  fireEvent.click(DecreaseBtnElement);
  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
})

test('it should reset the count state to 0 when Reset button is clicked and if current count equals to 1', () => {
  render(<Counter />);
  const IncreaseBtnElement = screen.getByText(/Increase/i);
  const resetButton = screen.getByText(/Reset/i);

  //click on increment button twice
  fireEvent.click(IncreaseBtnElement);
  fireEvent.click(IncreaseBtnElement);
  expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();

  //click on reset button
  fireEvent.click(resetButton);
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});

test('it should show an alert when count state exceeds 10 on increase', () => {
  render(<Counter />);
  const IncreaseBtnElement = screen.getByText(/Increase/i);

  // Increase the count to more than 10
  fireEvent.click(IncreaseBtnElement);
  fireEvent.click(IncreaseBtnElement);
  fireEvent.click(IncreaseBtnElement);
  fireEvent.click(IncreaseBtnElement);
  fireEvent.click(IncreaseBtnElement);
  fireEvent.click(IncreaseBtnElement);
  fireEvent.click(IncreaseBtnElement);
  fireEvent.click(IncreaseBtnElement);
  fireEvent.click(IncreaseBtnElement);
  fireEvent.click(IncreaseBtnElement);
  fireEvent.click(IncreaseBtnElement);

  // Alert should be poped up when count goes above 10
  expect(mockAlert).toHaveBeenCalledWith("Count can't be more than 10");
});

test('it should show an alert when count state goes below 0 on decrease', () => {
  render(<Counter />);
  const DecreaseBtnElement = screen.getByText(/Decrease/i);

  //  Initial count is 0 and click Decrease the count
  fireEvent.click(DecreaseBtnElement);

  // Alert should be poped up when count goes below 0
  expect(mockAlert).toHaveBeenCalledWith("Count can't be less than 0");
});
