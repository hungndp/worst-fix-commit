// Worst Fix Ever: Funniest Commit Message — make.fun bounty entry.
// Writes the single commit message to /output/entry.txt (no trailing newline)
// and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts so the setup earns the twist:
// the fix spawns the very thing it was written to stop.
const SETUP = "fix: stop the retry loop from spawning subagents ";
const PUNCH = "(it now spawns subagents to stop the subagents)";
const LINE = SETUP + PUNCH;
const LIMIT = 100; // chars, per the bounty brief

function main(): void {
  if (LINE.length < 1 || LINE.length > LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
