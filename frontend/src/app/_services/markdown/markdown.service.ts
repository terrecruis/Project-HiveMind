import { Injectable } from '@angular/core';
import { marked } from 'marked';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  constructor() { }

  async convertToHtml(markdown: string): Promise<string> {
    return marked(markdown); // Restituisce una Promise<string>
  }
}
