# Flashcard-Generator
This app allows users to create two types of flashcards : Basic flashcards and Cloze-Deleted flash.

A Node.js-based command line flashcard generation module. Simply import Flashcards.js for access to two flashcard constructor functions. Packaged with example app.js program that demonstrates how you might use these constructors to generate flashcards for a user via Inquirer.

Flashcard Types

This module can create two kinds of flashcards.

Basic Flashcards

A basic flashcard consists of a front and a back.

To create a new basic flashcard containing the front and back text of the card.

var BasicFlashcard = new BasicFlashcard(ans.front, ans.back);

Cloze-Deleted Flashcards

A cloze-deleted flashcard has a partial text, and a deleted text.

For example:
 
var ClozeFlashcard = new ClozeFlashcard(ans.partialText, ans.deletedText);

