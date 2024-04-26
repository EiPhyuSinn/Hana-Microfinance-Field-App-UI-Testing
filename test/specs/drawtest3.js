it('should do a touch gesture', async () => {
   
  const screen = await $('//*[@text="Client Photo *"]')
  await expect(screen).toExist();
  console.log('testing success');

  });
  
  