// const express = require("express");
import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");  
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    
      {
        id: 1,
        title: "Why don't scientists trust atoms?",
        content: "Because they make up everything!",
      },
      {
        id: 2,
        title: "How does a penguin build its house?",
        content: "Igloos it together!",
      },
      {
        id: 3,
        title: "Why don't skeletons fight each other?",
        content: "They don't have the guts.",
      },
      {
        id: 4,
        title: "What do you call fake spaghetti?",
        content: "An impasta!",
      },
      {
        id: 5,
        title: "Why don't some couples go to the gym?",
        content: "Because some relationships don't work out.",
      },
      {
        id: 6,
        title: "What do you call cheese that isn't yours?",
        content: "Nacho cheese.",
      },
      {
        id: 7,
        title: "Why did the scarecrow win an award?",
        content: "Because he was outstanding in his field.",
      },
      {
        id: 8,
        title: "What do you call a bear with no teeth?",
        content: "A gummy bear.",
      },
      {
        id: 9,
        title: "Why couldn't the bicycle stand up by itself?",
        content: "It was two-tired.",
      },
      {
        id: 10,
        title: "What do you get when you cross a snowman and a vampire?",
        content: "Frostbite.",
      },
    
  ];

  res.send(jokes)
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
