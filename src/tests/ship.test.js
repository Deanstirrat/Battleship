import Ship from "../ship";

test("sunk ship", () => {
  const sunkShip = Ship(3);
  sunkShip.hit();
  sunkShip.hit();
  sunkShip.hit();
  expect(sunkShip.isSunk()).toBe(true);
});
