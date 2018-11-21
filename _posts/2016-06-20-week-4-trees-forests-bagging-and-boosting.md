---
author: Aaron Lichtner
comments: false
date: 2016-06-20 
layout: post
slug: week-4-trees-forests-bagging-and-boosting
title: Week 4 - Trees, Forests, Bagging and Boosting
image: http://aaronlichtner.com/wp-content/uploads/2016/06/pride_trees-644x474.png
tags: galvanize machine-learning random-forests supervised-methods
---

[caption id="attachment_826" align="aligncenter" width="644"]![pride_trees](http://aaronlichtner.com/wp-content/uploads/2016/06/pride_trees-644x474.png) It's Pride and here is my Random Forest - this isn't really how it works...[/caption]



This week we started on what I would consider the more exciting part of data science -- **machine learning**.





By using computers, we are able to process vast quantities of data and discover patterns that would otherwise go unnoticed. Broadly speaking, there are two main categories of machine learning, supervised and unsupervised methods. This week we focused on supervised methods which I will briefly go over here.





Let's take an entirely made up (and ridiculous) set of data relating 'eye color' and 'sushi preference' to whether or not a person 'likes cats'. The 'likes cats' will serve as our 'label'. Using a supervised method you feed the computer a bunch of observations as well as labels for those observations. We can then employ a variety of different algorithms to determine what, if any, features relate to the response variable, 'Likes Cats.' By crafting our experimental design and analysis well, we might even be able to determine if some of those features (i.e. eye color), CAUSE someone to like cats. More than that, if our model is good, we take a new person's eye color and sushi preference, and predict if they'll like cats or not with some degree of certainty (think targeted ads).



<table style="width: 75%;" >
<tbody >
<tr >

<td >**X1 = Eye Color**
</td>

<td >**X2 = Favorite Sushi**
</td>

<td >**Y = Likes Cats **
</td>
</tr>
<tr >

<td >Brown
</td>

<td >California Rolls
</td>

<td >True
</td>
</tr>
<tr >

<td >Brown
</td>

<td >Yellowtail
</td>

<td >False
</td>
</tr>
<tr >

<td >Blue
</td>

<td >California Roll
</td>

<td >False
</td>
</tr>
<tr >

<td >Green
</td>

<td >Cucumber Roll
</td>

<td >True
</td>
</tr>
</tbody>
</table>



Now, from my example, this may seem childish and pointless but imagine you have thousands of predictors variables (X's) and millions of observations (rows of data). How do you process this? How do you find patterns? Certainly not using an Excel spreadsheet.





This is the type of challenge that biostatisticians are facing when using genetic data to predict cancers and Facebook's engineers deal with when trying to recognize classify users by their behaviors. These are non-trivial problems to have and machine learning is an essential tool for solving them.





[Click here for a beautiful example of machine learning at work!](http://www.r2d3.us/visual-intro-to-machine-learning-part-1/)





We learned 8 different algorithms this week. It was definitely an intense week and I won't bore you by going over all of the nitty gritty. I will however provide links to helpful resources if you are at all interested. [Gradient Descent, Stochastic Gradient Descent](http://sebastianruder.com/optimizing-gradient-descent/index.html#stochasticgradientdescent), [Decision Trees](https://www.youtube.com/watch?v=eKD5gxPPeY0), [Random Forests](https://en.wikipedia.org/wiki/Random_forest), [Bagging,](https://en.wikipedia.org/wiki/Ensemble_learning) [Boosting, AdaBoost,](https://en.wikipedia.org/wiki/AdaBoost) and [Support Vector Machines](http://www.cs.ucf.edu/courses/cap6412/fall2009/papers/Berwick2003.pdf).





Please keep reading and ask me about Machine Learning, it's awesome.




