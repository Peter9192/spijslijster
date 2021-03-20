# Spijslijster

Easily compile a week menu and shopping list.

This repository contains the source code for a simple webpage that allows users
to search and select recipes from a database and add them to a (week) menu. It
will automatically compile a shopping list from the recipes' ingredients.

Since this is originally made for a Dutch website, there is a minimal amount of
content that's still Dutch.

## Adding recipes

Recipes are added as YAML files with the following syntax:

```YAML
title: Handmade potato chips

description: Make your own potato chips 

ingredients:
  - 5 big potatos
  - 5 g salt

prepping:
  - Pre-heat the oven to 200 °C
  - Peel the potatos (optional)
  
cooking:
  - Slice the potatos (thickness approximately 2 mm)
  - Wash and dry the potato slices
  - Sprinkle with oil and sea salt
  - Spread over a baking tray covered with a sheet of parshment paper
  - Bake for 20 minutes (flip after 10 minutes for the best result)

picture: potato_chips.jpg

reference: https://en.wikipedia.org/wiki/Potato_chip
```

## Technical

Disclaimer: this is a hobby project and one of my first experiences with web
development. Please keep this in mind if you try to re-use parts of the code.
Constructive feedback is always welcome (you may open an issue).

The site is written in simple HTML5 with Vanilla JS and Sass for styling. It
uses the fetch API to retreive all recipes from a JSON file. This is a temporary
solution until I have time to setup something better.

The JSON file is created by combining multiple YAML files. A simple python
script to do this is included with the source files.

This project is still under heavy development.