#!/usr/bin/env node
import { program } from "commander";
import { start } from "./components/welcomeHandler.js"

program
    .version("1.0.0")
    .description("Rock Paper Scissors")
    .action(async() => {
        console.log("Welcome to Rock Paper Scissors!")
        const IsPlaying = await start();
        if(!IsPlaying)
            console.log("Goodbye!")
        else
            console.log("wellconme!")
    }
);

    program.parse(process.argv);