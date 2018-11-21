---
author: Aaron Lichtner
comments: true
date: 2016-05-29 
layout: post
slug: galvanize-data-science-week-1
title: 'Galvanize Data Science: Week 1'
image: http://aaronlichtner.com/wp-content/uploads/2016/05/Screen-Shot-2016-05-29-at-10.37.13-AM-1-179x300.png
tags: bash galvanize git github sql
---

Wow, what a week!

If I thought the first week was tough, I was wrong. I haven't worked this hard in a long time. It's incredibly exciting though to be working and learning in a place like Galvanize. My fellow classmates come from all walks of life: structural engineers, web developers, business analysts, even a snowboarding instructor. The week started off with a two-hour assessment on Python, Numpy, Pandas (not the bear), SQL, Calculus, Linear Algebra, Probability, and Statistics. I'm very glad that I took Week 0 because I know for a fact that if I hadn't, the test would have been much harder. This test will serve as a baseline for our progress going through the program.

After the initial assessment, we went through all the nitty-gritty, boiler-plate at Galvanize. We got our keys, wifi setups, learned the rules. Turns out that after the program ends in August, I get 6-months of access to all the facilities that Galvanize has: conference rooms, desks, the roof deck, social events, networking, etc. That's an awesome bonus I was unaware of.

Going forward, the schedule more or less follows the table below.



## Program Schedule



<table style="width: 75%;" >
<tbody >
<tr >

<td >8:30 - 9 am
</td>

<td >Daily Quiz
</td>
</tr>
<tr >

<td >9 - 11ish
</td>

<td >Morning Lecture
</td>
</tr>
<tr >

<td >11ish - 12ish
</td>

<td >Individual Programming Assignment
</td>
</tr>
<tr >

<td >12ish - 1:15 pm
</td>

<td >Lunch
</td>
</tr>
<tr >

<td >1:15 - 3ish
</td>

<td >Afternoon Lecture
</td>
</tr>
<tr >

<td >3ish - 5pm +/- 30
</td>

<td >Pair Programming Assignment
</td>
</tr>
</tbody>
</table>

**EDIT:** The reality seems to be that I leave Galvanize around 6pm or later.

We covered far too much information this week in lectures to go over on this blog, but here are the highlights.



## Git + GitHub



One of the biggest focuses of this week has been getting familiar with Git and Github.  These two tools are fast becoming the industry-standards for version control. They allow scientists, engineers, hobbyists and the like to coordinate projects from all over the world without writing over each other's changes. In addition, if you were to say, write a line of code that breaks everything, git contains a history of what's called "commits". You can revert to previous commits and get back to your working version. Git, is the program which runs version control. Github, is an online service similar to dropbox that allows you to host and collaborate with others. [Here's a link to mine.](https://github.com/alichtner) There isn't much there yet but it will be filling up fast.



## SQL (it's just a puzzle to get stuff)



In the era of big data, sometimes the biggest problem is just accessing the information you need and leaving the rest behind. SQL (Structured-Query-Language) is a language used by many industries to access their data. Here's a little example. Let's say, I have a database called "my_table" and it contains a "favorite_cheese" column.


    
    SELECT * FROM my_table WHERE favorite_cheese='camembert';



This query would return a table of every row in the table 'my_table' where the 'favorite_cheese' column was equal to 'camembert'. Seems simple enough but by being creative you can perform incredibly complex operations to access results which are just what you are looking for.

We also covered Bash, Object-Oriented Programming, Pandas, AWS and more but I'll try to address those in future posts. The one thing I will mention is that if you type


    
    ack --cathy



into your shell, you'll see an ASCII version of Cathy saying **"Chocolate, Chocolate, Chocolate, AACK!".  **How useful is that?!

![Screen Shot 2016-05-29 at 10.37.13 AM](http://aaronlichtner.com/wp-content/uploads/2016/05/Screen-Shot-2016-05-29-at-10.37.13-AM-1-179x300.png)

The week ended with a happy hour hosted specifically for Galvanize's Data Science students past and present. We were able to meet students from the previous cohort and learn about their experiences during and after Galvanize. We've got a great group and I'm happy to be learning and working with these people.

**Next Week:** In Week 2, the focus will be on statistics and probability. Stay tuned!


