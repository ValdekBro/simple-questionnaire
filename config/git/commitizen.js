module.exports = {
  // Добавим описание на русском языке ко всем типам
  types: [
    {
      value: '⭐ feat',
      name: '⭐ feat:      Добавление нового функционала',
    },
    {
      value: '🐛 fix',
      name: '🐛 fix:       Исправление ошибок',
    },
    {
      value: '⛏️ chore',
      name: '⛏️ chore:      Промежуточное изменение (фиксация не доработаной задачи)',
    },
    {
      value: '🔨refactor',
      name: '🔨refactor:  Правки кода без исправления ошибок или добавления новых функций',
    },
    {
      value: '💄 style',
      name: '💄 style:     Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)',
    },
    {
      value: '📝 docs',
      name: '📝 docs:      Обновление документации',
    },
    {
      value: '🔬 test',
      name: '🔬 test:      Добавление тестов',
    },
    {
      value: '🏗️ build',
      name: '🏗️ build:     Сборка проекта или изменения внешних зависимостей',
    },
    // {
    //   value: '🏗️ ci',
    //   name: '🏗️ ci:        Настройка CI и работа со скриптами',
    // },
    {
      value: '🏎️ perf',
      name: '🏎️ perf:      Изменения направленные на улучшение производительности',
    },
    {
      value: '⌛ revert',
      name: '⌛ revert:    Откат на предыдущие коммиты',
    },
  ],

  // Область. Она характеризует фрагмент кода, которую затронули изменения
  scopes: [
    { name: 'CONFIG' },
    { name: 'TEST' },

    { name: 'USERS' },
    { name: 'ADMINS' },
    { name: 'AUTH' },
    { name: 'ACCOUNT' },
    { name: 'AMOCRM' },
    { name: 'CLIENTS' },
    { name: 'FILES' },
    { name: 'PARTNERS' },

    { name: 'CORE' },
    { name: 'PROVIDERS' },
    { name: 'DBL' },
    { name: 'SHARED' },
    { name: 'SHARED/HELPERS' },
    { name: 'SHARED/DECORATORS' },
    { name: 'SHARED/SEEDS' },
  ],

  // Возможность задать спец ОБЛАСТЬ для определенного типа коммита (пример для 'fix')
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */

  // Поменяем дефолтные вопросы
  messages: {
    type: 'Какие изменения вы вносите?',
    scope: 'Выберите ОБЛАСТЬ, которую вы изменили (опционально):',
    // Спросим если allowCustomScopes в true
    customScope: 'Укажите свою ОБЛАСТЬ:',
    subject: 'Напишите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n',
    body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    breaking: 'Список BREAKING CHANGES (опционально):\n',
    // footer: 'Место для мета данных (тикетов, ссылок и остального). Например: MRKT-700, MRKT-800:\n',
    confirmCommit: 'Вас устраивает получившийся коммит?',
  },

  // Разрешим собственную ОБЛАСТЬ
  allowCustomScopes: true,

  // Запрет на Breaking Changes
  allowBreakingChanges: false,

  // Префикс для нижнего колонтитула
  footerPrefix: 'МЕТА ДАННЫЕ:',

  // limit subject length
  subjectLimit: 72,
}
