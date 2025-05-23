/**
 * Copyright Module
 * @module copyright
 * @description This module updates the copyright year in the footer.
 */

/**
 * Get the current year and update the copyright year in the footer
 */
let copyright = document.getElementsByClassName("generate_copyright")[0];
let date = new Date();
let year = date.getFullYear();
copyright.innerHTML =
  "© " + year + " – MGW Capital Loans – All rights reserved";
