# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| File | screenshot | Notes |                                                                                                 |
| --- | --- | --- | ----------------------------------------------------------------------------------------------------------|
| Home | ![screenshot](documentation/html-homepage-validation.png) | Pass: No Errors |
| Login | ![screenshot](documentation/html-loginpage-validation.png) | Pass: No Errors |
| Signup | ![screenshot](documentation/html-signuppage-validation.png) | I am aware of the errors on this page, the errors are are from the Django custom form |
| Menu | ![screenshot](documentation/html-menupage-validation.png) | Pass: No Errors |
| Reservation | ![screenshot](documentation/html-reservationpage-validation.png) | Pass: No Errors |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Page | screenshot | Notes |                                                                                                 |
| --- | --- | --- | ----------------------------------------------------------------------------------------------------------|
| Style.css  | ![screenshot](documentation/css-validation.png) |  Pass: No Errors |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| File | screenshot | Notes |                                                                                                 |
| --- | --- | --- | ----------------------------------------------------------------------------------------------------------|
| Reservation.js  | ![screenshot](documentation/js-reservation-validation.png) |  Pass: No Errors |


## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Home | About | Booking | Menu | Account | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Chrome | ![screenshot](documentation/homepage-desktop.png) | ![screenshot](documentation/aboutpage-chrome.png) | ![screenshot](documentation/booking-page-chrome.png) | ![screenshot](documentation/menu-page-chrome.png)  | ![screenshot](documentation/account-page-chrome.png) | Works as expected |
| Opera | ![screenshot](documentation/homepage-opera.png) | ![screenshot](documentation/aboutpage-opera.png) | ![screenshot](documentation/booking-page-opera.png) | ![screenshot](documentation/menu-page-opera.png)  | ![screenshot](documentation/account-page-opera.png) | Works as expected |
| Edge | ![screenshot](documentation/homepage-edge.png) | ![screenshot](documentation/aboutpage-edge.png) | ![screenshot](documentation/booking-page-edge.png) | ![screenshot](documentation/menu-page-edge.png)  | ![screenshot](documentation/account-page-edge.png) | Works as expected |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Home | ![screenshot](documentation/lighthouse-mobile-home.png) | ![screenshot](documentation/lighthouse-desktop-home.png) | Slow response time due to large images and some warnings |
| Booking | ![screenshot](documentation/lighthouse-desktop-booking.png) | ![screenshot](documentation/lighthouse-desktop-booking.png) | some warnings |

## Responsiveness

I've tested my deployed project for responsiveness issues.

| Device| Home | About | Booking | Menu | Account | Signup | Login | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mobile (DevTools) | ![screenshot](documentation/home-mobile.png) | ![screenshot](documentation/about-mobile.png) | ![screenshot](documentation/booking-mobile.png) | ![screenshot](documentation/menu-mobile.png) | ![screenshot](documentation/account-mobile.png) | ![screenshot](documentation/signup-mobile.png) | ![screenshot](documentation/login-mobile.png) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/home-tablet.png) | ![screenshot](documentation/about-tablet.png) | ![screenshot](documentation/booking-tablet.png) | ![screenshot](documentation/menu-tablet.png) | ![screenshot](documentation/account-tablet.png) | ![screenshot](documentation/signup-tablet.png) | ![screenshot](documentation/login-tablet.png)   | Works as expected |
| Desktop | ![screenshot](documentation/homepage-desktop.png) | ![screenshot](documentation/aboutpage-chrome.png) | ![screenshot](documentation/booking-page-chrome.png) | ![screenshot](documentation/menu-page-chrome.png) | ![screenshot](documentation/account-page-chrome.png) | ![screenshot](documentation/signup-desktop.png) | ![screenshot](documentation/login-desktop.png)  | Works as expected |