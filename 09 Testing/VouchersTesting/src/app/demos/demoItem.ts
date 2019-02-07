export class DemoItem {
  constructor(private mdonly: boolean = false) {}

  url: string;
  title: string;
  component: string;
  markdown?: string;
}
