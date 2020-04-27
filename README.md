# Object-oriented JavaScript

In this set of staged examples we show how we can use objects to structure our data and to write better (more maintainable) code.

## Stage 0: A basic program

* `index.html` is a short web page that contains just a heading and an empty canvas.  This page does not change throughout the stages.
* `index.js` is a program that draws a crimson rectangle on the canvas.  The properties of the rectangle are held in five variables.

## Stage 1: A second rectangle ([see the diff](https://github.com/portsoc/ws_objects1/commit/stage-1))
* In this stage we add a steel-blue rectangle.
* If we wanted to add more rectangles this would get repetitive and laboured.
* There is repetition in both the implicit structure of the variables for each rectangle, and the code to draw the rectangles.

## Stage 2: A `drawRect` function ([see the diff](https://github.com/portsoc/ws_objects1/commit/stage-2))

* We simplify the program by creating a `drawRect` function, so that the repetition when drawing rectangles is removed.  We can now change the way _all_ rectangles are drawn by changing this one function.

## Stage 3: Using objects ([see the diff](https://github.com/portsoc/ws_objects1/commit/stage-3))

* We group the rectangle properties in objects, to structure the code better.
* This allows us to simplify the property names.
* The `drawRect` function now takes just two parameters.

## Stage 4: Data encapsulation ([see the diff](https://github.com/portsoc/ws_objects1/commit/stage-4))

* The two rectangles in previous stages are similar; informally we might describe them as _instances_ of the same _class_ of objects, which we can name _rectangle_.
  * In programming language terms, we can define a `Class` which formalises the structure of our objects.
* Here we create a `Rectangle` class.
  * By convention class names begin with a capital letter and are singular (e.g. Rectangle, not Rectangles).
  * Classes have a `constructor` function that is called when a new _instance_ of the class is created.
  * Classes provide a standardised way of ensuring that every object has the same basic properties, and constructors set their initial values.
* Each rectangle object (i.e. each instance of the `Rectangle` class) is now created using a single line of code.

## Stage 5: Function encapsulation ([see the diff](https://github.com/portsoc/ws_objects1/commit/stage-5))

* The `drawRect` function is specific to rectangles, so it can become part of the `Rectangle` object.
  * In object-oriented terminology:
    * Functions inside classes are known as _methods_.
    * Methods are _invoked_ (not called) on objects.
    * When a method is invoked, the object on which it was called can be accessed through a special variable named `this`.
* Once the Rectangle class includes a `draw` function, each instance of rectangle can be asked to draw itself.

## Stage 6: A Circle ([see the diff](https://github.com/portsoc/ws_objects1/commit/stage-6))

* We add a `Circle` class to complement our `Rectangle`.
* Like rectangles, circles have `x` & `y` positions and a `colour`, but no `width` or `height`: instead they have a radius `r`.
* The `draw` function is rewritten so that instances of `Circle` can draw themselves.
* Now we can create and draw two circles.

## Stage 7: Superclasses and subclasses ([see the diff](https://github.com/portsoc/ws_objects1/commit/stage-7))

* In the previous stage, there is some duplication in the properties (`x`, `y` and `col`).
* We refactor the `Rectangle` and `Circle` classes, taking their common properties and moving them to a new class called `Shape`.
  * `Rectangle` and `Circle` are now subclasses of the `Shape` superclass.
  * The `Shape` class contains properties that are common to all shapes.
  * `Rectangle` and `Circle` only contain code specific to their particular shape.
  * The process of refactoring classes to create a new superclass is called _generalisation_.
* Notice that in the constructor of a subclass, its superclass constructor is called using the `super()` function – this reduces duplication of code.

## Stage 8: A file for classes ([see the diff](https://github.com/portsoc/ws_objects1/commit/stage-8))

* When code gets longer, often it's a good idea to modularise by moving independent pieces into separate files:
  * Here, we can move the class definitions into `classes.mjs`.
  * The `.mjs` extension is a convention used for JavaScript modules.
* JavaScript modules `export` functions and variables.  The `import` keyword is used to make these available in other files.
  * The `script` element in `index.html` must specify that `type=module` – only then are `import` and `export` allowed.
  * For security reasons, module imports are not allowed to load local files, therefore we need to look at this example through a web server; `npm start` will run a local web server on your machine.

## Stage 9: An array of shapes ([see the diff](https://github.com/portsoc/ws_objects1/commit/stage-9))

* We are currently drawing four shapes. In the preceding stages, we stored them in four different variables. We treat them as a bag of shapes so it is better to use an array.
* The items in the array can be accessed in a loop, which reduces the need to call `draw` multiple times.
* The `classes.mjs` file has not changed at this stage.
  * This shows the benefit of modularization: when changing the way we store the shapes we did not need to see how they are implemented.
  * Not having the code in our editor means we cannot accidentally break it.

## Stage 10: Inheriting functions from superclasses ([see the diff](https://github.com/portsoc/ws_objects1/commit/stage-10))

* A function that's defined in a superclass is inherited by all classes that extend the superclass.
* We define a `moveBy` function that accepts two parameters (`x` & `y`) and adds these to the existing `x` and `y` properties of the instance.
* We use this method to move all shapes to the right and down, then draw them a second time.

## Stage 11: Many objects ([see the diff](https://github.com/portsoc/ws_objects1/commit/stage-11))

* In this example, we use the objects we have built to create a picture that would be more difficult to maintain should we attempt to program it without objects.
* Instead of manually creating objects, we are generating them in a loop, and controlling the number and size of the objects through constants `NUM` and `SIZE` constants.

## Stage 12: User interaction ([see the diff](https://github.com/portsoc/ws_objects1/commit/stage-12))

* In this example the drawing loop is moved into a `draw` function and called initially.  Thereafter any updates to the page are caused by user interaction.
* Every time the mouse moves anywhere over the document a `move` function is invoked.  The role of this function is to move the smallest object towards the mouse's x/y position, and to move each subsequent object towards the x/y position of the object in front of it.
* Notice that as we build and experiment with new capabilities the code becomes longer and more complex.

## Stage 13: Cosmetic changes ([see the diff](https://github.com/portsoc/ws_objects1/commit/stage-13))

* Here we've realised that we have the potential to build something quite pretty, so we've experimented with making it take up the full screen.

## Stage 14: Refactoring a Tentacle class ([see the diff](https://github.com/portsoc/ws_objects1/commit/stage-14))

* The code that was previously adding to the complexity of the index has been refactored to form a new `Tentacle` class.
* Tentacles, when constructed require an `x` and `y` position, as well as a `num` and `size` (parameters that were introduced in stage 11 as constants).
* It is now the responsibility of the tentacle to loop over the various objects (the existence of which is now hidden from the top-level program - the `Circle` class is no longer imported - `Tentacle` replaces it).

## Stage 15: Draw & Touch ([see the diff](https://github.com/portsoc/ws_objects1/commit/stage-15))

* Drawing and tentacle movement are no longer dependent on user interaction.  We now use `requestAnimationFrame` to constantly request that the content is redrawn.
* The draw function also clears the backdrop using a slightly-transparent rectangle, so that after a few frames of overdrawing any content that is not directly under the current tentacle will be removed.
* In addition to mouse input, this version adds touch events, so the tentacle will work on mobile phones and tablets.
