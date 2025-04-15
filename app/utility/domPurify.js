"use client";
import DOMPurify from "dompurify";
export function sanitizeHTMLOnClient(dirty) {
  return DOMPurify.sanitize(dirty);
}
export function extractTextFromHTMLOnClient(htmlString, maxLength = 550) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const extractedText = doc.body.textContent;
  return extractedText.trim().slice(0, maxLength) + "...";
}
