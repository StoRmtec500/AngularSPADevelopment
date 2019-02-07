export class DemoItem {
  constructor(private mdOnly: boolean = false) {}

  url: string;
  title: string;
  component: string;
  markdown?: string;
}
