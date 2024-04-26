# Hana Microfinance Field App UI Testing

## Overview

This repository contains UI tests for the Hana Microfinance Field App using Appium and WebdriverIO.

## Prerequisites

Before running the tests, ensure you have the following installed:

- Node.js
- Appium
- WebdriverIO
- Android SDK (for Android testing)
- Xcode (for iOS testing)

## Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/your-username/hana-microfinance-ui-testing.git
   ```

2. Navigate to the project directory:

   ```shell
   cd hana-microfinance-ui-testing
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

## Running Tests

### Android

1. Start the Appium server:

   ```shell
   appium
   ```

2. Run the tests:

   ```shell
   npm run test:android
   ```

### iOS

1. Start the Appium server:

   ```shell
   appium
   ```

2. Run the tests:

   ```shell
   npm run test:ios
   ```

## Configuration

You can configure test settings such as device capabilities and test data in the `config` directory.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
