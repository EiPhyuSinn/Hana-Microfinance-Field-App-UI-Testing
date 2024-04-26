
// const expect = chai.expect;

describe('Appium Gestures', function () {

  it('should draw a straight line', async function () {
    const startX = 100; // Replace with your desired start X coordinate
    const startY = 200; // Replace with your desired start Y coordinate
    const endX = 300; // Replace with your desired end X coordinate
    const endY = 400; // Replace with your desired end Y coordinate

    await driver.touchAction([
        { action: 'press', x: 200, y: 200 },
        { action: 'moveTo', x: 200, y: 300 },
        'release'
    ])
    await driver.pause(1000); // Add a slight delay after drawing the line
  });
});
