// ============ НАЛАШТУВАННЯ ГРИ ============
// Цей файл можна відкрити в Блокноті та змінювати. Після змін оновіть сторінку в браузері (F5).

window.CONFIG = {

  // Назви файлів у папці assets. Якщо файлу немає, гра малює вбудований варіант.
  files: {
    startBg:    'assets/start.png',          // фон початкового екрану
    startMusic: 'assets/start_music.mp3',    // музика початкового екрану
    selectBg:   'assets/select_bg.png',      // фон екрану вибору (і екрану підказок)
    fightBg:    'assets/fight_bg.png',       // фон бою
    fightMusic: 'assets/fight_music.mp3',    // музика бою (необов’язково)
    hitSounds:  'assets/sounds/hit'          // звуки ударів: hit1.mp3, hit2.mp3, hit3.mp3 ...
  },

  characters: {
    agiy: {                                  // Аґій Лоці
      select: 'assets/select_agiy.png',      // портрет на екрані вибору
      head:   'assets/head_agiy.png',        // голова в бою
      object: 'assets/object_agiy.png',      // предмет фаталіті (падає зверху)
      objectSize: 220                        // ширина предмета в пікселях
    },
    bimbim: {                                // Бімбім
      select: 'assets/select_bimbim.png',
      head:   'assets/head_bimbim.png',
      object: 'assets/object_bimbim.png',    // предмет фаталіті (вилітає з живота)
      objectSize: 200
    }
  },

  floorPercent: 87,     // де лінія підлоги на фоні бою, у % висоти кадру (бійці стоять на ній)
  headSize: 84,         // висота голови бійця в пікселях
  headRound: false,     // true: обрізати голову по колу
  mirrorHead: false,    // true: голова віддзеркалюється, коли боєць дивиться вліво
  bgCropLimit: 0.15,    // якщо для заповнення екрану треба обрізати понад 15% фону, він показується цілим на розмитому тлі

  finishPercent: 15,    // коли у когось лишається менше цього % HP, вмикається режим фаталіті
  finishSeconds: 6,     // скільки секунд є на фаталіті
  aiFinishChance: 0.7,  // шанс, що комп’ютер добиє вас, коли у вас менше 15% HP (0.7 = 70%)

  difficulty: 1,        // комп’ютер: 0.6 легко, 1 нормально, 1.6 важко
  musicVolume: 0.55,    // гучність музики (0–1)
  hitVolume: 0.8        // гучність звуків ударів (0–1)
};
