import { config as sharedconfig } from "./wdio.conf.shared.js";
import {EMULATOR_DEVICE_NAME,EMULATOR_DEVICE_VERSION, ANDROID_APP_PATH } from "./constants.js";

export const config = {
  ...sharedconfig,
    // ====================
    // Runner Configuration
    // ====================
    runner: "local",
    port: 4723,
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        '../test/specs/androidTests*.js'
    ],
    exclude: [],
    // ============
    // Capabilities
    // ============

      //Android Simulator
    capabilities:  [

  {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:orientation': 'PORTRAIT',
    //'appium:deviceName': ENV_READER.EMULATOR_DEVICE_NAME,
    //'appium:platformVersion': ENV_READER.EMULATOR_DEVICE_VERSION,
    'appium:deviceName': EMULATOR_DEVICE_NAME,
    'appium:platformVersion': EMULATOR_DEVICE_VERSION,
    'appium:app': ANDROID_APP_PATH,
    'appium:noReset': true,
  }],
    // ===================
    // Test Configurations
    // ===================
    services: ['appium'],
    reporters: [
        'spec'
    ],
   
}