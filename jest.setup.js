// This line is used to import the TextEncoder and TextDecoder classes from Node.js's built-in util module.
import { TextEncoder, TextDecoder } from "util";

// This code makes the TextEncoder and TextDecoder APIs available globally in a Node.js environment.
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
