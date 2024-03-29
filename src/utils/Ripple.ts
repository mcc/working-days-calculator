/**
 *
 * @description creates a ripple effect on event target.
 * @param {Event} e
 */
export function createRipple(e: React.MouseEvent<HTMLElement>) {
  const { currentTarget } = e;
  if (!currentTarget) return;

  const xCoord = e.clientX;
  const yCoord = e.clientY;

  const topPos = currentTarget.offsetTop;
  const leftPos = currentTarget.offsetLeft;

  const x = xCoord - leftPos;
  const y = yCoord - topPos;

  const span = document.createElement("span");
  span.classList.add("ripple");
  span.style.top = `${y}px`;
  span.style.left = `${x}px`;

  currentTarget.appendChild(span);

  setTimeout(() => {
    currentTarget.removeChild(span);
  }, 500);
}
