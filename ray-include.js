// #include <header_file>

const fs = require('ray-fs');
const flags = require('ray-flags');
const {sucide} = require('sucide');
const path = require('path');

if (flags.v) sucide("v1.0.0");
if (flags.f === undefined) sucide("No valid file provided!");

const fileURI = flags.f;
const fileContents = fs.readArray(fileURI).value;
const includeRegex = new RegExp(/^ *#include <[\w\.\/]+>/);

const compiledFile = fileContents.map(line => {
  if (includeRegex.test(line)) {
    const includedFileURI = line
		      .split('<')[1]
	              .split('>')[0];
    const includedFileContents = fs.readArray(includedFileURI).value.join('\n');
    const includedFileExt = path.extname(fileURI);
    return includedFileContents;
  }
  else {
    return line;
  }
}).join('');;

const fileExt = path.extname(fileURI);
const fileNameWithoutExt = path.basename(fileURI, fileExt);

function includeNow() {
  fs.write(`${fileNameWithoutExt}.included${fileExt}`, compiledFile);
}
includeNow();

