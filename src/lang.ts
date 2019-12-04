export default class Language {
  public locale: string = 'zh-Hans';
  public text: Map<string, string> = new Map();
  public hans: Map<string, string> = new Map([
    ['label', '标签'],
    ['password', '密码'],
    ['advanced', '高级'],
    ['length', '长度'],
    ['structure', '结构'],
    ['lowercase', '小写字母'],
    ['uppercase', '大写字母'],
    ['number', '数字'],
    ['symbol', '符号'],
    ['avoidAmbChar', '排除易混淆'],
    ['generate', '生成'],
  ]);

  private hant: Map<string, string> = new Map([
    ['label', '標籤'],
    ['password', '密碼'],
    ['advanced', '高級'],
    ['length', '長度'],
    ['lowercase', '小寫字母'],
    ['uppercase', '大寫字母'],
    ['number', '數字'],
    ['symbol', '符號'],
    ['avoidAmbChar', '排除易混淆'],
    ['generate', '生成'],
  ]);

  constructor(locale: string) {
    this.locale = locale;
    this.changeString();
  }

  public setLocale(locale: string) {
    this.locale = locale;
    this.changeString();
  }

  public changeString() {
    let value!: string | undefined;
    for (const key of this.hans.keys()) {
      switch (this.locale) {
        case 'zh-Hans':
          value = this.hans.get(key);
          break;
        case 'zh-Hant':
          value = this.hant.get(key);
          break;
        default:
          break;
      }
      if (typeof value == 'string') {
        this.text.set(key, value);
      }
    }
  }
}
