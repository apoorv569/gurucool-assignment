# Gurucool assignment

## Overview
This is a very basic Android app demo for Gurucool assignment.  The app fetches `quotes` data from [dummyjson.com](dummyjson.com) and displays each quote in custom component `Card`.  The `Card` displays the Quote on the top and the Author name on the bottom.

The app has 3 tabs (**Home**, **Profile** and **Settings**) created using `Tabs` from `expo-router` which uses `react-navigation/bottom-tabs` behind the scenes.

The **Home** tab shows the quotes as mentioned above, the **Profile** tab shows a basic user form with a profile picture (Avatar) the image is just the `React Native` `favicon`, Username, Password and Bio as field, which updates the details (locally only) and reflects them in the welcome message on the **Home** tab and the **Settings** tab shows some basic options to control dark mode, make app fullscreen (which basically hides the header and statusbar) and enter a number to determine how many quotes to fetch that are shown on the **Home* tab.  All options are functional BTW.

## How to run the app
To run the app locally i.e on an Android emulator, you need to install and launch [AndroidStudio](https://developer.android.com/studio), then create a android virtual device, follow the instructions [here](https://developer.android.com/studio/run/managing-avds) to create one.  Start the emulator, then simply run:
```
npm run start
```
and type `a` to run your app in the running `emulator`.

To run the app locally on your phone, scan the qr code from the output of the command mentioned above.

## Dependencies used
The project was created using `npx create-expo-app` which installs everything needed, the app uses `Tabs` which uses `react-navigation/bottom-tabs` behind the scenes.

## Building the APK
To build the `APK` run:
```
npx expo prebuild
```
this creates the platform specific directories and build files.  From there, you can go to the `android` directory and run:
```
./gradlew clean
```
followed by,
```
./gradlew assembleRelease
```
