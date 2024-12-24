export default {
  quoteProps: 'preserve',
  trailingComma: 'es5',
  singleQuote: true,
  semi: true, // Добавляет точку с запятой в конце каждой инструкции.
  bracketSpacing: true, // Оставляет пробелы между скобками в объектах: { foo: bar }.
  trailingComma: 'all', // Добавляет запятые в конце последнего элемента (в объектах, массивах и т.д.).
  printWidth: 90, // Максимальная ширина строки, после которой код переносится.
  tabWidth: 2, // Использует 2 пробела для отступов.
  arrowParens: 'always', // Всегда добавляет круглые скобки вокруг аргументов стрелочных функций.
  endOfLine: 'lf', // Использует символ перевода строки LF (Unix стиль).
  bracketSameLine: false, // Открывающая скобка в JSX размещается на новой строке (вместо той же строки, что и тег).
  requirePragma: false, // Не требует специальной pragma для форматирования файла.
  htmlWhitespaceSensitivity: 'ignore', // Сохраняет пробелы в HTML строго так, как они заданы. // ignore для того чтобы часть закрывающей скобки не переносился
  vueIndentScriptAndStyle: false, // Не добавляет отступы внутри тегов <script> и <style> в файлах Vue.
  singleAttributePerLine: true, // Каждый атрибут в HTML/JSX переносится на отдельную строку.
};
