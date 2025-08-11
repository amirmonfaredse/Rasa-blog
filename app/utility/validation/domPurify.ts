"use client";
import DOMPurify from "dompurify";
export function sanitizeHTMLOnClient(dirty: string) {
  return DOMPurify.sanitize(dirty);
}
export function extractTextFromHTMLOnClientWithSlice(
  htmlString: string,
  maxLength: number = 800
) {
  if (typeof window !== "undefined") {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const extractedText = doc.body.textContent;
    return extractedText?.trim().slice(0, maxLength) + "...";
  }
}
export function extractTextFromHTMLOnClient(htmlString: string) {
  if (typeof window !== "undefined") {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const extractedText = doc.body.textContent;
    return extractedText?.trim();
  }
}
