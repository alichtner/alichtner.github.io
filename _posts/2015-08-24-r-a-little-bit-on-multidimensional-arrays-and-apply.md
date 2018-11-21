---
author: Aaron Lichtner
comments: true
date: 2015-08-24 
layout: post
slug: r-a-little-bit-on-multidimensional-arrays-and-apply
title: '[R] A little bit on multidimensional arrays and apply()'
image: http://aaronlichtner.com/wp-content/uploads/2015/08/3Darray_apply_11-644x181.png
---

The command-line can be a little unintuitive when dealing with multidimensional objects since it is a 2D medium. It is therefore hard to envision objects greater than 2-dimensions. They exist however!

An array, in R, is simply a vector (list of objects) where each element has additional "dimension" attributes. In other words, each vector element is given a dimensional position. This is fairly easy to represent 3-dimensionally (see below) but there is no reason why additional dimensional attributes cannot be applied to each vector element, placing them in the 4th, 5th...nth dimensions.

Using `array()`, I created a 3-dimensional array object (represented by that box with numbers you see below) populated with values 1 to 4. Each of these is given a dimensional attribute, the 1's located are located at [1,1,1] and [1,2,1]. The 4's are located at [2,1,2] and [2,2,2], and so on.

Here is the array function:


    
    array(data, dimensions,...)



![3Darray_apply_1](http://aaronlichtner.com/wp-content/uploads/2015/08/3Darray_apply_11-644x181.png)



The first argument of `array()` is the actual data to be used. The second argument is `dimensions` which is an integer vector referring to the maximum dimensions of the array; for the example above, this is 2 by 2 by 2.

Using `apply()`, we can perform functions on elements which are aligned in certain directions, in this case `sum()`. The `array()` function takes the following arguments:

    
    apply(X, margins, FUN)


where `X` is the array over which apply should be...applied, `margins` is an integer vector telling R which margins (dimensions) to maintain and which to collapse, and `FUN` is the function to by applied. Basically, the `apply()` function is taking the sum over all elements in a certain edge of the cube. The `margin` attributes simply tell R which edges we are summing over. In the examples below, R converts a 3D array object into a 2D object. You can see the effect of changing the `margins` attribute on the final result of the summed arrays shown below.

[![3Darray_apply_2_4](http://aaronlichtner.com/wp-content/uploads/2015/08/3Darray_apply_2_4-644x843.png)](http://aaronlichtner.com/wp-content/uploads/2015/08/3Darray_apply_2_4.png)
