it('should do a touch gesture', async () => {
  const screen = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/signature"]');
  await expect(screen).toExist();
  console.log('Signature field found. Drawing signature...');

  await browser.performActions([
    { type: 'pointer', id: 'finger1', parameters: { pointerType: 'touch' }, actions: [
      { type: 'pointerMove', duration: 0, x: 350, y: 900 },
      { type: 'pointerDown', button: 0 },
      { type: 'pause', duration: 10 },
      { type: 'pointerMove', duration: 500, x: 800, y: 1400 },
      { type: 'pointerUp', button: 0 }
    ]}
  ]);
  
  await $('//android.widget.Button[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnDone"]').click();
  
});
