# User Instructions

## About

This is a website that let's you easily order coffee from our coffeehouse

## Starting

Go to the given website URL, and if the server is running, you will be able to use the app

## Navigation and Features

### The Header

<img width="1212" height="66" alt="image" src="https://github.com/user-attachments/assets/c7e31ac5-64e0-4652-9617-19f143f4719e" />

The header let's you easily navigate the website, simply press any of the names to go to that specific page.

### The Store Page

<img width="1195" height="553" alt="image" src="https://github.com/user-attachments/assets/d6c09a21-eaaf-48fe-ae68-cca78a90db0c" />

The first and most important one. From the store page you can add search and add items you want to your cart.

To find a specific item click on the "Look for specific item.." field located above the item list and then type name of your desired product

To add an item to the cart, hover over the item and press the green "Add To Cart" button placed below the price

### the Cart Page

<img width="1196" height="628" alt="image" src="https://github.com/user-attachments/assets/2b61ca3a-74a4-4777-ac1c-d78f422d1924" />

Through the cart page you can see and manage items that were added to your cart and make orders.

To remove a specific item from the cart, hover over the item and press the red "Remove From Cart" button placed below the price

To remove all items from your cart, press the "Clear Cart" button located above all items

If you're happy with your selection and want to proceed, scroll to the bottom of the page and press the "Create Order" button

### The Edit Page

<img width="1240" height="695" alt="image" src="https://github.com/user-attachments/assets/896636d5-e90e-408f-ad00-f229c77bd604" />

The Edit page makes it possible for staff to easily add new items to the store.

To create a new item, input all the parameters into the "id", "name", "description", "price", "amount" and "image_path". NOTE: the ID must be unique from ID of all other items

**ID** - ID of the item, must be unique
**Name** - Name of the item that will show up as the title of the item
**Description** - Description that will show up below the item
**Price** - The cost of an item in dollars
**Amount** - The amount of an item
**Image Path** - path to image, as stored on server (for example: "croissant.jpg")
  
To remove an item, simply find that item in the list below and click "remove item" button

## FAQ

#### Q: How do I add an item to my cart?

A: Go to the Store page, find an item you would like to add, and press the "Add to Cart" button, displayed on that item.

#### Q: How do I find a specific item?

A: To find a specific item click on the "Look for specific item.." field located above the item list and then type name of your desired product.

#### Q: How do I clear my cart?

A: Go to cart page and press the "clear cart" button.

#### Q: How do I create an order?

A: Go to cart page and press the "Create order" button.


# Developer Instructions

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.14.

### NOTE: YOU MUST START THE BACKEND BEFOREHAND FOR THIS APP TO WORK CORRECTLY

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```
