export default class ErrorRepository {
  constructor() {
    this.errorBox = new Map([
      [1, 'Недопустимое значение'],
      [2, 'Неверный логин или пароль'],
      [3, 'Введен недопустимый символ'],
    ]);
  }

  translate(code) {
    if (!this.errorBox.has(code)) return 'Unknown error';
    return this.errorBox.get(code);
  }
}
