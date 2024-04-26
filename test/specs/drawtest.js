it('should do a touch gesture', async () => {
  const screen = await driver.waitUntil(async () => {
    const elements = await $$('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivImage"]');

    if (elements.length < 2) {
      return false;
    }

    return elements[0];
  })

  // const screen = await $('//*[@text="Client Photo *"]')

  // console.table({ labelSeen: await screen.isDisplayed() });

  await expect(screen).toExist();
  console.log('image field found');

  // Get the location of the element
  const location = await screen.getLocation();

  // Perform a tap gesture using the location of the element
  await browser.performActions([
    { type: 'pointer', id: 'finger1', parameters: { pointerType: 'touch' }, actions: [
      { type: 'pointerMove', duration: 0, x: location.x, y: location.y },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 10 },
      { type: 'pointerUp', button: 0 }
    ]}
  ]);
});

