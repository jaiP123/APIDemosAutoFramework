<h2 align="center"> Mobile Test Automation Framework using  WebdriverIO & Appium </h2>


## Prerequisite:
- NodeJs
- Appium
- Appium-Inspector
- Android Studio/ xcode
- Emulator/ Simulator
- Java
- VSCode
- Appium driver

## Steps:

### Installing Appium on a local machine
### Installing Java
 Add JAVA_HOME env variable
### Setup Android SDK path environment variable
```
- ANDROID_HOME = <path to Sdk folder>
- %ANDROID_HOME%\tools [path variable]
- %ANDROID_HOME%\tools\bin  [path variable]
- %ANDROID_HOME%\platform-tools  [path variable]
```

### Setup/Create virtual device on Android studio:
```
 Open Android Studio
   --> Create Virtual Device 
   --> Check device with adb devices command
```

### Clone repository &  Install dependencies:
```bash
npm install
```

### Run Test:
```
Update device details  EMULATOR_DEVICE_NAME &  EMULATOR_DEVICE_VERSION in config/constants.js file

Using  command line run below ->
yarn test-android
OR
npx test-android
```